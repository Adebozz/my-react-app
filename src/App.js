import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      <h1>React App</h1>
      {/* Render data from the backend */}
    </div>
  );
};

export default App;
