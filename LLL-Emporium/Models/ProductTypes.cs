using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LLL_Emporium.Models
{
    public class ProductTypes
    {
        public Guid Id { get; set; }
        public Guid CategoryId { get; set; }
        public string TypeName { get; set; }
        public string ProductTypeImageUrl { get; set; }
    }
}
