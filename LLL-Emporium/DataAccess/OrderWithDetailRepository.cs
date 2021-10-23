using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using Dapper;
using LLL_Emporium.Models;
using Microsoft.Extensions.Configuration;

namespace LLL_Emporium.DataAccess
{
    public class OrderWithDetailRepository
    {
        readonly string _connectionString;

        public OrderWithDetailRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("LLL-Emporium");
        }

        internal OrderWithDetail GetOrderWithDetails(Guid orderId)
        {
            using var db = new SqlConnection(_connectionString);
            OrderWithDetail resultObj = new OrderWithDetail();
            resultObj.LineItems = new List<OrderLineDetail>();
            resultObj.TransactionItems = new List<TransactionDetail>();


            var sql = @"SELECT * FROM Orders
                        WHERE Id = @Id";
            var parameter = new
            {
                Id = orderId
            };
            
            var result = db.QueryFirstOrDefault<Order>(sql, parameter);
            if (result != null)
            {
                resultObj.Order = result;

                // Get first and last name of customer
                if (result.CustomerId != Guid.Empty)
                {
                    sql = @"SELECT * FROM Users
                            WHERE Id = @Id";
                    var userParameter = new
                    {
                        Id = result.CustomerId
                    };
                    var userResult = db.QueryFirstOrDefault<User>(sql, userParameter);
                    if (userResult != null)
                    {
                        resultObj.CustomerFirstName = userResult.FirstName;
                        resultObj.CustomerLastName = userResult.LastName;
                    }
                }


                // Get list of line items
                sql = @"SELECT OL.Id, OL.ProductId,
	                    OL.UnitPrice, OL.Quantity, OL.Discount,
	                    PR.ProductName, PR.ProductDescription,
	                    PR.ProductImageURL, PR.InventoryCount, PR.Price as CurrentPrice FROM OrderLines OL
                        JOIN Products PR
                        ON PR.Id = OL.ProductId
                        WHERE OL.OrderId = @Id";
                var orderLineResult = db.Query<OrderLineDetail>(sql, parameter);
                if (orderLineResult.Any())
                {
                    foreach (var lineItem in orderLineResult)
                    {
                        resultObj.LineItems.Add(lineItem);
                    }
                }


                // Get list of transactions on order
                sql = @"SELECT TR.Id, PT.Id AS PaymentTypeId, TT.Id AS TransactionTypeId, 
                            TR.PaymentAccount, TR.PaymentAmount, TR.PaymentDate,
	                        PT.PaymentTypeName, TT.TransactionTypeName  FROM Transactions TR
                        JOIN PaymentTypes PT
	                        ON TR.PaymentTypeId = PT.Id
                        JOIN TransactionTypes TT
	                        ON TR.TransactionTypeId = TT.Id
                        WHERE TR.OrderId = @Id";
                var transactionsResult = db.Query<TransactionDetail>(sql, parameter);
                if (transactionsResult.Any())
                {
                    foreach(var transaction in transactionsResult)
                    {
                        resultObj.TransactionItems.Add(transaction);
                    }
                }
            }
            if (result == null)
            {
                return null;
            }
            else return resultObj;
        }
    }
}
