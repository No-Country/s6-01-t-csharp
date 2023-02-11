﻿using System.ComponentModel.DataAnnotations;

public class LoginModel
{
    [Required]
    public string Email { get; set; } = "user@mailinator.com";

    [Required]
    public string Password { get; set; } = "User123!";
}