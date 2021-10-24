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
    [Route("api/roleTypes")]
    [ApiController]
    public class RoleTypeController : ControllerBase
    {
        private RoleTypeRepository _roleTypeRepository;

        public RoleTypeController(RoleTypeRepository roleTypeRepo)
        {
            _roleTypeRepository = roleTypeRepo;
        }

        [HttpGet]
        public IActionResult GetAllRoleTypes()
        {
            var result = _roleTypeRepository.GetAllRoleTypes();
            if (result.Count() > 0)
            {
                return Ok(result);
            }
            else return NotFound("No role types.");
        }

        [HttpGet("{roleTypeId}")]

        public IActionResult GetRoleTypeById(Guid roleTypeId)
        {
            var result = _roleTypeRepository.GetRoleTypeById(roleTypeId);
            if (result != null)
            {
                return Ok(result);
            }
            else return NotFound($"Role type with id {roleTypeId} not found.");
        }

        [HttpPut("{roleTypeId}")]
        public IActionResult updateRoleType(Guid roleTypeId, RoleType roleType)
        {
            var result = _roleTypeRepository.UpdateRoleType(roleTypeId, roleType);
            if (result)
            {
                return Ok($"Role type with id {roleTypeId} has been updated.");
            }
                return BadRequest($"Role type with id {roleTypeId} not found or not updated");

        }

        [HttpPost]
        public IActionResult AddRoleType(RoleType roleTypeObj)
        {
            var result = _roleTypeRepository.AddRoleType(roleTypeObj);
            if (result.Equals(Guid.Empty))
            {
                return BadRequest($"Role Type not added.");
            }
            else return Created($"/api/RoleType/{result}", result);
        }

        [HttpDelete("{roleTypeId}")]
        public IActionResult deleteRoleType(Guid roleTypeId)
        {
            var result = _roleTypeRepository.DeleteRoleType(roleTypeId);
            if (result)
            {
                return Ok($"Role type with id {roleTypeId} has been deleted");
            }
            else return BadRequest($"Role type with id {roleTypeId} not found or not deleted");
        }
    }
}
