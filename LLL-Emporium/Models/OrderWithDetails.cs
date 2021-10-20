using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LLL_Emporium.Models
{
    public class OrderWithDetails
    {
        public Order Order { get; set; }
        public OrderLineMultiple LineItems { get; set; }
    }
}
