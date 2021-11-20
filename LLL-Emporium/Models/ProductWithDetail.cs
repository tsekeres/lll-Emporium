using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LLL_Emporium.Models
{
    public class ProductWithDetail
    {
        public Guid Id { get; set; }
        public Guid ProductTypeId { get; set; }
        public Guid DesignerId { get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public string ProductImageUrl { get; set; }
        public decimal Price { get; set; }
        public int InventoryCount { get; set; }
        public Guid OrderLineOl { get; set; }
        public Guid OrderId { get; set; }
        public Guid ProductId { get; set; }
        public decimal UnitPrice { get; set; }
        public int Quantity { get; set; }
        public decimal Discount { get; set; }
        public decimal CurrentPrice { get; set; }
        public Guid OrderIdO { get; set; }
        public Guid CustomerId { get; set; }
        public string ShippingAddress { get; set; }
        public string ShippingCity { get; set; }
        public string ShippingState { get; set; }
        public string ShippingZip { get; set; }
        public decimal ShippingCost { get; set; }
        public DateTime OrderDate { get; set; }
        public Boolean Completed { get; set; }
    }
}