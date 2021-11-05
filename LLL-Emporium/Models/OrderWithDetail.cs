using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LLL_Emporium.Models
{
    public class OrderWithDetail
    {
        public Order Order { get; set; }

        public string CustomerFirstName { get; set; }
        public string CustomerLastName { get; set; }
        public List<OrderLineDetail> LineItems  { get; set; }
        public List<TransactionDetail> TransactionItems { get; set; }


    }

    public class OrderLineDetail
    {
        public Guid Id { get; set; }
        public Guid OrderId { get; set; }
        public Guid ProductId { get; set; }
        public decimal UnitPrice { get; set; }
        public int Quantity { get; set; }
        public decimal Discount { get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public string ProductImageUrl { get; set; }
        public decimal CurrentPrice { get; set; }
        public int InventoryCount { get; set; }
    }

    public class TransactionDetail
    {
        public Guid Id { get; set; }
        public Guid PaymentTypeId { get; set; }
        public Guid TransactionTypeId { get; set; }
        public string PaymentAccount { get; set; }
        public decimal PaymentAmount { get; set; }
        public DateTime PaymentDate { get; set; }
        public string PaymentTypeName { get; set; }
        public string TransactionTypeName { get; set; }

    }
}
