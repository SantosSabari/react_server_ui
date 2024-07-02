import React, { useEffect, useState } from 'react'

interface Datas{
    data:any | null,
    loading: boolean,
    error: string | null
    fetch:any
}

const useFetch = <T,> (url:string): Datas => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () =>{
    setLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }
  useEffect(() => {
    fetchData()
  }, [url]);

  return { data, loading, error, fetch:fetchData};
}




const usePostFetch = <T,>(url: string) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const postData = async (data: T) => {
    setLoading(true);
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      setResponse(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, postData };
};



export { useFetch, usePostFetch };