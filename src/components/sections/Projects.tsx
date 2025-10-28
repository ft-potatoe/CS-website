'use client';

import { motion } from 'framer-motion';
import { HeartHandshake, Users, GraduationCap, Home } from 'lucide-react';

const projects = [
  {
    title: 'Feeding Hope',
    description:
      'A community kitchen initiative providing meals to underprivileged families every weekend.',
    icon: <HeartHandshake className="w-10 h-10 text-blue-600" />,
    status: 'Ongoing',
    image:
      'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Back to School Drive',
    description:
      'Distributed school supplies to over 500 children from low-income households.',
    icon: <GraduationCap className="w-10 h-10 text-purple-600" />,
    status: 'Completed',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Rebuild Together',
    description:
      'Helping families rebuild homes destroyed by floods through volunteer construction work.',
    icon: <Home className="w-10 h-10 text-green-600" />,
    status: 'Ongoing',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Community Outreach',
    description:
      'Empowering youth with leadership and life skills through local workshops.',
    icon: <Users className="w-10 h-10 text-orange-600" />,
    status: 'Completed',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-4"
        >
          Our Projects
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Discover our ongoing and past projects that bring hope, education, and
          empowerment to communities in need.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-left">
                <div className="mb-3">{project.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <span
                  className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                    project.status === 'Ongoing'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
