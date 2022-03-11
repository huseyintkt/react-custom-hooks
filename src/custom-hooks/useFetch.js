import { useState, useEffect } from 'react';

export const useFetch = (pUrl) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = { signal: controller.signal };
    async function getData() {
      setIsLoading(true);
      try {
        const response = await fetch(pUrl, signal);
        const data = await response.json();
        setResult(data);
      } catch (err) {
        console.error('Error from fetch', error);
        setError(err.message);
      }
      setIsLoading(false);
    }

    getData();

    return () => controller.abort();
  }, []);

  return [result, error, isLoading];
};
