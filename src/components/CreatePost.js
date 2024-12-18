// src/components/CreatePost.js
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

const CreatePost = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      body,
      userId: 1,
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
      .then(response => {
        onPostCreated(response.data); // Inform the parent component
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="container mt-5">
      <h2>Create Post</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBody">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter post body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Post
        </Button>
      </Form>
    </div>
  );
};

export default CreatePost;
