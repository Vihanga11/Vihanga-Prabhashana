import React from 'react';
import { motion } from 'framer-motion';
import SplineScene from '../components/SplineScene';
import About from './About';
import Gallery from './Gallery';
import Blog from './Blog';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="relative h-screen">
        <SplineScene />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm Vihanga
            </h1>
            <p className="text-xl md:text-2xl">
              A passionate photographer capturing stunning moments
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* Blog Section */}
      <section id="blog">
        <Blog />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;