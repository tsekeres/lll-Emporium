using LLL_Emporium.DataAccess;
using Microsoft.AspNetCore.Mvc;
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

    }
}
