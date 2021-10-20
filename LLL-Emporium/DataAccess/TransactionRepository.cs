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
        internal IEnumerable<Transaction> GetTransactionsByPaymentTypeId(Guid paymentTypeId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from Transactions
                        WHERE PaymentTypeId = @PaymentTypeId";

            var parameters = new
            {
                PaymentTypeId = paymentTypeId
            };

            var result = db.Query<Transaction>(sql, parameters);
            return result;
        }

        internal IEnumerable<Transaction> GetTransactionsByTransactionTypeId(Guid transactionTypeId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from Transactions
                        WHERE TransactionTypeId = @TransactionTypsId";

            var parameters = new
            {
                TransactionTypeId = transactionTypeId
            };

            var result = db.Query<Transaction>(sql, parameters);
            return result;
        }

        internal Guid AddTransaction(Transaction transaction)
        {
            using var db = new SqlConnection(_connectionString);
            Guid id = new Guid();

            var sql = @"INSERT INTO [dbo].[Transactions]
                        ([OrderId], 
                         [PaymentTypeId],
                         [TransactionTypeId],
                         [PaymentAccount],
                         [PaymentAmount],
                         [PaymentDate])
                        OUTPUT inserted.Id
                        VALUES
                       (@OrderId,
                        @PaymentTypeId,
                        @TransactionTypeId,
                        @PaymentAccount,
		                @PaymentAmount,
                        @PaymentDate)";

            id = db.ExecuteScalar<Guid>(sql, transaction);
            if (!id.Equals(Guid.Empty))
            {
                transaction.Id = id;
            }
            return id;
        }

        internal bool DeleteTransaction(Guid id)
        {
            bool returnVal = false;
            using var db = new SqlConnection(_connectionString);
            var sql = @"DELETE FROM Transactions
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

        internal bool UpdateTransaction(Guid transactionId, Order order)
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
