
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-bank-navy to-[#0a1629] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">SecureBank</h2>
            <p className="text-gray-300 mb-4">
              Your trusted partner in business banking since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-bank-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-bank-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-bank-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-bank-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/business/checking" className="text-gray-300 hover:text-bank-gold transition-colors">Business Checking</Link>
              </li>
              <li>
                <Link to="/business/credit" className="text-gray-300 hover:text-bank-gold transition-colors">Business Credit</Link>
              </li>
              <li>
                <Link to="/business/merchant" className="text-gray-300 hover:text-bank-gold transition-colors">Merchant Services</Link>
              </li>
              <li>
                <Link to="/business/treasury" className="text-gray-300 hover:text-bank-gold transition-colors">Treasury Management</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-bank-gold" />
                <span className="text-gray-300">1-800-SECURE-BANK</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-bank-gold" />
                <span className="text-gray-300">business@securebank.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-bank-gold" />
                <span className="text-gray-300">123 Financial District, NY</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-bank-gold" />
                <span className="text-gray-300">Mon-Fri: 9AM-5PM EST</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-300 hover:text-bank-gold transition-colors">Help Center</Link>
              </li>
              <li>
                <Link to="/security" className="text-gray-300 hover:text-bank-gold transition-colors">Security</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-bank-gold transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-bank-gold transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-700" />
        
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <Link to="/privacy" className="text-gray-300 hover:text-bank-gold text-sm transition-colors">Privacy</Link>
            <Link to="/terms" className="text-gray-300 hover:text-bank-gold text-sm transition-colors">Terms</Link>
            <Link to="/cookies" className="text-gray-300 hover:text-bank-gold text-sm transition-colors">Cookies</Link>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            © {new Date().getFullYear()} SecureBank. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
