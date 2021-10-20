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
    public class OrderRepository
    {
        readonly string _connectionString;
        public OrderRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("LLL-Emporium");
        }

        internal IEnumerable<Order> GetAllOrders()
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * FROM Orders";
            var result = db.Query<Order>(sql);
            return result;
        }

        internal Order GetOrderById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from Orders
                        WHERE Id = @Id";

            var parameters = new
            {
                Id = id
            };

            var result = db.QuerySingleOrDefault<Order>(sql, parameters);
            return result;
        }
        internal IEnumerable<Order> GetOrdersByCustomerId(Guid customerId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from Orders
                        WHERE CustomerId = @CustomerId";

            var parameters = new
            {
                CustomerId = customerId 
            };

            var result = db.Query<Order>(sql, parameters);
            return result;
        }

        internal Guid AddOrder(Order order)
        {
            using var db = new SqlConnection(_connectionString);
            Guid id = new Guid();

            // leaving out the Id parameter as the database will create the primary key Id
            var sql = @"INSERT INTO [dbo].[Orders]
                        ([CustomerId], 
                         [ShippingAddress],
                         [ShippingCity],
                         [ShippingState],
                         [ShippingZip],
                         [ShippingCost],
                         [OrderDate])
                        OUTPUT inserted.Id
                        VALUES
                       (@CustomerId,
                        @ShippingAddress,
		                @ShippingCity,
                        @ShippingState,
                        @ShippingZip,
                        @ShippingCost,
                        @OrderDate)";

            id = db.ExecuteScalar<Guid>(sql, order);
            if (!id.Equals(Guid.Empty))
            {
                order.Id = id;
            }
            return id;
        }

        internal bool DeleteOrder(Guid id)
        {
            bool returnVal = false;
            using var db = new SqlConnection(_connectionString);
            var sql = @"DELETE FROM Orders
                        OUTPUT Deleted.Id
                        WHERE Id = @Id";
            var parameters = new
            {
                Id = id
            };

            var result = db.Query(sql, parameters);
            if (result.Count() > 0)
            {
                returnVal = true;
            }
            return returnVal;
        }

        internal bool UpdateOrder(Guid orderId, Order order)
        {
            bool returnVal = false;
            using var db = new SqlConnection(_connectionString);
            var sql = @"UPDATE Orders
                        SET ShippingAddress = @ShippingAddress,
                            ShippingCity = @ShippingCity,
                            ShippingState = @ShippingState,
                            ShippingZip = @ShippingZip,
                            ShippingCost = @ShippingCost,
                            OrderDate = @OrderDate
                            Output Inserted.*
                        WHERE Id = @Id";

            var parameters = new
            {
                Id = orderId,
                ShippingAddress = order.ShippingAddress,
                ShippingCity = order.ShippingCity,
                ShippingState = order.ShippingState,
                ShippingZip = order.ShippingZip,
                ShippingCost = order.ShippingCost,
                OrderDate = order.OrderDate
            };

            var result = db.Query<Order>(sql, parameters);
            if (result.Count() > 0)
            {
                returnVal = true;
            }
            return returnVal;
        }
    }
}
