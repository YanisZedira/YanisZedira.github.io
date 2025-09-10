
import React from 'react';
import type { BlogPost } from '../types';

interface BlogPostCardProps {
  post: BlogPost;
  onClick: () => void;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, onClick }) => {
  return (
    <div 
      className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
      onClick={onClick}
    >
      <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{post.date}</p>
        <h3 className="text-xl font-bold font-display text-sanofi-dark-blue dark:text-white mb-2 group-hover:text-sanofi-blue dark:group-hover:text-sky-300 transition-colors">{post.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm">{post.summary}</p>
      </div>
    </div>
  );
};
