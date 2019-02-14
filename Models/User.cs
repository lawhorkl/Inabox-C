using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Inabox.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public List<Server> Servers { get; set;}
    }
}