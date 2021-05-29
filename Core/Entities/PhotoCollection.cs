namespace Core.Entities
{
    public class PhotoCollection: BaseEntity
    {
        public int PhotoId { get; set; }
        public Photo Photo { get; set; }
        public int CollectionId { get; set; }
        public Collection Collection { get; set; }
    }
}