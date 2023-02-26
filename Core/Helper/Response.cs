namespace s6_01.Core.Helper
{
    public class Response<T>
    {
        public T Data { get; set; }
        public string Message { get; set; }
        public bool IsSuccess { get; set; }
        public int ResponseCode { get; set; }
    }
}
