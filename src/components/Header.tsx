import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NewLogo from '@/assets/newlogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'MENU', href: '/menu' },
    { label: 'ORDER ONLINE', href: 'https://sfihasorder.com', external: true },
    { label: 'OUR LOCATIONS', href: '#locations' },
    { label: 'WORK WITH US', href: '#contact' }
  ];

  return (
    <>
      {/* Order Now Banner */}
      <div className="bg-accent text-accent-foreground text-center py-2 px-4">
        <a 
          href="https://sfihasorder.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-bold text-sm hover:underline"
        >
          ORDER NOW
        </a>
      </div>

      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="ml-3">
                <a href="/">
                  <img
                    src={NewLogo}
                    alt="Logo da Sfiha's USA"
                    sizes="164px" width="110" height="auto"
                    />
                </a>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'
            }`}
          >
            <nav className="flex flex-col space-y-3 pt-4 border-t border-border">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2 text-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;