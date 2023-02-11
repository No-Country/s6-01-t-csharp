using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
using s6_01.DataAccess;
using s6_01.Entities.Auth;
using Microsoft.AspNetCore.Authorization;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly UserManager<ApplicationUser> userManager;
    private readonly RoleManager<IdentityRole> roleManager;
    private readonly IConfiguration _configuration;
    private readonly DbContextOptions<TWDContext> options;
    //  private readonly IEmailBusiness emailBusiness;

    public AuthController(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration, DbContextOptions<TWDContext> options/*, IEmailBusiness email*/)
    {
        this.userManager = userManager;
        this.roleManager = roleManager;
        _configuration = configuration;
        this.options = options;
        //   this.emailBusiness = email;
    }


    [HttpPost]
    [Route("Login")]
    public async Task<IActionResult> Login([FromBody] LoginModel model)
    {
        var user = await userManager.FindByEmailAsync(model.Email);
        if (user != null && await userManager.CheckPasswordAsync(user, model.Password))
        {
            var userRoles = await userManager.GetRolesAsync(user);

            var authClaims = new List<Claim>
                {
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                };

            authClaims.Add(new Claim(ClaimTypes.Name, user.UserName));
            authClaims.Add(new Claim(ClaimTypes.Email, user.Email));

            foreach (var userRole in userRoles)
            {
                authClaims.Add(new Claim(ClaimTypes.Role, userRole));
            }

            var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Key"]));
            var token = new JwtSecurityToken(
                claims: authClaims,
                expires: DateTime.UtcNow.AddDays(1),
                signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                );

            return Ok(new
            {
                Successful = true,
                Token = new JwtSecurityTokenHandler().WriteToken(token),
                Expiration = token.ValidTo,
                Error = ""
            });
        }
        return BadRequest(new { Successful = false, Error = "Username or password are invalid.", Expiration = DateTime.Now.AddMinutes(-4), Token = "" });
    }

    [HttpPost]
    [Route("Register")]
    public async Task<IActionResult> Register([FromBody] RegisterModel model)
    {

        var userExists = await userManager.FindByNameAsync(model.Username);
        if (userExists != null)
            return StatusCode(StatusCodes.Status400BadRequest, new { Status = "Error", Message = "User already exists!" });

        var emailExists = await userManager.FindByEmailAsync(model.Email);
        if (emailExists != null)
            return StatusCode(StatusCodes.Status400BadRequest, new { Status = "Error", Message = "Email is already associated with an account!" });

        var user = new ApplicationUser()
        {
            UserName = model.Username,
            Email = model.Email,
        };

        var result = await userManager.CreateAsync(user, model.Password);

        if (!result.Succeeded)
            return StatusCode(StatusCodes.Status500InternalServerError, new { Status = "Error", Message = $"User creation failed! Please check user details and try again. {String.Join(" | ", result.Errors.Select(x => x.Description))}" });

        //  Task welcomeTask = emailBusiness.SendWelcomeEmailAsync(model.Username, model.Email);

        var resultRoleAssign = await userManager.AddToRoleAsync(user, UserRoles.User);
        var roleMessage = "";

        //TODO not awaiting can lead mail not get delivered
        //  await welcomeTask.WaitAsync(TimeSpan.FromSeconds(2));

        if (resultRoleAssign.Succeeded) roleMessage = " as User Role";
        return Ok(new { Status = "Success", Message = $"User created {roleMessage} successfully!" });
    }

    [HttpPost("ForgotPassword")]
    public async Task<IActionResult> ForgotPassword([EmailAddress][Required] string email)
    {
        var user = await userManager.FindByEmailAsync(email);
        if (user == null)
            //return Ok(); //dont let know user if email exists
            return BadRequest();

        var token = await userManager.GeneratePasswordResetTokenAsync(user);
        try
        {
            var link = @$"https://tiketfan.vercel.app/resetpassword?t={token}&email={user.Email}";
            //  await emailBusiness.SendRecoverPasswordEmailAsync(user.Email, user.UserName, link);
            //TODO remove this only for debug
            var model = new { Token = token, Email = user.Email };
            return Ok(model);
        }
        catch (Exception e)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
        }
    }

    [HttpPost("ResetPassword")]
    public async Task<IActionResult> ResetPassword(ResetPasswordModel model)
    {
        //if all ok
        var user = await userManager.FindByEmailAsync(model.Email);
        var result = await userManager.ResetPasswordAsync(user, model.Token, model.Password);
        if (result.Succeeded)
        {
            return Ok();
        }
        else
        {
            return BadRequest(String.Join(" | ", result.Errors));
        }
    }

    [Authorize]
    [HttpGet]
    [Route("authorize")]
    public IActionResult Authorized()
    {
        return Ok("ok");
    }

    public class ResetPasswordModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        [Compare("Password")]
        public string ConfirmPassword { get; set; }
        [Required]
        public string Token { get; set; }

    }
}

