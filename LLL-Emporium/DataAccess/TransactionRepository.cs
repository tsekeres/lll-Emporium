using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LLL_Emporium.DataAccess
{
    public class TransactionRepository
    {
        readonly string _connectionString;
        public TransactionRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("LLL-Emporium");
        }

        internal IEnumerable<Transaction> GetAllTransactions()
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * FROM Transactions";
            var result = db.Query<Transaction>(sql);
            return result;
        }

        internal Transaction GetTransactionById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from Transactions
                        WHERE Id = @Id";

            var parameters = new
            {
                Id = id
            };

            var result = db.QuerySingleOrDefault<Transaction>(sql, parameters);
            return result;
        }
        internal IEnumerable<Transaction> GetTransactionsByOrderId(Guid orderId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from Transactions
                        WHERE OrderId = @OrderId";

            var parameters = new
            {
                OrderId = orderId
            };

            var result = db.Query<Transaction>(sql, parameters);
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
