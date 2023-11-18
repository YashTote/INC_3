using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;



namespace dotnetapp.Controllers
{
    
[ApiController]
[Route("/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpPost]
        [Route("RegisterUser/")]
        public IActionResult Register(User user){
             return Ok();
        }  
     public IActionResult Login(User user){
        return Ok();
      }
    }

}