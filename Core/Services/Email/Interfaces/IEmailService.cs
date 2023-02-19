
using MimeKit;

namespace s6_01.Core.Services.Email.Interfaces
{
    public interface IEmailService
    {
        void SendEmail(Message message);
        Task SendEmailAsync(Message message);
    }
}
