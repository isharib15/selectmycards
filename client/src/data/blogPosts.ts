export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  content: string; // HTML string
}

export const blogPosts: BlogPost[] = [];
