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

        internal User GetById(Guid userId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Select * From Users where id = @id";
            var user = db.QuerySingleOrDefault<User>(sql, new { id = userId });
            if (user == null) return null;
            return user;
        }

        internal void Delete(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Delete From Users Where Id = @id";
            db.Execute(sql, new { id });
        }
       
       internal User Update(Guid id, User user)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"update Users
                        Set FirstName = @FirstName,
                            LastName = @LastName,
                            RoleTypeId = @RoleTypeId,
                            Bio = @Bio
                       output Inserted.*
                        Where id = @id";
            user.Id = id;
            var userUpdate = db.QuerySingleOrDefault<User>(sql, user);
            return userUpdate;
        }
    }
}
