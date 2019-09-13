import { useState, useEffect } from 'react';
import axios from 'axios';

export const useResources = resource => {
  const [resources, setResources] = useState([]);

  const fecthResource = async resource => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(res.data);
  };

  useEffect(() => {
    fecthResource(resource);
  }, [resource]);
  return resources;
};
