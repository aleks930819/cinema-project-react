import { useCallback, useState } from 'react';

const URL = 'http://localhost:8000/api';

const useHttp = (applayData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (requestConfig) => {
      setIsLoading(true);
      setError(null);
      try {
        let response = await fetch(`${URL}${requestConfig.endpoint}`, {
          method: requestConfig.method ? requestConfig.method : 'GET',
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });

        let jsonResult = await response.json();
        applayData(jsonResult);

        if (!response.ok) {
          setError(jsonResult.message);
        }
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    },
    [applayData]
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};
export default useHttp;
