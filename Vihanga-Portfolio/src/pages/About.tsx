import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5"
              alt="Photographer at work"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
              <p className="text-gray-600">
                With over a decade of experience in photography, I've developed a keen eye for capturing the perfect moment. My journey began with a simple point-and-shoot camera, but my passion for photography quickly grew into a professional pursuit.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">My Approach</h2>
              <p className="text-gray-600">
                I believe in capturing authentic moments and genuine emotions. Whether it's a wedding, a portrait session, or a landscape shot, I strive to tell a story through my lens that will be cherished for generations to come.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
              <ul className="grid grid-cols-2 gap-4">
                <li className="bg-gray-50 p-4 rounded-lg">Portrait Photography</li>
                <li className="bg-gray-50 p-4 rounded-lg">Landscape Photography</li>
                <li className="bg-gray-50 p-4 rounded-lg">Event Coverage</li>
                <li className="bg-gray-50 p-4 rounded-lg">Photo Editing</li>
                <li className="bg-gray-50 p-4 rounded-lg">Studio Lighting</li>
                <li className="bg-gray-50 p-4 rounded-lg">Digital Composition</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;