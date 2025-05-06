// src/components/Post.jsx
import React from 'react';
import './style.css'; // Opcional: se quiser estilizar individualmente

const Post = ({ title, image }) => {
  return (
    <div className="post">
      <h3>{title}</h3>
      <img src={image} alt={title} />
    </div>
  );
};

export default Post;
