// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import NavigationBar from './components/Navbar';
import EditPostModal from './components/EditPostModal'; // for editing

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
