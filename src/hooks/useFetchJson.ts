import { useEffect, useState } from 'react';
import axios from 'axios';
import { GRAPH_URL } from '../assets/data/requestUrls';

export const useFetchGraph = (endPoint: string) => {
  const [state, setState] = useState<any>('');
  useEffect(() => {
    async function fetchGraph() {
      const url = `${GRAPH_URL}${endPoint}`;
      const response = await axios.get(url);
      setState(response.data);
    }
    fetchGraph();
  }, []);
  return state;
};
