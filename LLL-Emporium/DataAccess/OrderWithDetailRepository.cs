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

            var sql = @"SELECT * FROM Orders
                        WHERE Id = @Id";
            var parameter = new
            {
                Id = orderId
            };
            
            var result = db.QueryFirstOrDefault<Order>(sql, parameter);
            if ( result != null)
            {
                resultObj.Order = result;
                sql = @"SELECT * FROM OrderLines OL
                        JOIN Products PR
                        ON PR.Id = OL.ProductId
                        WHERE OL.OrderId = @Id";
                var orderLineResult = db.Query<OrderLineDetail>(sql, parameter);
                if (orderLineResult.Count() > 0)
                {
                    foreach ( var lineItem in orderLineResult)
                    {
                        resultObj.LineItems.Add(lineItem);
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
