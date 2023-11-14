import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './components/Home';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    axios.get('http://localhost:5000/api/examples').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
       <Home />
    </div>
  );
};

export default App;
