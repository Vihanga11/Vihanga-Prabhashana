import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { photos } from '../data';

const Home: React.FC = () => {
  return (
    <div>
      <div className="relative h-screen">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="h-full"
        >
          {photos.map((photo) => (
            <SwiperSlide key={photo.id}>
              <div className="relative h-full">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
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
      </div>

      <section className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Welcome to My World</h2>
            <p className="text-gray-600 mb-4">
              Through my lens, I capture the extraordinary in the ordinary, telling stories that words alone cannot express. Every frame is a celebration of life's beautiful moments.
            </p>
            <p className="text-gray-600">
              Whether it's the raw emotion of a portrait, the grandeur of a landscape, or the intimate details of everyday life, I strive to create images that resonate and inspire.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
              alt="Featured work 1"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1682687221038-404670f09514"
              alt="Featured work 2"
              className="w-full h-64 object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;