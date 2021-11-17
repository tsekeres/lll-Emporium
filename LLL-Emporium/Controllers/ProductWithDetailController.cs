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
    [Route("api/products/details")]
    [ApiController]
    public class ProductWithDetailController : ControllerBase
    {
        private ProductWithDetailRepository _productWithDetailRepository;

        public ProductWithDetailController(ProductWithDetailRepository productWithDetailRepo)
        {
            _productWithDetailRepository = productWithDetailRepo;
        }

        [HttpGet("{productId}")]

        public IActionResult GetProductWithDetails(Guid productId)
        {
            var result = _productWithDetailRepository.GetProductWithDetails(productId);
            if (result != null)
            {
                return Ok(result);
            }
            else return NotFound($"Order with id {productId} not found");
        }
    }
}
