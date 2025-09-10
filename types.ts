
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  summary: string;
  content: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  date: string;
  description: string[];
}
