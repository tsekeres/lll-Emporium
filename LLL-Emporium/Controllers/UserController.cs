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
    [Route("api/users")]
    [ApiController]
    public class UserController : ControllerBase

    { 
        private UserRepository _userRepository;

            public UserController(UserRepository userRepo)
        {
            _userRepository = userRepo;
        }


        [HttpGet]
        public IActionResult GetAllUsers()
        {
            var result = _userRepository.GetAll();
            if (result.Count() >= 0)
            {
                return Ok(result);
            }
            else return NotFound("No users");
        }
    }
}
