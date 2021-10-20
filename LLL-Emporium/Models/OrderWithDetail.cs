using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LLL_Emporium.Models
{
    public class OrderWithDetail
    {
        public Order Order { get; set; }
        public List<OrderLineDetail> LineItems  { get; set; }
    }

    public class OrderLineDetail
    {
        public Guid Id { get; set; }
        public Guid OrderId { get; set; }
        public Guid ProductId { get; set; }
        public decimal UnitPrice { get; set; }
        public int Quantity { get; set; }
        public decimal Discount { get; set; }
        public Guid ProductTypeId { get; set; }
        public Guid DesignerId { get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public string ProductImageUrl { get; set; }
        public decimal Price { get; set; }
        public int InventoryCount { get; set; }
    }
}
