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

        [HttpPatch("{productId}")]
        public IActionResult UpdateProduct(Guid productId, Product product)
        {
            var productToUpdate = _productRepository.GetProductById(productId);

            if (productToUpdate == null)
            {
                return NotFound($"Could not find a product with the id {productId} to update");
            }

            var updatedProduct = _productRepository.UpdateProduct(productId, product);

            return Ok(updatedProduct);

        }

        [HttpDelete("{productId}")]
        public IActionResult DeleteProduct(Guid productId)
        {
            var result = _productRepository.DeleteProduct(productId);
            if (result)
            {
                return Ok($"{productId} deleted");
            }
            else return NotFound($"{productId} not found");
        }

    }
}
