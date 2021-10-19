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
    }
}
