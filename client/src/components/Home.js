import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Todolist from './Todolist';
const Home = () => {
  const history=useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token')) {}
    else {
      history("/login");
    }

    // eslint-disable-next-line
  }, []);

  return <Todolist />
};

export default Home;
