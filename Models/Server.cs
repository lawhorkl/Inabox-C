namespace Inabox.Models
{
    public class Server
    {
        public long Id { get; set; }
        public string Name { get; set;}
        public string Hostname { get; set; }
        public int Port { get; set; }
        public bool Active { get; set; }
    }
}