using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using Microsoft.Data.SqlClient;
using LLL_Emporium.Models;

namespace LLL_Emporium.DataAccess
{
    public class OrderLineRepository
    {
        readonly string _connectionString;

        public OrderLineRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("LLL-Emporium");
        }

        internal Guid AddLineItem(OrderLine lineItem)
        {
            using var db = new SqlConnection(_connectionString);
            Guid id = new Guid();
            var sql = @"INSERT INTO OrderLines
                        (OrderId,
                         ProductId,
                         UnitPrice,
                         Quantity,
                         Discount)
                        OUTPUT Inseted.id
                        VALUES
                        (@OrderId,
                         @ProductId,
                         @UnitPrice,
                         @Quantity,
                         @Discount)";

            var parameters = new
            {
                OrderId = lineItem.OrderId,
                ProductId = lineItem.ProductId,
                UnitPrice = lineItem.UnitPrice,
                Quantity = lineItem.Quantity,
                Discount = lineItem.Discount
            };
            id = db.ExecuteScalar<Guid>(sql, parameters);
            if (!id.Equals(Guid.Empty))
            {
                lineItem.Id = id;
            }
            return id;
        }

    }
}
