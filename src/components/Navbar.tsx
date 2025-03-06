
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X,
  ChevronDown
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we're on the landing page
  const isLandingPage = location.pathname === "/";

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Define navigation items
  const navItems = [
    { name: "Features", path: "/#features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Testimonials", path: "/#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !isLandingPage
          ? "bg-white/80 dark:bg-brand-dark/90 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
          onClick={closeMobileMenu}
        >
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-blue to-brand-purple flex items-center justify-center">
            <span className="text-white font-bold text-xl">V</span>
          </div>
          <span className="font-heading font-bold text-xl tracking-tight">
            ViralMuse
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800/60 ${
                location.pathname === item.path
                  ? "text-brand-blue dark:text-brand-blue"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="font-medium">
              Log in
            </Button>
          </Link>
          <Link to="/register">
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-blue/90 hover:to-brand-purple/90 text-white font-medium transition-all duration-300 hover:shadow-lg"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-white dark:bg-brand-dark transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
            <Link 
              to="/" 
              className="flex items-center space-x-2"
              onClick={closeMobileMenu}
            >
              <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-blue to-brand-purple flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                ViralMuse
              </span>
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="flex items-center"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <nav className="flex flex-col p-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="px-4 py-3 rounded-md text-base font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800/60"
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="p-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
            <Link to="/login" onClick={closeMobileMenu}>
              <Button variant="outline" className="w-full font-medium">
                Log in
              </Button>
            </Link>
            <Link to="/register" onClick={closeMobileMenu}>
              <Button 
                className="w-full bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-blue/90 hover:to-brand-purple/90 text-white font-medium"
              >
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
