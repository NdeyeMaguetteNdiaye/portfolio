import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pourriez intégrer un service d'envoi d'emails
    console.log('Form submitted:', formData);
    alert('Message envoyé avec succès ! Nous vous répondrons dans les 24h.');
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-orange-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt à transformer votre vision en réalité visuelle ? 
            Notre team est là pour vous accompagner dans votre projet
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-orange-900 mb-8">
              Discutons de votre projet
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-orange-900">Email</h4>
                  <p className="text-gray-600">contact@horizondigital.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-orange-900">Téléphone</h4>
                  <p className="text-gray-600">+221 77 675 02 31</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-orange-900">Localisation</h4>
                  <p className="text-gray-600">Dakar, Sénégal</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-orange-900">Horaires</h4>
                  <p className="text-gray-600">Lun-Ven: 8h-18h GMT</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="font-semibold text-orange-900 mb-4">Pourquoi nous choisir ?</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Expertise du marché africain et international</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Équipe créative multiculturelle</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Accompagnement de A à Z</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Révisions illimitées jusqu'à satisfaction</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Tarifs adaptés aux startups</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Livraison rapide (72h pour les urgences)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-orange-900 mb-2">
                Démarrons votre projet
              </h4>
              <p className="text-gray-600">
                Remplissez ce formulaire et nous vous répondrons dans les 24h
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-orange-900 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-orange-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-orange-900 mb-2">
                  Entreprise / Organisation
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-orange-900 mb-2">
                  Type de projet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300"
                >
                  <option value="">Choisissez un type de projet</option>
                  <option value="branding">Identité visuelle / Branding</option>
                  <option value="website">Site web / Application</option>
                  <option value="digital">Marketing digital</option>
                  <option value="print">Supports print</option>
                  <option value="consultation">Consultation stratégique</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-orange-900 mb-2">
                  Décrivez votre projet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300 resize-none"
                  placeholder="Décrivez votre projet, vos objectifs, votre budget indicatif et votre timeline..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Envoyer le message</span>
              </button>

              <p className="text-xs text-gray-500 text-center">
                En envoyant ce formulaire, vous acceptez d'être contacté par notre équipe concernant votre projet.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Urgence ? Parlons directement !
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Pour les projets urgents, contactez-nous directement par WhatsApp
          </p>
          <a 
            href="https://wa.me/221776750231" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            <Phone size={20} className="mr-2" />
            WhatsApp direct
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;