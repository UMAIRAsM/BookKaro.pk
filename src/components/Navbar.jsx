import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/logo.png';

const Navbar = ({ setIsSignup }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdown(!dropdown);
  const closeMenu = () => setMenuOpen(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setDropdown(false);
    closeMenu();
  };

  const baseLinkClasses2 = "font-bold text-black border-1 border-black rounded-2xl px-3 py-2 transition duration-200 hover:text-orange-500 hover:bg-white hover:rounded-2xl hover:shadow-lg hover:border-1 ";
  const baseLinkClasses1 = "font-bold text-black px-3 py-2 transition duration-200 hover:text-orange-500 hover:bg-white hover:rounded-2xl hover:shadow-lg hover:border-2 hover:border-none";
  const baseLinkClasses = " font-bold text-black px-3 py-2 transition duration-200 hover:text-orange-500 hover:bg-white hover:rounded-2xl hover:shadow-lg hover:border-2 hover:border-none";
  const activeLinkClasses = "border-2 border-none rounded-2xl shadow-lg bg-white";

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#FFA515] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">

        <Link to="/" className="flex items-center space-x-2">
          <div className="absolute top-0 left-0 bottom-0 bg-amber-50 rounded-br-[40px] p-1 flex items-center">
            <img src={logo} alt="BookKaroPK" className="h-10 w-auto" />
          </div>
        </Link>

        <button 
          onClick={toggleMenu} 
          className={`${baseLinkClasses2} ${activeLink === 'wishlist' ? activeLinkClasses : ''}`}
        >
          ☰
        </button>

        <ul className="hidden lg:flex items-center space-x-6 ml-auto">
          <li>
            <Link
              to="/"
              onClick={() => handleLinkClick('home')}
              className={`${baseLinkClasses} ${activeLink === 'home' ? activeLinkClasses : ''}`}
            >
              Home
            </Link>
          </li>

          <li className="relative" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
            <Link
              to="/events"
              onClick={() => handleLinkClick('events')}
              className={`${baseLinkClasses1} ${activeLink === 'events' ? activeLinkClasses : ''}`}
            >
              Events
            </Link>
            {dropdown && (
              <ul className="absolute top-10 left-0 bg-white shadow-md rounded-md py-2 px-4 w-48">
                <li>
                  <HashLink smooth to="/events#concerts" onClick={() => handleLinkClick('events')} className="text-black hover:text-orange-500 cursor-pointer">
                    🎤 Concerts
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/events#movies" onClick={() => handleLinkClick('events')} className="text-black hover:text-orange-500 cursor-pointer">
                    🎬 Movies
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/events#sports" onClick={() => handleLinkClick('events')} className="text-black hover:text-orange-500 cursor-pointer">
                    🏀 Sports
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/events#theatre" onClick={() => handleLinkClick('events')} className="text-black hover:text-orange-500 cursor-pointer">
                    🎭 Theatre
                  </HashLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link 
              to="/promos" 
              onClick={() => handleLinkClick('promos')}
              className={`${baseLinkClasses} ${activeLink === 'promos' ? activeLinkClasses : ''}`}
            >
              Promo Codes
            </Link>
          </li>

          <li>
            <Link 
              to="/wishlist" 
              onClick={() => handleLinkClick('wishlist')}
              className={`${baseLinkClasses} ${activeLink === 'wishlist' ? activeLinkClasses : ''}`}
            >
              Wishlist
            </Link>
          </li>
        </ul>

        <div className="hidden lg:block ml-4 flex items-center space-x-2">
          <input 
            type="text" 
            placeholder="Search" 
            className="px-4 py-2 rounded-full border border-orange-500 bg-white text-black focus:outline-none focus:ring focus:ring-orange-200 w-48"
          /> 
          <Link 
            to="/auth" 
            onClick={() => setIsSignup(false)}
            className="bg-[#CE1B19] hover:bg-[#CE1B19] text-white px-4 py-2 rounded-2xl font-semibold hover:text-[#FFA515]"
          >
            Login
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-3 mt-1">
          <div>
            <input 
              type="text" 
              placeholder="Search" 
              className="mt-2 w-full px-4 py-2 rounded-full border border-orange-500 bg-white text-black focus:outline-none focus:ring focus:ring-orange-200"
            />
          </div>

          <Link 
            to="/" 
            onClick={() => handleLinkClick('home')} 
            className={`${baseLinkClasses} ${activeLink === 'home' ? activeLinkClasses : ''} block`}
          >
            Home
          </Link>

          <div className="relative" onClick={toggleDropdown}>
            <Link 
              to="/events" 
              onClick={() => handleLinkClick('events')}
              className={`${baseLinkClasses1} ${activeLink === 'events' ? activeLinkClasses : ''} block`}
            >
              Events
            </Link>
            {dropdown && (
              <ul className="pl-3 space-y-1">
                <li>
                  <HashLink smooth to="/events#concerts" onClick={() => handleLinkClick('events')} className="text-black hover:text-orange-500 cursor-pointer">
                    🎤 Concerts
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/events#movies" onClick={() => handleLinkClick('events')} className="text-black hover:text-orange-500 cursor-pointer">
                    🎬 Movies
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/events#sports" onClick={() => handleLinkClick('events')} className="text-black hover:text-orange-500 cursor-pointer">
                    🏀 Sports
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/events#theatre" onClick={() => handleLinkClick('events')} className="text-black hover:text-orange-500 cursor-pointer">
                    🎭 Theatre
                  </HashLink>
                </li>
              </ul>
            )}
          </div>

          <Link 
            to="/promos" 
            onClick={() => handleLinkClick('promos')} 
            className={`${baseLinkClasses} ${activeLink === 'promos' ? activeLinkClasses : ''} block`}
          >
            Promo Codes
          </Link>

          <Link 
            to="/wishlist" 
            onClick={() => handleLinkClick('wishlist')} 
            className={`${baseLinkClasses} ${activeLink === 'wishlist' ? activeLinkClasses : ''} block`}
          >
            Wishlist
          </Link>

          <Link 
            to="/auth" 
            onClick={() => {
              setIsSignup(false);
              closeMenu();
            }}
            className="block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-2xl font-semibold w-fit"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
