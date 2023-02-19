namespace s6_01.Core.Business.Email.Interfaces
{
    public interface IEmailBusiness
    {
        Task SendEmailAsync(Message emailModel);
        void SendEmail(Message emailModel);
        Task SendWelcomeEmailAsync(string name, string email);
        Task SendRecoverPasswordEmailAsync(string email, string userName, string link, string title = "Recover your password");

        //Task SendNewsLetterAsync(int id, List<String> emails);
     
    }
}
