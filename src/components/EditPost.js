// src/components/EditPost.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditPost = ({ postId, onPostUpdated }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        setTitle(response.data.title);
        setBody(response.data.body);
      } catch (error) {
        console.error("Error fetching post data", error);
      }
    };
    fetchPost();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPost = { title, body };
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, updatedPost);
      onPostUpdated({ id: postId, ...updatedPost });  // Notify parent component
    } catch (error) {
      console.error("Error updating post", error);
    }
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
          required
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Post Body"
          required
        />
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
