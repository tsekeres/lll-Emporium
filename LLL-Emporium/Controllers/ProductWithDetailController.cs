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

        [HttpGet("{designerId}")]
        public IActionResult GetAllOrderLines(Guid designerId)
        {
            var result = _productWithDetailRepository.GetProductWithDetails(designerId);
            if (result != null)
            {
                return Ok(result);
            }
            else return NotFound($"Designer Id {designerId} not found.");
        }
    }
}
