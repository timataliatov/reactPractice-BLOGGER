import React from 'react';
import Layout from '../components/Layout/Layout';
import BlogPostCard from '../components/BlogPost/BlogPostCard';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  return (
    <Layout>
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-800 slide-up">
          Our Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto slide-up">
          Discover the latest insights in web development and design.
        </p>
      </section>
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
