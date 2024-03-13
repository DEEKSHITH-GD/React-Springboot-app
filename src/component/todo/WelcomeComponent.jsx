import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HelloMessageService from '../../api/todo/HelloMessageService';

const WelcomeComponent = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const { name } = useParams();

  useEffect(() => {
    // Fetch the welcome message using the username (name) parameter
    HelloMessageService.executeHelloMessageService(name)
      .then((response) => {
        console.log(response);
        setWelcomeMessage(response.data.message);
      })
      .catch((error) => handleError(error)); // Fixed: added parentheses around 'error'
  }, [name]);

  // Fixed: added 'const' before 'handleError'
  const handleError = (error) => {
    console.log(error.response);
    setWelcomeMessage(error.response.data.message);
  };

  return (
    <>
      <h1>Welcome!</h1>
      <div className='container'>
        Welcome {name}. You can manage your Todo's <Link to='/todo'>here</Link>.
      </div>
      <div className='container'>
        <h2>{welcomeMessage}</h2>
      </div>
    </>
  );
};

export default WelcomeComponent;
