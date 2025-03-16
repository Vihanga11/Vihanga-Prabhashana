import { Photo, BlogPost } from './types';

export const photos: Photo[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
    category: "Landscapes",
    title: "Mountain Majesty"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9",
    category: "Food",
    title: "Gourmet Delights"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    category: "Landscapes",
    title: "Foggy Forest"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5",
    category: "Urban",
    title: "City Lights"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d",
    category: "Portraits",
    title: "Summer Vibes"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    category: "Nature",
    title: "Mountain Lake"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce",
    category: "Food",
    title: "Morning Coffee"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    category: "Nature",
    title: "Sunlit Forest"
  }
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