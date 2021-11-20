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
    public class PaymentTypeRepository
    {
        readonly string _connectionString;

        public PaymentTypeRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("LLL-Emporium");
        }

        internal IEnumerable<PaymentType> GetAllPaymentTypes()
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * FROM PaymentTypes
                        ORDER BY PaymentTypeName";
            var result = db.Query<PaymentType>(sql);
            return result;
        }
        internal PaymentType GetPaymentTypeById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from PaymentTypes
                            WHERE Id = @Id";

            var parameters = new
            {
                Id = id
            };

            var result = db.QuerySingleOrDefault<PaymentType>(sql, parameters);
            return result;
        }

        internal Guid AddPaymentType(PaymentType paymentType)
        {
            using var db = new SqlConnection(_connectionString);
            Guid id = new Guid();
            var sql = @"INSERT INTO [dbo].[PaymentTypes]
                            ([PaymentTypeName])
                            OUTPUT inserted.Id
                            VALUES
                           (@PaymentTypeName)";

            var parameters = new
            {
                PaymentTypeName = paymentType.PaymentTypeName,
            };

            id = db.ExecuteScalar<Guid>(sql, parameters);
            if (!id.Equals(Guid.Empty))
            {
                paymentType.Id = id;
            }
            return id;
        }

        internal bool DeletePaymentType(Guid id)
        {
            bool returnVal = false;
            using var db = new SqlConnection(_connectionString);
            var sql = @"DELETE FROM PaymentTypes
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

        internal bool UpdatePaymentType(Guid paymentTypeId, PaymentType paymentType)
        {
            bool returnVal = false;
            using var db = new SqlConnection(_connectionString);
            var sql = @"UPDATE PaymentTypes
                            SET PaymentTypeName = @PaymentTypeName
                                Output Inserted.*
                            WHERE Id = @Id";

            var parameters = new
            {
                Id = paymentTypeId,
                PaymentTypeName = paymentType.PaymentTypeName,
            };

            var result = db.Query<PaymentType>(sql, parameters);
            if (result.Count() > 0)
            {
                returnVal = true;
            }
            return returnVal;
        }
    }
}
