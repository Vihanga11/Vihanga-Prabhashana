import { Photo, Testimonial, BlogPost } from './types';

export const photos: Photo[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
    category: "Landscapes",
    title: "Mountain Majesty"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1682687221038-404670f09514",
    category: "Portraits",
    title: "Urban Portrait"
  },
  // Add more sample photos as needed
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Wedding Client",
    content: "Vihanga captured our special day perfectly. The attention to detail and creativity in each shot was remarkable.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  // Add more testimonials
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Landscape Photography",
    excerpt: "Learn the essential techniques for capturing stunning landscape photos.",
    content: "Full blog post content here...",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1682687221038-404670f09514",
    category: "Tips & Tricks"
  },
  // Add more blog posts
];