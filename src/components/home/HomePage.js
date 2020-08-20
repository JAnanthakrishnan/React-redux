import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='jumbotron'>
      <h1>Learning Base</h1>
      <p>React, Redux and React-router for responsive web applications</p>
      <Link to='about' className='btn btn-primary btn-lg'>
        Learn More
      </Link>
    </div>
  );
};

export default HomePage;
