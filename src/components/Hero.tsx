import { ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://i.ibb.co/y4BVfXD/10701730-19187761.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div 
          className="absolute inset-0" 
          style={{ 
            background: `linear-gradient(to right, ${hexToRGBA('#4b662a', 0.92)}, ${hexToRGBA('#4b662a', 0.85)})` 
          }} 
        />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Expert IT Solutions for Your Digital Success
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Professional computer maintenance, upgrades, and mobile phone repairs to keep your technology running smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              style={{ backgroundColor: '#4b662a' }}
              className="hover:bg-[#5c7c34] text-white px-8 py-3 rounded-full font-medium inline-flex items-center justify-center transition-colors cursor-pointer"
            >
              Our Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="bg-white hover:bg-gray-100 text-[#4b662a] px-8 py-3 rounded-full font-medium inline-flex items-center justify-center transition-colors cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper function to convert hex to rgba
function hexToRGBA(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}