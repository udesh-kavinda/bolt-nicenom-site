"use client"

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-primary shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-background">
            TechInnovate
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-background hover:text-primary-bright">Home</Link>
            <Link href="/products" className="text-background hover:text-primary-bright">Products</Link>
            <Link href="/custom-software" className="text-background hover:text-primary-bright">Custom Software</Link>
            <Link href="/about" className="text-background hover:text-primary-bright">About Us</Link>
            <Link href="/blog" className="text-background hover:text-primary-bright">Blog</Link>
            <Link href="/contact" className="text-background hover:text-primary-bright">Contact</Link>
          </div>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-6 text-background hover:text-primary-bright"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>
            <Button className="hidden md:block bg-primary-bright text-background hover:bg-primary-medium">Get a Quote</Button>
            <button className="md:hidden text-background" onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <Link href="/" className="block py-2 text-background hover:text-primary-bright">Home</Link>
            <Link href="/products" className="block py-2 text-background hover:text-primary-bright">Products</Link>
            <Link href="/custom-software" className="block py-2 text-background hover:text-primary-bright">Custom Software</Link>
            <Link href="/about" className="block py-2 text-background hover:text-primary-bright">About Us</Link>
            <Link href="/blog" className="block py-2 text-background hover:text-primary-bright">Blog</Link>
            <Link href="/contact" className="block py-2 text-background hover:text-primary-bright">Contact</Link>
            <Button className="mt-4 w-full bg-primary-bright text-background hover:bg-primary-medium">Get a Quote</Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;