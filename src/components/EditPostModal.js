// src/components/EditPostModal.js
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditPostModal = ({ show, onHide, post, onSave }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  useEffect(() => {
    setTitle(post.title);
    setBody(post.body);
  }, [post]);

  const handleSave = () => {
    onSave({ ...post, title, body }); // Save the changes
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBody">
            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditPostModal;
