namespace API.Dtos
{
    public class OrderItemDto
    {
        public int PhotoId { get; set; }
        public string ProductName { get; set; }
        public string Url { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
    }
}