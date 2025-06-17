import React, { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'affiche', label: 'Affiche' },
    { id: 'logo', label: 'Logo' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Logo Club Informatique de Guèdiawaye',
      category: 'logo',
      image: '/a.jpg',
      description: ''
    },
    {
      id: 2,
      title: 'Affiche Club CEDEAO',
      category: 'affiche',
      image: 'CAPP.JPG',
      description: ''
    },
    {
      id: 3,
      title: 'Affiche Université US3T',
      category: 'affiche',
      image: 'c.jpeg',
      description: ''
    },
    {
      id: 4,
      title: 'Affiche Betty Concept BTP',
      category: 'affiche',
      image: 'b.jpeg',
      description: ''
    },
    {
      id: 5,
      title: 'Logo Restaurant Soleil des Délices',
      category: 'logo',
      image: 'd.jpg',
      description: ''
    },
    {
      id: 6,
      title: 'Logo HEF',
      category: 'logo',
      image: '/g.jpeg',
      description: ''
    },
    {
      id: 7,
      title: 'Logo Darou Xoudoss Couture',
      category: 'logo',
      image: '/i.jpeg',
      description: ''
    },
    {
      id: 8,
      title: 'Logo Warwi Gestion',
      category: 'logo',
      image: 'l.jpeg',
      description: ''
    },
     {
      id: 9,
      title: '',
      category: 'affiche',
      image: 'k.jpeg',
      description: ''
    },
     {
      id: 10,
      title: '',
      category: 'affiche',
      image: 'w.jpeg',
      description: ''
    },
     {
      id: 11,
      title: '',
      category: 'affiche',
      image: 'y.jpeg',
      description: ''
    },
    {
      id: 12,
      title: '',
      category: 'affiche',
      image: 'x.jpeg',
      description: ''
    },
    {
      id: 13,
      title: '',
      category: 'affiche',
      image: 'anim.mp4',
      description: ''
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-orange-900 mb-4">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nous aidons les entreprises africaines à rayonner 
            grâce à des créations visuelles authentiques et impactantes
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-orange-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-800'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className=" group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                {project.image.endsWith('.mp4') ? (
                  <video
                    src={project.image}
                    controls
                    className="w-full h-64 object-cover"
                    poster="/poster.jpg" // optionnel : image d'aperçu
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <a
                        href={project.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                        title="Voir l'image"
                      >
                        <Eye size={18} />
                      </a>
                      <button className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300">
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-orange-900 mb-2 line-clamp-2">
                  {project.title}
                </h3>
                 {/* 
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
                */}
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        {/* <div className="mt-20 bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">
              Impact de nos créations
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Nos designs ont contribué à la croissance de nombreuses entreprises africaines
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">+200%</div>
              <p className="text-gray-700">Augmentation moyenne de la visibilité</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <p className="text-gray-700">Startups accompagnées</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">15</div>
              <p className="text-gray-700">Pays d'intervention</p>
            </div>
          </div>
        </div> */}

        {/* CTA */}
        {/* <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Discutons de votre projet
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;