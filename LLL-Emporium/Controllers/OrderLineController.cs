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
    [Route("api/orders/orderLines")]
    [ApiController]
    public class OrderLineController : ControllerBase
    {
        private OrderLineRepository _orderLineRepository;

        public OrderLineController (OrderLineRepository linerepo)
        {
            _orderLineRepository = linerepo;

        }

        [HttpGet]
        public IActionResult GetAllOrderLines()
        {
            var result = _orderLineRepository.GetAllOrderLines();
            if (result != null)
            {
                return Ok(result);
            }
            else return NotFound("No order line items found");
        }

        [HttpGet("{orderLineId}")]
        public IActionResult GetSingleOrderLine(Guid orderLineId)
        {
            var result = _orderLineRepository.GetSingleOrderLine(orderLineId);
            if (result != null)
            {
                return Ok(result);
            }
            else return NotFound($"Orderline with id {orderLineId} not found.");
        }

        [HttpGet("/orders/{orderId}/orderLines")]
        public IActionResult GetAllOrderLines(Guid orderId)
        {
            var result = _orderLineRepository.GetOrderLines(orderId);
            if (result != null)
            {
                return Ok(result);
            }
            else return NotFound($"Order line items for order with id {orderId} not found.");
        }
        
        [HttpGet("/orders/{orderId}/orderLines/{orderLineId}")]
        public IActionResult GetAllOrderLines(Guid orderId, Guid orderLineId)
        {
            var result = _orderLineRepository.GetSingleOrderLine(orderLineId);
            if (result != null && result.OrderId == orderId)
            {
                return Ok(result);
            }
            else return NotFound($"Order line for order {orderId} with id {orderLineId} not found.");
        }


        [HttpPost]
        public IActionResult NewOrderLine(OrderLine lineItem)
        {
            var result = _orderLineRepository.AddLineItem(lineItem);
            if (result.Equals(Guid.Empty))
            {
                return BadRequest("Line Item Not Added");
            }
            else
            {
                return Created($"/api/orders/{lineItem.OrderId}/orderLines/{result}", result);
            }
        }
        [HttpPost("/orders/multipleOrderLines")]
        public IActionResult NewOrderLines(OrderLineMultiple orderList)
        {
            var result = _orderLineRepository.AddMultipleLineItems(orderList);
            if(result.Count() == 0)
            {
                return BadRequest("Line Items Not Added");
            }
            else
            {
                return Created($"/api/orders/{orderList.OrderLines[0].OrderId}/orderlines", result);
            }
        }

        [HttpPut("{lineItemId}")]
        public IActionResult UpdateOrderLine(Guid lineItemId, OrderLine lineItem)
        {
            var result = _orderLineRepository.UpdateOrderLine(lineItemId, lineItem);
            if (result)
            {
                return Ok($"Order line with id {lineItemId} successfully updated");
            }
            else return BadRequest($"Order line with id {lineItemId} not updated");
        }

        [HttpDelete("{lineItemId}")]
        public IActionResult DeleteByOrderLineId(Guid lineItemId)
        {
            var result = _orderLineRepository.DeleteByLineId(lineItemId);
            if (result)
            {
                return Ok($"LineItem with id {lineItemId} was deleted");
            }
            else return BadRequest($"LineItem with id {lineItemId} was not deleted");
        }
        
        [HttpDelete("/orders/{orderId}/orderLines")]
        public IActionResult DeleteByOrderId(Guid orderId)
        {
            var result = _orderLineRepository.DeleteByOrderId(orderId);
            if (result > 0)
            {
                return Ok($"{result} records were deleted");

            }
            else return NotFound($"{result} records were deleted");
        }
    }
}
