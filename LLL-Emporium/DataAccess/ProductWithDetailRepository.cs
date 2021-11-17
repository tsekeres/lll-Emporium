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
    public class ProductWithDetailRepository
    {
        readonly string _connectionString;

        public ProductWithDetailRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("LLL-Emporium");
        }

        internal ProductWithDetail GetProductWithDetails(Guid productId)
        {
            using var db = new SqlConnection(_connectionString);
            ProductWithDetail resultObj = new ProductWithDetail();
            resultObj.LineItems = new List<OrderLineDetailP>();
            resultObj.OrderItems = new List<OrderDetail>();


            var sql = @"SELECT * FROM Products
                        WHERE Id = @Id";
            var parameter = new
            {
                Id = productId
            };
            var result = db.QueryFirstOrDefault<Product>(sql, parameter);
            if (result != null)
            {
                resultObj.Product = result;
                }
                sql = @"SELECT PR.Id, PR.ProductTypeId, PR.DesignerId,
								PR.ProductName, PR.ProductDescription, PR.ProductImageUrl,
								PR.InventoryCount, PR.Price, OL.Id, OL.OrderId, OL.ProductId,
								OL.UnitPrice, OL.Quantity, OL.Discount FROM Products PR
								JOIN OrderLines OL
								ON PR.Id = OL.ProductId
								WHERE OL.ProductId = @Id";
                var orderLineResult = db.Query<OrderLineDetailP>(sql, parameter);
                if (orderLineResult.Any())
                {
                    foreach (var lineItem in orderLineResult)
                    {
                        resultObj.LineItems.Add(lineItem);
                    }
            

            sql = @"SELECT OL.Id, OL.OrderId, OL.ProductId,
						OL.UnitPrice, OL.Quantity, OL.Discount,
						O.Id, O.CustomerId, O.OrderDate FROM OrderLines OL
						JOIN Orders O
						ON OL.OrderId = O.Id
						WHERE O.Id = OL.OrderId";
                var orderResult = db.Query<OrderDetail>(sql, parameter);
                if (orderResult.Any())
                {
                    foreach (var order in orderResult)
                    {
                        resultObj.OrderItems.Add(order);
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
