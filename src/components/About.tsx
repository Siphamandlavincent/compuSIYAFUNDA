import { History, Target, Users, Award } from 'lucide-react';

export default function About() {
  const milestones = [
    {
      year: "2023",
      title: "Official Community Focus",
      description: "Expanded our focus to education and development structures within the Utrecht community."
    },
    {
      year: "2022",
      title: "Service Expansion",
      description: "Extended services to include comprehensive networking, maintenance, and IT problem-solving solutions."
    },
    {
      year: "2021",
      title: "Foundation",
      description: "Started as consultants providing computer network setup and software support for Utrecht schools."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From humble beginnings as consultants to becoming a comprehensive IT solutions provider for our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Growing With Our Community</h3>
            <p className="text-gray-600 mb-4">
              We began our journey providing specialized IT consultancy services to Utrecht schools, 
              focusing on network setup and essential software support like SA-SAMS and antivirus solutions.
            </p>
            <p className="text-gray-600 mb-4">
              As we worked closely with these institutions, we identified a growing need for comprehensive 
              IT services within our community. This revelation led us to expand our service offerings and 
              deepen our commitment to local development.
            </p>
            <p className="text-gray-600">
              In 2023, we officially transformed our focus to become a dedicated community-oriented IT 
              solutions provider, emphasizing education and development within our local structures.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: History,
                title: "Years of Experience",
                value: "3+"
              },
              {
                icon: Users,
                title: "Schools Served",
                value: "10+"
              },
              {
                icon: Target,
                title: "Projects Completed",
                value: "50+"
              },
              {
                icon: Award,
                title: "Community Programs",
                value: "5+"
              }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <stat.icon className="w-8 h-8 text-[#4b662a] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#4b662a]">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 w-0.5 h-full bg-[#4b662a] hidden md:block"></div>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 relative">
                <div className="md:w-32 pt-2">
                  <div className="font-bold text-[#4b662a] text-xl">{milestone.year}</div>
                </div>
                <div className="hidden md:block absolute left-0 top-3 w-3 h-3 bg-[#4b662a] rounded-full -translate-x-1"></div>
                <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-xl mb-2">{milestone.title}</h4>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}