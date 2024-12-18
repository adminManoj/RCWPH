// src/components/PostItem.js
import React from 'react';
import axios from 'axios';

const PostItem = ({ post, onPostDeleted }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`);
      onPostDeleted(post.id); // Notify parent component to remove the post
    } catch (error) {
      console.error("Error deleting post", error);
    }
  };

  return (
    <li>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default PostItem;
