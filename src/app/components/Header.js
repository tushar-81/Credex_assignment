'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import ClientOnly from './ClientOnly';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'How It Works', href: '/#how-it-works' },
  { name: 'Why Choose Us', href: '/#why-choose-us' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Check if page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 shadow-md backdrop-blur-sm dark:bg-gray-900/90' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.svg" 
            alt="SoftSell Logo" 
            width={150} 
            height={40} 
            className="h-10 w-auto"
          />
        </Link>      {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href ? 'text-primary' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <ClientOnly>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary-dark text-white py-2 px-6 rounded-full text-sm font-medium transition-colors"
            >
              Get Started
            </motion.button>
          </ClientOnly>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenuAlt3 className="h-6 w-6" />
          )}
        </button>      </nav>
      
      {/* Mobile Menu */}
      <ClientOnly>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white dark:bg-gray-900 shadow-lg py-4 px-6"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-base font-medium ${
                      pathname === link.href ? 'text-primary' : 'text-gray-600 dark:text-gray-300'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <ClientOnly>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary hover:bg-primary-dark text-white py-2 px-6 rounded-full font-medium transition-colors w-full mt-2"
                  >
                    Get Started
                  </motion.button>
                </ClientOnly>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </ClientOnly>
    </header>
  );
}
