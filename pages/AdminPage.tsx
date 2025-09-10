
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Project, BlogPost } from '../types';

const AdminPage: React.FC = () => {
  const [project, setProject] = useState({
    id: Date.now(),
    title: '',
    description: '',
    technologies: '',
    imageUrl: '',
    projectUrl: '',
  });

  const [blog, setBlog] = useState({
    id: Date.now(),
    title: '',
    date: new Date().toISOString().split('T')[0],
    imageUrl: '',
    summary: '',
    content: '',
  });
  
  const [generatedProjectJson, setGeneratedProjectJson] = useState('');
  const [generatedBlogJson, setGeneratedBlogJson] = useState('');

  const handleProjectChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProject(prev => ({ ...prev, [name]: value }));
  };

  const handleBlogChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBlog(prev => ({ ...prev, [name]: value }));
  };

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject: Project = {
      ...project,
      technologies: project.technologies.split(',').map(t => t.trim()),
    };
    setGeneratedProjectJson(JSON.stringify(newProject, null, 2));
  };
  
  const handleBlogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBlogPost: BlogPost = {
        ...blog,
        date: new Date(blog.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric'}),
    };
    setGeneratedBlogJson(JSON.stringify(newBlogPost, null, 2));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="text-blue-600 hover:underline">&larr; Back to Portfolio</Link>
          <h1 className="text-4xl font-bold text-gray-800 mt-2">Admin Panel</h1>
          <p className="text-gray-600 mt-2">
            Use these forms to generate JSON for new projects or blog posts. Copy the generated output and paste it into the corresponding data file (`data/projects.ts` or `data/blog.ts`).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add New Project</h2>
            <form onSubmit={handleProjectSubmit} className="space-y-4">
              <input type="text" name="title" placeholder="Title" value={project.title} onChange={handleProjectChange} className="w-full p-2 border rounded" required />
              <textarea name="description" placeholder="Description" value={project.description} onChange={handleProjectChange} className="w-full p-2 border rounded" required />
              <input type="text" name="technologies" placeholder="Technologies (comma separated)" value={project.technologies} onChange={handleProjectChange} className="w-full p-2 border rounded" required />
              <input type="url" name="imageUrl" placeholder="Image URL" value={project.imageUrl} onChange={handleProjectChange} className="w-full p-2 border rounded" required />
              <input type="url" name="projectUrl" placeholder="Project URL" value={project.projectUrl} onChange={handleProjectChange} className="w-full p-2 border rounded" required />
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Generate Project JSON</button>
            </form>
            {generatedProjectJson && (
              <div className="mt-4">
                <h3 className="font-semibold">Copy this into `data/projects.ts`:</h3>
                <pre className="bg-gray-200 p-4 rounded-md text-sm overflow-x-auto"><code>{generatedProjectJson}</code></pre>
              </div>
            )}
          </div>

          {/* Blog Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add New Blog Post</h2>
            <form onSubmit={handleBlogSubmit} className="space-y-4">
               <input type="text" name="title" placeholder="Title" value={blog.title} onChange={handleBlogChange} className="w-full p-2 border rounded" required />
               <input type="date" name="date" value={blog.date} onChange={handleBlogChange} className="w-full p-2 border rounded" required />
               <input type="url" name="imageUrl" placeholder="Image URL" value={blog.imageUrl} onChange={handleBlogChange} className="w-full p-2 border rounded" required />
               <textarea name="summary" placeholder="Summary" value={blog.summary} onChange={handleBlogChange} className="w-full p-2 border rounded" rows={2} required />
               <textarea name="content" placeholder="Full Content" value={blog.content} onChange={handleBlogChange} className="w-full p-2 border rounded" rows={5} required />
              <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">Generate Blog JSON</button>
            </form>
            {generatedBlogJson && (
                <div className="mt-4">
                    <h3 className="font-semibold">Copy this into `data/blog.ts`:</h3>
                    <pre className="bg-gray-200 p-4 rounded-md text-sm overflow-x-auto"><code>{generatedBlogJson}</code></pre>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
