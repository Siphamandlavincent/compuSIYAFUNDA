import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-scroll';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'services' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="hidden sm:block" style={{ backgroundColor: '#4b662a' }}>
        <div className="container mx-auto px-4 flex justify-end space-x-6 py-2 text-white">
          <a href="tel:+27123456789" className="flex items-center space-x-2 hover:text-green-200">
            <Phone size={16} />
            <span>+27 12 345 6789</span>
          </a>
          <a href="mailto:info@compusiyafunda.co.za" className="flex items-center space-x-2 hover:text-green-200">
            <Mail size={16} />
            <span>info@compusiyafunda.co.za</span>
          </a>
        </div>
      </div>
      
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <img 
              src="https://i.ibb.co/NNCBVX1/FINAL-LOGO-TRANS.png" 
              alt="COMPU SIYAFUNDA Logo" 
              className="h-16"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-gray-800 hover:text-[#4b662a] font-medium cursor-pointer transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="block py-2 text-gray-800 hover:text-[#4b662a] font-medium cursor-pointer transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}