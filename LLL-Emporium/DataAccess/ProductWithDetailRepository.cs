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

        internal IEnumerable<ProductWithDetail> GetProductWithDetails(Guid designerId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT PR.Id, PR.ProductTypeId, PR.DesignerId, PR.ProductName,
                                                        PR.ProductDescription, PR.ProductImageUrl, PR.Price,
                                                        PR.InventoryCount, OL.Id AS OrderIdOl, OL.OrderId, OL.ProductId,
                                                        OL.UnitPrice, OL.Quantity, OL.Discount, O.Id AS OrderIdO, O.CustomerId,
                                                        O.ShippingAddress, O.ShippingCity, O.ShippingState,
                                                        O.ShippingCost, O.OrderDate, O.Completed FROM Products PR
		                        JOIN OrderLines OL
			                        ON OL.ProductId = PR.Id
		                        JOIN Orders O on O.Id = OL.OrderId
		                            WHERE DesignerId = @DesignerId";
            var parameter = new
            {
                DesignerId = designerId
            };
            var result = db.Query<ProductWithDetail>(sql, parameter);
            return result;
        }
    }
}
