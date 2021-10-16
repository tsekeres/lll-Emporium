﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using Microsoft.Data.SqlClient;
using LLL_Emporium.Models;

namespace LLL_Emporium.DataAccess
{
    public class OrderLineRepository
    {
        readonly string _connectionString;

        public OrderLineRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("LLL-Emporium");
        }

        internal OrderLine GetSingleOrderLine(Guid orderLineId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * FROM OrderLines
                        WHERE Id = @Id";
            var parameter = new
            {
                Id = orderLineId
            };
            var result = db.QuerySingleOrDefault<OrderLine>(sql, parameter);
            return result;
        }

        internal IEnumerable<OrderLine> GetOrderLines(Guid orderId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * FROM OrderLines
                        WHERE OrderId = @OrderId";
            var parameter = new
            {
                OrderId = orderId
            };
            var result = db.Query<OrderLine>(sql, parameter);
            return result;
        }

        internal Guid AddLineItem(OrderLine lineItem)
        {
            using var db = new SqlConnection(_connectionString);
            Guid id = new Guid();
            var sql = @"INSERT INTO OrderLines
                        (OrderId,
                         ProductId,
                         UnitPrice,
                         Quantity,
                         Discount)
                        OUTPUT Inserted.id
                        VALUES
                        (@OrderId,
                         @ProductId,
                         @UnitPrice,
                         @Quantity,
                         @Discount)";

            var parameters = new
            {
                OrderId = lineItem.OrderId,
                ProductId = lineItem.ProductId,
                UnitPrice = lineItem.UnitPrice,
                Quantity = lineItem.Quantity,
                Discount = lineItem.Discount
            };
            id = db.ExecuteScalar<Guid>(sql, parameters);
            if (!id.Equals(Guid.Empty))
            {
                lineItem.Id = id;
            }
            return id;
        }

        internal  List<Guid> AddMultipleLineItems(OrderLineMultiple lineItems)
        {
            using var db = new SqlConnection(_connectionString);
            var resultList = new List<Guid>();
            var sql = @"INSERT INTO OrderLines
                        (OrderId,
                         ProductId,
                         UnitPrice,
                         Quantity,
                         Discount)
                        OUTPUT Inserted.Id
                        VALUES
                        (@OrderId,
                         @ProductId,
                         @UnitPrice,
                         @Quantity,
                         @Discount)";
            lineItems.OrderLines.ForEach(lineItem =>
            {
                var parameters = new
                {
                    OrderId = lineItem.OrderId,
                    ProductId = lineItem.ProductId,
                    UnitPrice = lineItem.UnitPrice,
                    Quantity = lineItem.Quantity,
                    Discount = lineItem.Discount
                };
                var result = db.Query<Guid>(sql, parameters);
                if (result.Count() > 0)
                {
                    lineItem.Id = result.First();
                    resultList.Add(result.First());
                }
            });
            return resultList;
        }

        internal bool UpdateOrderLine(Guid OrderLineId, OrderLine lineItem)
        {
            bool returnVal = false;
            var db = new SqlConnection(_connectionString);
            var sql = @"UPDATE OrderLines
                        SET OrderId = @OrderId,
                            ProductId = @ProductId,
                            UnitPrice = @UnitPrice,
                            Quantity = @Quantity,
                            Discount = @Discount
                        OUTPUT Inserted.* 
                        WHERE Id = @Id";

            lineItem.Id = OrderLineId;
            var result = db.Query<OrderLine>(sql, lineItem);
            if (result.Any())
            {
                returnVal = true;
            }

            return returnVal;
        }

        internal bool DeleteByLineId(Guid lineId)
        {
            bool returnVal = false;
            var db = new SqlConnection(_connectionString);
            var sql = @"DELETE from OrderLines
                        OUTPUT Deleted.Id
                        WHERE Id = @Id";
            var parameter = new
            {
                Id = lineId
            };
            var result = db.Query(sql, parameter);
            if(result.Any())
            {
                returnVal = true;
            }
            return returnVal;
        }

        internal int DeleteByOrderId(Guid orderLineOrderId)
        {
            var db = new SqlConnection(_connectionString);
            var sql = @"DELETE from OrderLines
                        OUTPUT Deleted.Id
                        WHERE OrderId = @OrderId";
            var parameter = new
            {
                OrderId = orderLineOrderId
            };
            var result = db.Query(sql, parameter);
            return result.Count();
        }
    }
}