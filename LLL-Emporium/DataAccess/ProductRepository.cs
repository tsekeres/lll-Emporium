using Dapper;
using LLL_Emporium.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LLL_Emporium.DataAccess
{
    public class ProductRepository
    {
        readonly string _connectionString;
        public ProductRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("LLL-Emporium");
        }

        internal IEnumerable<Product> GetAllProducts()
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * FROM Products";
            var result = db.Query<Product>(sql);
            return result;
        }

        internal Product GetProductById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from Products
                        WHERE Id = @Id";

            var parameters = new
            {
                Id = id
            };

            var result = db.QuerySingleOrDefault<Product>(sql, parameters);
            return result;
        }

        internal IEnumerable<Product> GetProductsByDesignerId(Guid designerId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from Products
                        WHERE DesignerId = @DesignerId";

            var parameters = new
            {
                DesignerId = designerId
            };

            var result = db.Query<Product>(sql, parameters);
            return result;
        }

        internal IEnumerable<Product> GetProductsByProductTypeId(Guid productTypeId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * from Products
                        WHERE ProductTypeId = @ProductTypeId";

            var parameters = new
            {
                ProductTypeId = productTypeId
            };

            var result = db.Query<Product>(sql, parameters);
            return result;
        }

        internal Guid AddProduct(Product product)
        {
            using var db = new SqlConnection(_connectionString);
            Guid id = new Guid();
            var sql = @"INSERT INTO [dbo].[Products]
                        ([ProductTypeId], 
                         [DesignerId],
                         [ProductName],
                         [ProductDescription],
                         [ProductImageUrl],
                         [Price],
                         [InventoryCount])
                        OUTPUT inserted.Id
                        VALUES
                       (@ProductTypeId,
                        @DesignerId,
		                @ProductName,
                        @ProductDescription,
                        @ProductImageUrl,
                        @Price,
                        @InventoryCount)";

            id = db.ExecuteScalar<Guid>(sql, product);
            if (!id.Equals(Guid.Empty))
            {
                product.Id = id;
            }
            return id;
        }

        internal bool DeleteProduct(Guid id)
        {
            bool returnVal = false;
            using var db = new SqlConnection(_connectionString);
            var sql = @"DELETE FROM Products
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

        internal Product UpdateProduct(Guid id, Product product)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"UPDATE Products
                        SET ProductName = @ProductName,
                            ProductDescription = @ProductDescription,
                            ProductImageUrl = @ProductImageUrl,
                            Price = @Price,
                            InventoryCount = @InventoryCount
                        OUTPUT Inserted.*
                        WHERE Id = @Id";

            product.Id = id;
            var updatedProduct = db.QuerySingleOrDefault<Product>(sql, product);

            return updatedProduct;
        }
    }
}
