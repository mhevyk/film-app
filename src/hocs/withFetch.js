import { useEffect, useState } from 'react';
import FetchError from '../components/FetchError';
import Loader from '../components/Loader';

export default function withFetch(WrappedComponent) {
  return ({ fetchMethod, ...props }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      fetchMethod()
        .then((axiosResponse) => setResponse(axiosResponse))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, [fetchMethod]);

    if (error) {
      return <FetchError error={error} />;
    }
    if (response) {
      return <WrappedComponent response={response} {...props} />;
    }
    if (loading) {
      return <Loader />;
    }
  };
}
