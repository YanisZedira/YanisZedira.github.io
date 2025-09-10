
import React, { useState } from 'react';
import Section from './Section';
import { BlogPostCard } from './BlogPostCard';
import { BLOG_DATA } from '../data/blog';
import type { BlogPost } from '../types';

const BlogModal: React.FC<{ post: BlogPost; onClose: () => void }> = ({ post, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 md:p-8">
            <div className="flex justify-between items-start">
                 <h2 className="text-3xl font-bold font-display text-sanofi-blue dark:text-sky-300 mb-2">{post.title}</h2>
                <button onClick={onClose} className="text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white">&times;</button>
            </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{post.date}</p>
          <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded-md mb-6" />
          <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed">
            {post.content}
          </div>
        </div>
      </div>
    </div>
  );
};


const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleCardClick = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <Section id="blog" className="bg-slate-50 dark:bg-sanofi-dark-blue/95">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-sanofi-dark-blue dark:text-white mb-4">
          Blog & Veille
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Mes réflexions et analyses sur les dernières tendances en Data, Intelligence Artificielle et leur application dans le domaine de la santé.
        </p>
      </div>
      <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {BLOG_DATA.map((post) => (
          <BlogPostCard key={post.id} post={post} onClick={() => handleCardClick(post)} />
        ))}
      </div>
      {selectedPost && <BlogModal post={selectedPost} onClose={handleCloseModal} />}
    </Section>
  );
};

export default Blog;
