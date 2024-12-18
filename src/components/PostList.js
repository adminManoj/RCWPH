// src/components/PostList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import EditPostModal from './EditPostModal'; // Import the modal

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null); // For storing the post to edit
  const [showModal, setShowModal] = useState(false); // To control modal visibility

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        setPosts(posts.filter(post => post.id !== id));
      })
      .catch(error => console.log(error));
  };

  const handleEdit = (post) => {
    setSelectedPost(post); // Set the post to be edited
    setShowModal(true); // Show the modal
  };

  const handleSaveEdit = (updatedPost) => {
    axios.put(`https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`, updatedPost)
      .then(response => {
        setPosts(posts.map(post => (post.id === updatedPost.id ? updatedPost : post)));
        setShowModal(false); // Close modal after saving
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="container mt-5">
      <h2>Post List</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td style={{display:"flex"}}>
                <Button variant="info" className="me-2" onClick={() => handleEdit(post)}>Edit </Button>
                <Button variant="danger" onClick={() => handleDelete(post.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Modal */}
      {selectedPost && (
        <EditPostModal
          show={showModal}
          onHide={() => setShowModal(false)} 
          post={selectedPost}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
};

export default PostList;
