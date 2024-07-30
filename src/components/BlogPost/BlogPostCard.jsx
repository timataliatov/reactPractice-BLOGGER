import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlogPostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105 glow-effect fade-in">
      <img
        src={post.photoUrl}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <span className="text-sm font-semibold text-blue-500 mb-2 inline-block">
          {post.category}
        </span>
        <h2 className="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-300">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{post.date}</span>
          <Link
            to={`/blog/${post.id}`}
            className="text-blue-600 hover:underline transition-colors duration-300"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

BlogPostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogPostCard;
