// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../services/Posts';
import Post from '../../components/Post';
import './style.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(response => {
      setProducts(response.data.products);
    });
  }, []);

  return (
    <div className="home-container">

      <div className='newPost'>
        <h1>Nova postagem</h1>
      </div>
      
      <div className="posts-grid">
        {products.map(product => (
          <Post
            key={product.id}
            title={product.title}
            image={product.images[0]}
            className="post"
          />
          
        )
        
        )}
        
      </div>

    </div>
  );
};

export default Home;
