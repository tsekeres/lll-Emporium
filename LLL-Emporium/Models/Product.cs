using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LLL_Emporium.Models
{
    public class Product
    {
        public Guid Id { get; set; }
        public Guid ProductTypeId { get; set; }
        public Guid DesignerId { get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public string ProductImageUrl { get; set; }
        public decimal Price { get; set; }
        public int InventoryCount { get; set; }

    }
}
