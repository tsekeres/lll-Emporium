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
                         [DisplayName],
                         [RoleTypeId],
                         [EmailAddress],
                         [ProfilePicUrl],
                         [Bio])
                            OUTPUT inserted.Id
                            VALUES
                         (@FirstName,
                          @LastName,
                          @DisplayName,
                          @RoleTypeId,
                          @EmailAddress,
                          @ProfilePicUrl,
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

        internal User GetByEmail(string email)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Select * From Users where EmailAddress = @EmailAddress";
            var parameter = new
            {
                EmailAddress = email
            };
            var user = db.QuerySingleOrDefault<User>(sql, parameter);
            return user;
        }

        internal UserWithRole GetUserWithRoleByUserEmail(string email)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT US.Id, US.RoleTypeId, RT.RoleTypeName, 
                        US.FirstName, US.LastName, 
                        US.DisplayName, US.EmailAddress,
                        US.ProfilePicURL, US.Bio
                        FROM Users US
                        JOIN RoleTypes RT
                            ON RT.Id = US.RoleTypeId
                        WHERE US.EmailAddress = @EmailAddress";
            var parameter = new
            {
                EmailAddress = email
            };
            var user = db.QuerySingleOrDefault<UserWithRole>(sql, parameter);
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
      
        internal IEnumerable<User> GetByRoleType(Guid roleTypeId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Select * From Users where RoleTypeId = @Id";
            var parameter = new
            {
                Id = roleTypeId
            };
            var GetRoleType = db.Query<User>(sql, parameter);
            return GetRoleType;
        }

    }
}
