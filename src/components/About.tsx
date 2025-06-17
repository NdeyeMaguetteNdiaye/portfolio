import React from 'react';
import { Award, Users, Clock, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: '50+', label: 'Projets réalisés' },
    { icon: Users, value: '30+', label: 'Clients satisfaits' },
    { icon: Clock, value: '3+', label: 'Années d\'expérience' },
    { icon: Star, value: '95%', label: 'Taux de satisfaction' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Équipe créative africaine au travail"
                className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            {/* <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-800">3+</div>
                <div className="text-gray-600 text-sm">Années d'expérience</div>
              </div>
            </div> */}
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-4xl font-bold text-orange-900 mb-6">
              À propos de notre team
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Basée à Dakar, notre team révolutionne le design graphique 
              en combinant créativité locale et standards internationaux. Notre équipe 
              passionnée met son expertise au service des entreprises africaines et 
              internationales souhaitant créer un impact visuel fort.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Nous sommes spécialisés dans la création d'identités visuelles qui 
              reflètent l'authenticité africaine tout en répondant aux exigences 
              du marché global. De la conception de logos aux campagnes digitales, 
              nous accompagnons nos clients dans leur transformation visuelle.
            </p>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">Nos expertises</h3>
              <div className="flex flex-wrap gap-3">
                {['Design Graphique', 'Identité Visuelle', 'Branding Africain', 'Marketing Digital', 'Web Design', 'Print Design'].map((skill) => (
                  <span key={skill} className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-amber-500">
              <h4 className="font-semibold text-orange-900 mb-2">Notre Mission</h4>
              <p className="text-gray-700">
                Valoriser l'excellence créative africaine sur la scène internationale 
                tout en accompagnant les entreprises locales dans leur croissance visuelle.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white p-6 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-amber-600" />
                </div>
                <div className="text-3xl font-bold text-amber-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default About;