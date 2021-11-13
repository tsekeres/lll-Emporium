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
            var sql = @"SELECT * FROM RoleTypes
                        ORDER BY roleTypeName";
            var result = db.Query<RoleType>(sql);
            if (result.Any())
            {
                return result;
            }
            else return null;
        }

        internal RoleType GetRoleTypeById(Guid roleTypeId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * FROM RoleTypes 
                        WHERE Id = @Id";
            var parameter = new
            {
                Id = roleTypeId
            };
            var result = db.QueryFirstOrDefault<RoleType>(sql, parameter);
            return result;
        }

        internal RoleType GetRoleTypeByName(string roleName)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * FROM RoleTypes 
                        WHERE RoleTypeName = @RoleTypeName";
            var parameter = new
            {
                RoleTypeName = roleName
            };
            var result = db.QueryFirstOrDefault<RoleType>(sql, parameter);
            return result;
        }

        internal bool UpdateRoleType(Guid roleTypeId, RoleType roleType)
        {
            bool returnVal = false;
            using var db = new SqlConnection(_connectionString);
            var sql = @"UPDATE RoleTypes
                        SET RoleTypeName = @RoleTypeName
                        OUTPUT Inserted.*
                        WHERE Id = @Id";
            var parameters = new
            {
                Id = roleTypeId,
                RoleTypeName = roleType.RoleTypeName
            };
            var result = db.Query<RoleType>(sql, parameters);
            if (result.Count() > 0)
            {
                returnVal = true;
            }
            return returnVal;
        }

        internal Guid AddRoleType(RoleType roleType)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"INSERT into RoleTypes ( RoleTypeName )
                        OUTPUT Inserted.Id
                        VALUES (@RoleTypeName)";

            var result = db.ExecuteScalar<Guid>(sql, roleType);
            if (!result.Equals(Guid.Empty)){
                roleType.Id = result;
            }
            return result;
        }

        internal bool DeleteRoleType(Guid roleTypeId)
        {
            bool returnVal = false;
            using var db = new SqlConnection(_connectionString);
            var sql = @"DELETE from RoleTypes
                        OUTPUT Deleted.*
                        WHERE Id = @Id";
            var parameter = new
            {
                Id = roleTypeId
            };

            var result = db.Query(sql, parameter);
            if (result.Count() > 0)
            {
                returnVal = true;
            }
            return returnVal;
        }
    }
}
