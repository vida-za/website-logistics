using Domain.Entities;
using Infrastructure.Persistence;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController(AppDbContext db) : ControllerBase
{
    [HttpGet]
    public IEnumerable<User> GetUsers() => [.. db.Users];

    [HttpPost]
    public async Task<IActionResult> CreateUser([FromBody] string email)
    {
        var user = new User { Id = Guid.NewGuid(), Email = email };
        db.Users.Add(user);
        await db.SaveChangesAsync();
        return Ok(user);
    }
}