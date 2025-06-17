import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-amber-500">Portfolio</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Créateur visuel passionné, je transforme vos idées en créations 
              graphiques impactantes qui marquent les esprits.
            </p>
            
            {/* Social Links */}
            {/* <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-amber-500">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#accueil" className="hover:text-amber-500 transition-colors duration-300">Accueil</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors duration-300">À propos</a></li>
              <li><a href="#portfolio" className="hover:text-amber-500 transition-colors duration-300">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-amber-500">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><span className="hover:text-amber-500 transition-colors duration-300">Design Graphique</span></li>
              <li><span className="hover:text-amber-500 transition-colors duration-300">Création de Logos</span></li>
              <li><span className="hover:text-amber-500 transition-colors duration-300">Web Design</span></li>
              <li><span className="hover:text-amber-500 transition-colors duration-300">Identité Visuelle</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2024 Portfolio. Tous droits réservés.
          </p>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-amber-500 text-sm transition-colors duration-300">
              Mentions légales
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-500 text-sm transition-colors duration-300">
              Politique de confidentialité
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;