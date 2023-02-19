using s6_01.Core.Business.Email.Interfaces;
using s6_01.Core.Services.Email.Interfaces;

namespace s6_01.Core.Business.Email
{
    public class EmailBusiness : Interfaces.IEmailBusiness
    {
        readonly IEmailService _service;
        readonly string templatesPath;
        string templatesPathProd = "wwwroot/templates/auth";
        string templatesPathDebug = "clientapp/public/templates/auth";
        public EmailBusiness(IEmailService service)
        {
            _service = service;
#if DEBUG
            templatesPath = templatesPathDebug;
#else
            templatesPath = templatesPathProd;
#endif
        }

        public void SendEmail(Message emailModel)
        {
            throw new NotImplementedException();
        }

        public async Task SendEmailAsync(Message emailModel)
        {
            await _service.SendEmailAsync(emailModel);
        }

        public Task SendNewsLetterAsync(int id, List<string> emails)
        {
            throw new NotImplementedException();
        }

        public async Task SendRecoverPasswordEmailAsync(string email, string userName, string link, string title = "Recover your password")
        {
            var recoverypasswordTemplate = System.IO.File.ReadAllText($"{templatesPath}/ChangePassword.html");
            var content = string.Format(recoverypasswordTemplate, new[] { userName, link });

            var recipients = new[] { email };
            var message = new Message(recipients, title, content);
            await _service.SendEmailAsync(message);
        }

        public  async Task SendWelcomeEmailAsync(string name, string email)
        {
            //TODO validations of emailadresss
            var welcomeTemplate = await System.IO.File.ReadAllTextAsync($"{templatesPath}/welcome/welcome.html");
            var userName = name;
            var content = string.Format(welcomeTemplate, userName);

            var recipients = new[] { email };
            var message = new Message(recipients, "Welcome to ", content);
            _service.SendEmailAsync(message);
        }
    }
}