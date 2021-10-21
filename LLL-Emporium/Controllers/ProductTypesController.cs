using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LLL_Emporium.DataAccess;
using LLL_Emporium.Models;

namespace LLL_Emporium.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductTypesController : ControllerBase
    {
        private ProductTypesRepository _productTypesRepository;

        public ProductTypesController(ProductTypesRepository productTypesRepo)
        {
            _productTypesRepository = productTypesRepo;
        }
    
        [HttpGet]
         public IActionResult GetAllProductTypes()
            {
                var result = _productTypesRepository.GetAllProductTypes();
                if (result.Count() >= 0)
                {
                    return Ok(result);
                }
                else return NotFound("No Product Types");
            }

        [HttpGet("{TypeName}")]
        public IActionResult GetProductTypeByName(string TypeName)
        {
            var ProductType = _productTypesRepository.GetByName(TypeName);
            if (TypeName == null)
            {
                return NotFound("No Product Type Found");
            }
            return Ok(ProductType);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProductType(Guid id)
        {
            _productTypesRepository.Delete(id);

            return Ok();
        }

        [HttpPost]
      public IActionResult AddProductType(ProductTypes newProductType)
        {
            if (string.IsNullOrEmpty(newProductType.TypeName))
            {
                return BadRequest("Type name required");
            }
            _productTypesRepository.Add(newProductType);
            return Created($"/api/ProductTypes/{newProductType.Id}", newProductType);
        }

       /* [HttpPut("{TypeName}")]
        public IActionResult UpdateProductType(string TypeName, ProductTypes productType)
        {
            var productTypeToGet = _productTypesRepository.GetByName(TypeName);

            if (productTypeToGet == null)
            {
                return NotFound($"{TypeName} not found ");
            }
            var productTypeUpdate = _productTypesRepository.Update(TypeName, productType);

            return Ok(productTypeUpdate);
        }
*/
        [HttpGet("{id}/productId")]
        public IActionResult GetProductTypeById(Guid id)
        {
            var ProductType = _productTypesRepository.GetById(id);
            if (ProductType == null)
            {
                return NotFound("No user found.");
            }
            return Ok(ProductType);
        }


        [HttpPut("{id}/updateProductType")]
        public IActionResult UpdateProductTypeId(Guid id, ProductTypes productType)
        {
            var productTypeToGet = _productTypesRepository.GetById(id);

            if (productTypeToGet == null)
            {
                return NotFound($"{id} not found ");
            }
            var productTypeUpdate = _productTypesRepository.Update(id, productType);

            return Ok(productTypeUpdate);
        }
    }

}

     

