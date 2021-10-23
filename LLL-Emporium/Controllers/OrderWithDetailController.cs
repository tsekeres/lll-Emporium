using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LLL_Emporium.Models;
using LLL_Emporium.DataAccess;

namespace LLL_Emporium.Controllers
{
    [Route("api/orders/details")]
    [ApiController]
    public class OrderWithDetailController : ControllerBase
    {
        private OrderWithDetailRepository _orderWithDetailRepository;

        public OrderWithDetailController(OrderWithDetailRepository orderWithDetailRepo)
        {
            _orderWithDetailRepository = orderWithDetailRepo;
        }

        [HttpGet("{orderId}")]

        public IActionResult GetOrderWithDetails(Guid orderId)
        {
            var result = _orderWithDetailRepository.GetOrderWithDetails(orderId);
            if (result != null)
            {
                return Ok(result);
            }
            else return NotFound($"Order with id {orderId} not found");
        }
    }
}
