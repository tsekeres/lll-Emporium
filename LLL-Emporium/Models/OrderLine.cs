using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LLL_Emporium.Models
{
    public class OrderLine
    {
        public Guid Id { get; set; }
        public Guid OrderId { get; set; }

        public Guid ProductId { get; set; }
        public decimal UnitPrice { get; set; }
        public int Quantity { get; set; }
        public decimal Discount { get; set; }
    }
}
