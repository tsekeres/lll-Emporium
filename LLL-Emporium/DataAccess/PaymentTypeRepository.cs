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
            var sql = @"SELECT * FROM PaymentTypes";
            var result = db.Query<PaymentType>(sql);
            return result;
        }
    }
}
