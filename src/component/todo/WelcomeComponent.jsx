import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import HelloMessageService from '../../api/todo/HelloMessageService';

const WelcomeComponent = () => {
  const { name } = useParams();
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    HelloMessageService.executeHelloMessageService().then((response) => {
      setWelcomeMessage(response.data.message);
    });
  }, []); // Empty dependency array to run the effect only once on mount

  const handleGoToTodos = () => {
    navigate('/todo');
  };

  return (
    <>
      <h1>Welcome!</h1>
      <div className='container'>
        Welcome {name}. You can manage your Todo's <Link to="/todo">here</Link>.
      </div>
      <div className='container'>
        <h2>{welcomeMessage}</h2>
      </div>
    </>
  );
};

export default WelcomeComponent;
