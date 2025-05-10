'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          <div className="space-y-4">
            <Image 
              src="/logo.svg" 
              alt="SoftSell Logo" 
              width={150} 
              height={40} 
              className="h-10 w-auto invert opacity-80 hover:opacity-100 transition-opacity"
            />
            <p className="text-sm">
              SoftSell is the leading marketplace for buying and selling unused software licenses, helping businesses maximize their IT investments.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-white transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#why-choose-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Supported Software</h3>
            <ul className="space-y-2">
              <li>Microsoft Office</li>
              <li>Adobe Creative Cloud</li>
              <li>Oracle Database</li>
              <li>SAP Enterprise</li>
              <li>VMware vSphere</li>
              <li>Salesforce CRM</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>123 Tech Park Avenue, Suite 500</li>
              <li>San Francisco, CA 94105</li>
              <li>info@softsell.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">© 2025 SoftSell. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0 text-sm">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
