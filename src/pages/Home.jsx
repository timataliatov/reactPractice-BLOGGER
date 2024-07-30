import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import BlogPostCard from '../components/BlogPost/BlogPostCard';
import { blogPosts } from '../data/blogPosts';

const Home = () => {
  const featuredPosts = blogPosts.slice(0, 6);

  return (
    <Layout>
      <section className="mb-16 text-center">
        <h1 className="text-6xl font-bold mb-4 text-gray-800 slide-up">
          Welcome to MODERNA
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto slide-up">
          Exploring the cutting edge of web development and design.
        </p>
      </section>
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
          Featured Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
      <section className="text-center">
        <Link
          to="/blog"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300 glow-effect"
        >
          View All Posts
        </Link>
      </section>
    </Layout>
  );
};

export default Home;
