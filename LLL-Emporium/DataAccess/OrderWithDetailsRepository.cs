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
    public class OrderWithDetailsRepository
    {
        readonly string _connectionString;

        OrderWithDetailsRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("LLL-Emporium");
        }

        internal GetOrderWithDetails(Guid orderId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = 

        }


    }
}
