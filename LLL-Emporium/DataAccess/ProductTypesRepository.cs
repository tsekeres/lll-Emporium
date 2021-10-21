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
    public class ProductTypesRepository
    {
        readonly string _connectionString;

        public ProductTypesRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("LLL-Emporium");
        }

        internal IEnumerable<ProductTypes> GetAllProductTypes()
        {
            using var db = new SqlConnection(_connectionString);
            var ProductTypes = db.Query<ProductTypes>(@"Select * FROM ProductTypes");
            return ProductTypes;
        }

     /*   internal ProductTypes Update(string TypeName, ProductTypes productType)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"update ProductTypes 
                        SET TypeName = @TypeName
                            ProductTypeImageUrl = @ProductTypeImageUrl";
            productType.TypeName = TypeName;
            var productTypeUpdate = db.QuerySingleOrDefault<ProductTypes>(sql, productType);
            return productTypeUpdate;
        }
     */
        internal ProductTypes GetById(Guid productTypeId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Select * From ProductTypes where id = @id";
            var ProductType = db.QuerySingleOrDefault<ProductTypes>(sql, new { id = productTypeId });
            return ProductType;
        }

        internal ProductTypes GetByName(string typeName)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Select * From ProductTypes where TypeName = @TypeName";
            var ProductType = db.QuerySingleOrDefault<ProductTypes>(sql, new { TypeName = typeName });
            return ProductType;
        }

       internal void Delete(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Delete From ProductTypes Where Id = @id";
            db.Execute(sql, new { id });
        }

        internal void Add(ProductTypes newProductType)
        {
            using var db = new SqlConnection(_connectionString);
            Guid id = new Guid();
            var sql = @"INSERT INTO [dbo].[ProductTypes]
                        ([CategoryId],
                         [TypeName],
                         [ProductTypeImageUrl])
                            OUTPUT inserted.Id
                            VALUES
                          (@CategoryId,
                          @TypeName,
                          @ProductTypeImageUrl
                          )";


            id = db.ExecuteScalar<Guid>(sql, newProductType);
            newProductType.Id = id;
        }

        internal ProductTypes Update(Guid id, ProductTypes productType)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"update ProductTypes 
                        SET TypeName = @TypeName,
                            ProductTypeImageUrl = @ProductTypeImageUrl
                            WHERE Id = @Id";
            productType.Id = id;
            var productTypeUpdated = db.QuerySingleOrDefault<ProductTypes>(sql, productType);
            return productTypeUpdated;
        }
    }
}
