using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using Microsoft.Data.SqlClient;
using LLL_Emporium.Models;

namespace LLL_Emporium.DataAccess
{
    public class CategoryRepository
    {
        readonly string _connectionString;

        public CategoryRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("LLL-Emporium");
        }

        internal IEnumerable<Category> GetAllCategories()
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * FROM Categories";
            var result = db.Query<Category>(sql);
            return result;
        }

        internal Category GetCategoryById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from Categories
                        WHERE Id = @Id";

            var parameters = new
            {
                Id = id
            };

            var result = db.QuerySingleOrDefault<Category>(sql, parameters);
            return result;
        }

        internal Guid AddCategory(Category category)
        {
            using var db = new SqlConnection(_connectionString);
            Guid id = new Guid();

            var sql = @"INSERT INTO [dbo].[Categories]
                        ([CategoryName], 
                         [CategoryImageUrl],
                        OUTPUT inserted.Id
                        VALUES
                       (@CategoryName,
                        @CategoryImageUrl";

            id = db.ExecuteScalar<Guid>(sql, category);
            if (!id.Equals(Guid.Empty))
            {
                category.Id = id;
            }
            return id;
        }

        internal void DeleteCategory(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"DELETE FROM Orders
                        OUTPUT Deleted.Id
                        WHERE Id = @Id";
            db.Execute(sql, new { id });
        }

        internal Category UpdateCategory(Guid id, Category category)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"UPDATE Categories
                        SET CategoryName = @CategoryName,
                            CategoryImageUrl = @CategoryImageUrl
                        WHERE Id = @Id";

            category.Id = id;
            var updatedCategory = db.QuerySingleOrDefault<Category>(sql, category);

            return updatedCategory;
        }

    }
}
