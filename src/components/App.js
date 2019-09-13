import React, { useState } from 'react';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div className='ui container'>
      <div>
        <button
          className='ui inverted purple button'
          onClick={() => setResource('posts')}
        >
          Posts
        </button>
        <button
          className='ui inverted blue button'
          onClick={() => setResource('todos')}
        >
          Todos
        </button>
      </div>
      {resource}
    </div>
  );
};

export default App;
