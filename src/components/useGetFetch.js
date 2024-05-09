import { useState, useEffect } from 'react';

const useGetFetch = (url, filterName = null) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
    .then(res => {
      if (!res.ok) { // error coming back from server
        throw Error('could not fetch the data for that resource');
      } 
      return res.json();
    })
    .then(data => {
      const filteredData = filterName ? data.filter(item => item.name === filterName) : data;
      setIsPending(false);
      setData(filteredData);
      setError(null);
    })
    .catch(err => {
      if (err.name === 'AbortError') {
        console.log('fetch aborted')
      } else {
        // auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      }
    })

    // abort the fetch
    return () => abortCont.abort();
  }, [url])

  return { data, isPending, error };
}


 
export default useGetFetch;