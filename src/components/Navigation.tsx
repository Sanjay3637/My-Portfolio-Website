import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Briefcase, FileText, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center">
              <span className="text-lg sm:text-2xl font-orbitron font-bold neon-text">
                SANJAY R
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 lg:space-x-8">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`nav-link px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                        activeSection === item.id
                          ? 'text-primary-500 active'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center space-x-1 lg:space-x-2">
                        <Icon size={14} className="lg:w-4 lg:h-4" />
                        <span className="hidden lg:inline">{item.label}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-300 rounded-md ${
                      activeSection === item.id
                        ? 'text-primary-500 bg-gray-800/50'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/30'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;