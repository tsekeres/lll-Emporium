using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LLL_Emporium.Models
{
    public class OrderWithDetail
    {
        public Order Order { get; set; }
        public List<OrderLine> LineItems  { get; set; }
    }
}
