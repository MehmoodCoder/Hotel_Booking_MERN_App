import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useClerk, UserButton } from "@clerk/react";
import logo from "../assets/logo.svg";
import { useAppContext } from "../context/AppContext.jsx";

const BookIcon = ({ className = "w-8 h-8" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      stroke="url(#book-grad)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="book-grad"
        x1="3"
        y1="5"
        x2="21"
        y2="19.253"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6366F1" />
        <stop offset="1" stopColor="#A855F7" />
      </linearGradient>
    </defs>
  </svg>
);

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/rooms" },
    { name: "Experience", path: "/" },
    { name: "About", path: "/" },
  ];

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { openSignIn } = useClerk();
  const location = useLocation();

  const { user, navigate, isOwner, setShowHotelReg } = useAppContext();

  const isHome = location.pathname === "/";

  React.useEffect(() => {
    if (!isHome) {
      setIsScrolled(false);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const getNavBackground = () => {
    if (isHome) {
      return isScrolled
        ? "bg-transparent backdrop-blur-md py-3 md:py-4"
        : "bg-transparent py-4 md:py-6";
    }
    return "bg-black shadow-md text-white py-3 md:py-4";
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${getNavBackground()}`}
    >
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="HotelHub Logo" className="h-9 w-auto" />
      </Link>

      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className={`group flex flex-col gap-0.5 ${
              isHome && isScrolled ? "text-gray-200" : "text-white"
            }`}
          >
            {link.name}
            <div className="bg-white h-0.5 w-0 group-hover:w-full transition-all duration-300" />
          </a>
        ))}
        {user && (
          <button
            onClick={() => {
              isOwner ? navigate("/owner") : setShowHotelReg(true);
            }}
            className="border border-white/30 px-4 py-1 text-sm font-light rounded-full cursor-pointer text-white hover:bg-white/10 transition-all"
          >
            {isOwner ? "Dashboard" : "List Your Hotel"}
          </button>
        )}
      </div>

      <div className="hidden md:flex items-center gap-4">
        <svg
          className="h-6 w-6 text-white transition-all duration-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<BookIcon />}
                onClick={() => {
                  navigate("/my-bookings");
                }}
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button
            onClick={openSignIn}
            className="px-8 py-2.5 rounded-full ml-4 transition-all duration-500 bg-white text-black hover:bg-gray-200"
          >
            Login
          </button>
        )}
      </div>

      <div className="flex items-center gap-3 md:hidden">
        {user && (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<BookIcon />}
                onClick={() => {
                  navigate("/my-bookings");
                }}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="h-6 w-6 cursor-pointer text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black text-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, i) => (
          <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </a>
        ))}

        {user && (
          <button
            onClick={() => {
              setIsMenuOpen(false);
              isOwner ? navigate("/owner") : setShowHotelReg(true);
            }}
            className="border border-white/30 px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all"
          >
            {isOwner ? "Dashboard" : "List Your Hotel"}
          </button>
        )}

        {!user && (
          <button
            onClick={() => {
              setIsMenuOpen(false);
              openSignIn();
            }}
            className="bg-white text-black px-8 py-2.5 rounded-full transition-all duration-500"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
