import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

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
        <button
          className='ui inverted green button'
          onClick={() => setResource('users')}
        >
          Users
        </button>
      </div>
      {resource === 'users' ? (
        <UserList resource={resource} />
      ) : (
        <ResourceList resource={resource} />
      )}
    </div>
  );
};

export default App;
