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
    [Route("api/orders")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private OrderRepository _orderRepository;


        public OrderController(OrderRepository orderRepo)
        {
            _orderRepository = orderRepo;
        }

        [HttpGet]
        public IActionResult GetAllOrders()
        {
            var result = _orderRepository.GetAllOrders();
            if (result.Count() > 0)
            {
                return Ok(result);
            }
            else return NotFound("No orders.");
        }

        [HttpGet("{orderId}")]
        public IActionResult GetOrderById(Guid orderId)
        {
            var result = _orderRepository.GetOrderById(orderId);
            if (result != null)
            {
                return Ok(result);
            }
            else return NotFound("Order not found");
        }

        [HttpGet("customers/{customerId}")]
        public IActionResult GetOrdersByCustomerId(Guid customerId)
        {
            var result = _orderRepository.GetOrdersByCustomerId(customerId);
            return Ok(result);
        }

        [HttpGet("customers/{customerId}/shoppingcart")]
        public IActionResult GetCustomerShoppingCart(Guid customerId)
        {
            var result = _orderRepository.GetShoppingCart(customerId);
            if (result != null)
            {
                return Ok(result);
            }
            else return NotFound($"No shopping cart for customer with id {customerId}.");
        }


        [HttpPost]
        public IActionResult CreateOrder(Order order)
        {
            var result = _orderRepository.AddOrder(order);
            if (result.Equals(Guid.Empty))
            {
                return BadRequest("Order Not Added");
            }
            else
            {
                return Created($"/api/orders/{result}", result);
            }
        }

        [HttpDelete("{orderId}")]
        public IActionResult DeleteOrder(Guid orderId)
        {
            var result = _orderRepository.DeleteOrder(orderId);
            if (result)
            {
                return Ok($"Order with Id {orderId} was deleted");
            }
            else return NotFound($"Order with Id {orderId} not found for deletion");
        }

        [HttpPut("{orderId}")]
        public IActionResult UpdateOrder(Guid orderId, Order order)
        {
            var result = _orderRepository.UpdateOrder(orderId, order);
            if (result)
            {
                return Ok($"Order with id {orderId} has been updated");
            }
            else return BadRequest($"Order with id {orderId} not updated");
        }

    }
}
