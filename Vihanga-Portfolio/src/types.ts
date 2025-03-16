export interface Photo {
  id: number;
  url: string;
  category: string;
  title: string;
  description?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
}