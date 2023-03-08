import React from 'react';
import './CloseButtonStyles.css'
import { useNavigate } from 'react-router-dom';

const CloseButton = () => {
  const navigate = useNavigate();

  const handleCloseClick = () => {
    navigate('/Projects'); // route to another page
  };

  return (
    <button className="close-button" onClick={handleCloseClick}>
      <span aria-hidden="true">CLOSE X</span>
    </button>
  );
};

export default CloseButton