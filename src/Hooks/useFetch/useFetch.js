/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import {useEffect, useState} from 'react';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, [url]);

  const getData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  return {data, loading, error};
};

export default useFetch;
