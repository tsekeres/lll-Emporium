using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using LLL_Emporium.Models;
using LLL_Emporium.DataAccess;

namespace LLL_Emporium.Controllers
{
    [Route("api/categories")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private CategoryRepository _categoryRepository;


        public CategoryController(CategoryRepository categoryRepo)
        {
            _categoryRepository = categoryRepo;
        }

        [HttpGet]
        public IActionResult GetAllCategories()
        {
            var result = _categoryRepository.GetAllCategories();
            if (result.Count() > 0)
            {
                return Ok(result);
            }
            else return NotFound("No categories.");
        }

        [HttpGet("{categoryId}")]
        public IActionResult GetCategoryById(Guid categoryId)
        {
            var result = _categoryRepository.GetCategoryById(categoryId);
            if (result != null)
            {
                return Ok(result);
            }
            else return NotFound("Category not found");
        }


        [HttpPost]
        public IActionResult CreateCategory(Category category)
        {
            var result = _categoryRepository.AddCategory(category);
            if (result.Equals(Guid.Empty))
            {
                return BadRequest("Category Not Added");
            }
            else
            {
                return Created($"/api/categories/{result}", result);
            }
        }

        [HttpPut("{categoryId}")]
        public IActionResult UpdateCategory(Guid categoryId, Category category)
        {
            var categoryToUpdate = _categoryRepository.GetCategoryById(categoryId);

            if (categoryToUpdate == null)
            {
                return NotFound($"Could not find a category with the id {categoryId} to update");
            }

            var updatedCategory = _categoryRepository.UpdateCategory(categoryId, category);

            return Ok(updatedCategory);

        }

        [HttpDelete("{categoryId}")]
        public IActionResult DeleteCategory(Guid categoryId)
        {
            _categoryRepository.DeleteCategory(categoryId);

            return Ok();
        }
    }
}
