import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h2> 여기는 Home입니다.</h2>
      <button onClick={() => {
        navigate('/profile');
      }}>Go to Profile</button>
    </>
)
};

export default Home;