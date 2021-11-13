using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LLL_Emporium.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public Guid RoleTypeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string DisplayName { get; set; }
        public string EmailAddress { get; set; }
        public string ProfilePicUrl { get; set; }
        public string Bio { get; set; }
    }

    public class UserWithRole
    {
        public Guid Id { get; set; }
        public Guid RoleTypeId { get; set; }
        public string RoleTypeName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string DisplayName { get; set; }
        public string EmailAddress { get; set; }
        public string ProfilePicUrl { get; set; }
        public string Bio { get; set; }
    }
}
