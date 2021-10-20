using Dapper;
using LLL_Emporium.Models;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LLL_Emporium.DataAccess
{
    public class TransactionTypeRepository
    {
        readonly string _connectionString;

        public TransactionTypeRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("LLL-Emporium");
        }

        internal IEnumerable<TransactionType> GetAllTransactionTypes()
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * FROM TransactionTypes";
            var result = db.Query<TransactionType>(sql);
            return result;
        }
        internal TransactionType GetTransactionTypeById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from TransactionTypes
                            WHERE Id = @Id";

            var parameters = new
            {
                Id = id
            };

            var result = db.QuerySingleOrDefault<TransactionType>(sql, parameters);
            return result;
        }

        internal Guid AddTransactionType(TransactionType transactionType)
        {
            using var db = new SqlConnection(_connectionString);
            Guid id = new Guid();
            var sql = @"INSERT INTO [dbo].[TransactionTypes]
                            ([TransactionTypeName])
                            OUTPUT inserted.Id
                            VALUES
                           (@TransactionTypeName)";

            var parameters = new
            {
                TransactionTypeName = transactionType.TransactionTypeName,
            };

            id = db.ExecuteScalar<Guid>(sql, parameters);
            if (!id.Equals(Guid.Empty))
            {
                transactionType.Id = id;
            }
            return id;
        }

        internal bool DeleteTransactionType(Guid id)
        {
            bool returnVal = false;
            using var db = new SqlConnection(_connectionString);
            var sql = @"DELETE FROM TransactionTypes
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

        internal bool UpdateTransactionType(Guid transactionTypeId, TransactionType transactionType)
        {
            bool returnVal = false;
            using var db = new SqlConnection(_connectionString);
            var sql = @"UPDATE TransactionTypes
                            SET TransactionTypeName = @TransactionTypeName
                                Output Inserted.*
                            WHERE Id = @Id";

            var parameters = new
            {
                Id = transactionTypeId,
                TransactionTypeName = transactionType.TransactionTypeName,
            };

            var result = db.Query<TransactionType>(sql, parameters);
            if (result.Count() > 0)
            {
                returnVal = true;
            }
            return returnVal;
        }
    }
}
