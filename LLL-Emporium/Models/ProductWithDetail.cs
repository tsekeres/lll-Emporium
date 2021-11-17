using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LLL_Emporium.Models
{
    public class ProductWithDetail
    {
        public Product Product { get; set; }
        public List<OrderLineDetailP> LineItems { get; set; }
        public List<OrderDetail> OrderItems { get; set; }

    }

    public class OrderLineDetailP
    {
        public Guid Id { get; set; }
        public Guid OrderId { get; set; }

        public Guid ProductId { get; set; }
        public decimal UnitPrice { get; set; }
        public int Quantity { get; set; }
        public decimal Discount { get; set; }
    }

    public class OrderDetail
    {
        public Guid Id { get; set; }
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