import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ user: '', image: null });

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then(res => setPosts(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user', newPost.user);
    formData.append('image', newPost.image);

    axios.post('http://localhost:3000/posts', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(res => {
      setPosts([...posts, res.data]);
    });
  };

  return (
    <div className="app">
      <h1>منصة W</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="اسم المستخدم"
          onChange={(e) => setNewPost({...newPost, user: e.target.value})}
        />
        <input
          type="file"
          onChange={(e) => setNewPost({...newPost, image: e.target.files[0]})}
        />
        <button type="submit">نشر</button>
      </form>

      <div className="posts">
        {posts.map(post => (
          <div key={post.id} className="post">
            <img 
              src={`http://localhost:3000/uploads/${post.image}`} 
              alt={post.user} 
            />
            <p>بواسطة: {post.user}</p>
            <p>الإعجابات: {post.likes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
