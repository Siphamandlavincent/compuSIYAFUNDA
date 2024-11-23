import { Laptop, School, Users, Wrench, Smartphone, Code, BookOpen, Cpu } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: School,
      title: "Educational Programs",
      description: "Bridging the digital divide through specialized computer education programs for schools in Utrecht and surrounding communities."
    },
    {
      icon: Laptop,
      title: "Computer Maintenance",
      description: "Professional computer repair and maintenance services to keep your systems running at peak performance."
    },
    {
      icon: Smartphone,
      title: "Mobile Phone Repairs",
      description: "Expert repair services for all types of mobile devices, ensuring quick turnaround times."
    },
    {
      icon: BookOpen,
      title: "Weekend Training",
      description: "Saturday training sessions for community members interested in developing their digital skills."
    },
    {
      icon: Cpu,
      title: "Hardware Upgrades",
      description: "System upgrades and hardware improvements to enhance your computer's performance."
    },
    {
      icon: Code,
      title: "4IR Education",
      description: "Specialized training focused on 4th Industrial Revolution technologies and their applications."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building educational bridges within our communities to embrace the digital world through expert IT solutions and training programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-[#4b662a]/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-[#4b662a]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#4b662a] rounded-2xl p-8 text-white">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Community Education Initiative</h3>
              <p className="mb-4">
                Our program is specially designed for schools around Utrecht and surrounding communities, 
                extending to interested community members on Saturdays. We're committed to building an 
                educational bridge into the digital world, particularly focusing on underserved communities.
              </p>
              <p>
                Led by Spha IT Solutions and a team of computer & media professionals, we're driven by 
                our understanding of the crucial role of digital literacy in the 4th Industrial Revolution.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                alt="Community Education" 
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}