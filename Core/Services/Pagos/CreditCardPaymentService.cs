namespace s6_01.Core.Services.Pagos
{
    public class CreditCardPaymentService
    {
        public PaymentResponse GeneratePayment(CreditCardPayment pym)
        {
            //10% will fail
            var result = true;
            var randomNumber = new Random().Next(100);
            if (randomNumber >= 90)
                result = false;

            return new PaymentResponse()
            {
                Id = Guid.NewGuid().ToString(),
                BeneficiaryId = 123,
                BeneficiaryName = "TheWalkingPet.Corp",
                DateTimeApplied = DateTime.Now,
                Status = result,
                StatusMessage = result ? "Su pago fue exitoso" : "Su pago no pudo ser procesado",
                Value = pym.Value
            };
        }
    }

    public class CreditCardPayment
    {
        public decimal Value { get; set; }
        public string CreditCardNumber { get; set; }
        public DateTime ValidThru { get; set; }
        public int SecurityNumber { get; set; }
    }

    public class PaymentResponse
    {
        public string Id { get; set; }
        public DateTime DateTimeApplied { get; set; }
        public bool Status { get; set; }
        public string StatusMessage { get; set; }
        public decimal Value { get; set; }
        public string BeneficiaryName { get; set; }
        public int BeneficiaryId { get; set; }

        public override string ToString()
        {
            var status = Status ? "Success":"Fail";
            return $"Payment Id : {Id}, Date : {DateTimeApplied.ToString()}, Status :{status}, Beneficiary: {BeneficiaryName}";
        }
    }
}
