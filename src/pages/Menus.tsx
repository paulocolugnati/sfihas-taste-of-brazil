import { useState } from 'react';
import NewLogo from '@/assets/newlogo.png';
import BrazilFlag from '@/assets/brazil-flag.png';
import UsaFlag from '@/assets/usa-flag.png';
import EnglishMenu from '@/assets/englishmenu.png';
import EnglishMenu2 from '@/assets/englishmenu2.png';
import PortugueseMenu from '@/assets/portuguesemenu.png';
import PortugueseMenu2 from '@/assets/portuguesemenu2.png';

const Header = () => {
  const [showMenu, setShowMenu] = useState<'none' | 'en' | 'pt'>('none');

  const showEnglishMenu = () => setShowMenu('en');
  const showPortugueseMenu = () => setShowMenu('pt');
  const hideMenu = () => setShowMenu('none');

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
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="ml-3">
                <a href="/">
                  <img
                    src={NewLogo}
                    alt="Logo da Sfiha's USA"
                    width="110"
                    height="auto"
                    className="h-auto w-28"
                  />
                </a>
              </div>
            </div>

            <nav className="flex items-center space-x-8">
              <a href="/" className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm">HOME</a>
              <a href="https://sfihasorder.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm">ORDER ONLINE</a>
              <a href="/" className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm">OUR LOCATIONS</a>
              <a href="/" className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm">WORK WITH US</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Menu Selection and Display */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center mt-6">
          {showMenu === 'none' ? (
            <>
              <h2 className="text-6xl font-bold mb-6">Select Your Menu</h2>
              <div className="flex justify-center gap-6 mb-6 flex-wrap">
                <button onClick={showEnglishMenu} className="flex flex-col items-center m-2">
                  <img src={UsaFlag} alt="English Menu" className="w-36 h-36 mb-2 rounded-full" />
                  <span className="text-lg font-bold">English</span>
                </button>
                <button onClick={showPortugueseMenu} className="flex flex-col items-center m-2">
                  <img src={BrazilFlag} alt="Portuguese Menu" className="w-36 h-36 mb-2 rounded-full" />
                  <span className="text-lg font-bold">Português</span>
                </button>
              </div>
              <div className="mt-12">
                <a href='/' className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-all duration-300 w-64">
                  Back to Home
                </a>
              </div>
            </>
          ) : showMenu === 'en' ? (
            <>
              <h2 className="text-3xl font-bold mb-6">English Menu</h2>
              <div className="space-y-6 max-w-4xl mx-auto">
                <img src={EnglishMenu} alt="English Menu Part 1" className="w-full h-auto rounded-lg shadow-lg" />
                <img src={EnglishMenu2} alt="English Menu Part 2" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
              <div className="mt-6 space-x-4">
                <button onClick={hideMenu} className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-all duration-300">
                  Back to Menu
                </button>
                <button onClick={showPortugueseMenu} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all duration-300">
                  View Portuguese Menu
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-6">Cardápio Português</h2>
              <div className="space-y-6 max-w-4xl mx-auto">
                <img src={PortugueseMenu} alt="Portuguese Menu Part 1" className="w-full h-auto rounded-lg shadow-lg" />
                <img src={PortugueseMenu2} alt="Portuguese Menu Part 2" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
              <div className="mt-6 space-x-4">
                <button onClick={hideMenu} className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-all duration-300">
                  Back to Menu
                </button>
                <button onClick={showEnglishMenu} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all duration-300">
                  View English Menu
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Header;