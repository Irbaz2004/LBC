import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logogif from '../img/loading.gif'

const LoadingPage = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  if (redirect) {
    return <Link to="/" />;
  }

  return (
    <div className="loading-container">
      <img src={logogif} alt="" />
      <div class="loader"></div>
    </div>
  );
};

export default LoadingPage;
