import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  MapPin 
} from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation(); // <-- Added to check current path

  const goToContact = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById('contact-section');
      if (el) {
        const offset = 80;
        const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      navigate('/#contact-section'); // Navigate to home with hash
    }
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'Our Team', href: '/team' },
      { label: 'Contact', href: '#contact-section', onClick: goToContact }, // Special handler
      { label: 'Creative', href: '/services/Creative' },
    ],
    services: [
      { label: 'Branding', href: '/services/branding' },
      { label: 'Social', href: '/services/Social' },
      { label: 'Performance', href: '/services/Performance' },
      { label: 'PR & Media', href: '/services/pr' },
      { label: 'Digital Strategy', href: '/services/digital' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Terms of Service', href: '/legal/terms' },
    ],
    social: [
      { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
      { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
      { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
      { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 lg:px-8 py-16"> {/* Fixed px-35 → px-8 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-4">Starvix</h2>
            <p className="text-sm text-gray-400 mb-6 max-w-xs">
              Crafting bold stories and unforgettable digital experiences for brands that matter.
            </p>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>hello@starvix.com</span> {/* Fixed typo: stravix → starvix */}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.onClick ? (
                    <button
                      onClick={link.onClick}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200 text-left w-full"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200 block"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex gap-3">
              {footerLinks.social.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    to={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar - Centered */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Starvix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;