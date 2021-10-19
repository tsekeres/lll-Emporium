using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Dapper;
using LLL_Emporium.Models;


namespace LLL_Emporium.DataAccess
{
    public class RoleTypeRepository
    {
        readonly string _connectionString;
        public RoleTypeRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("LLL-Emporium");
        }

        internal IEnumerable<RoleType> GetAllRoleTypes()
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * FROM RoleTypes";
            var result = db.Query<RoleType>(sql);
            return result;
        }

        internal RoleType GetRoleTypeById(Guid roleId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * FROM RoleTypes 
                        WHERE Id = @Id";
            var parameter = new
            {
                Id = roleId
            };

            var result = db.QuerySingleOrDefault<RoleType>(sql, parameter);
            return result;
            }
        }
    }
}
