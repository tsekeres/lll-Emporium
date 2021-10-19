using LLL_Emporium.DataAccess;
using LLL_Emporium.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace LLL_Emporium.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private ProductRepository _productRepository;


        public ProductController(ProductRepository productRepo)
        {
            _productRepository = productRepo;
        }

        [HttpGet]
        public IActionResult GetAllProducts()
        {
            var result = _productRepository.GetAllProducts();
            if (result.Count() > 0)
            {
                return Ok(result);
            }
            else return NotFound("No products.");
        }

        [HttpGet("{productId}")]
        public IActionResult GetProductById(Guid productId)
        {
            var result = _productRepository.GetProductById(productId);
            if (result != null)
            {
                return Ok(result);
            }
            else return NotFound("Product not found");
        }

        [HttpGet("designers/{designerId}")]
        public IActionResult GetProductsByDesignerId(Guid designerId)
        {
            var result = _productRepository.GetProductsByDesignerId(designerId);
            if (result != null)
            {
                return Ok(result);
            }
            else return NotFound("Product not found");
        }

        [HttpGet("productTypes/{productTypeId}")]
        public IActionResult GetProductsByProductTypeId(Guid productTypeId)
        {
            var result = _productRepository.GetProductsByProductTypeId(productTypeId);
            if (result != null)
            {
                return Ok(result);
            }
            else return NotFound("This product type does not containe any associated products");
        }

        [HttpPost]
        public IActionResult CreateProduct(Product product)
        {
            var result = _productRepository.AddProduct(product);
            if (result.Equals(Guid.Empty))
            {
                return BadRequest("Product Not Added");
            }
            else
            {
                return Created($"/api/products/{result}", result);
            }
        }

    }
}
