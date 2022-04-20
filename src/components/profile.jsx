import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h2> 여기는 Profile입니다.</h2>
      <button onClick={() => {
        navigate('/');
      }}>Go to Hoem</button>
    </>
)
};

export default Profile;