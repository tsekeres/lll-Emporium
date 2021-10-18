using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using Dapper;
using Microsoft.Extensions.Configuration;
using LLL_Emporium.Models;

namespace LLL_Emporium.DataAccess
{
    public class UserRepository
    {
        readonly string _connectionString;

        public UserRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("LLL-Emporium");
        }

        internal IEnumerable<User> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var users = db.Query<User>(@"Select * From Users");
            return users;
        }

        internal void Add(User newUser)
        {
            using var db = new SqlConnection(_connectionString);
            Guid id = new Guid();
            var sql = @"INSERT INTO [dbo].[Users]
                        ([FirstName],
                         [LastName],
                         [RoleTypeId],
                         [Bio])
                            OUTPUT inserted.Id
                            VALUES
                         (@FirstName,
                          @LastName,
                          @RoleTypeId,
                          @Bio)";
        

            id = db.ExecuteScalar<Guid>(sql, newUser);
            newUser.Id = id;
        }
       
    }
}
