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

        [HttpGet("{id}")]
        public IActionResult GetUserById(Guid id)
        {
            var user = _userRepository.GetById(id);
            if (user == null)
            {
                return NotFound("No user found.");
            }
            return Ok(user);
        }

        [HttpGet("email/{emailAddress}")]
        public IActionResult GetUserByEmail(string emailAddress)
        {
            var user = _userRepository.GetByEmail(emailAddress);
            if (user == null)
            {
                return NotFound("No user found.");
            }
            return Ok(user);
        }

        [HttpGet("withRole/email/{emailAddress}")]
        public IActionResult GetUserWithRoleByEmail(string emailAddress)
        {
            var user = _userRepository.GetUserWithRoleByUserEmail(emailAddress);
            return Ok(user);
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

        [HttpPost]
        public IActionResult addUser(User newUser)
        {
            if (string.IsNullOrEmpty(newUser.FirstName))
            {
                return BadRequest("First and Last Name Required");
            }
            _userRepository.Add(newUser);
            return Created($"/api/users/{newUser.Id}", newUser);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateUser(Guid id, User user)
        {
            var UserToGet = _userRepository.GetById(id);

            if (UserToGet == null)
            {
                return NotFound($"{id} was not found try a different id");
            }
            var userUpdate = _userRepository.Update(id, user);

            return Ok(userUpdate);
        }
        [HttpDelete("{id}")] 
        public IActionResult DeleteUser(Guid id)
        {
            _userRepository.Delete(id);

            return Ok();
        }


        [HttpGet("{id}/RoleTypeId")]
        public IActionResult GetRoleTypeById(Guid id)
        {
            var RoleTypeId = _userRepository.GetByRoleType(id);
            if (RoleTypeId != null)
            {
                return Ok(RoleTypeId);
            }
            return NotFound("This Id is not found");
        }

    }
}
