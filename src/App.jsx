
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState, useCallback, useEffect } from 'react'

const previews_url = "https://podcast-api.netlify.app/shows"
const show_url = "https://podcast-api.netlify.app/id/"

/**
 * @param {string} url
 * @param {string{}} options
 * @returns {json}
 */
export const getPreviews = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

/**
 * 
 * @returns @returns {boolean, string, json, object}
 */
export const useGetPreviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  
  const execute = async (options = {}) => {
    try {
      setIsLoading(true);
      const previews = await getPreviews(previews_url, options);
      setData(previews);
      return previews;
    } catch (e) {
      setError(e);
      setIsLoading(false);
      throw e;
    }
  };
    
  return {
    isLoading,
    error,
    data,
    execute: useCallback(execute, []), // to avoid infinite calls when inside a `useEffect`
  };
};

/**
 * @param {string} url
 * @param {string{}} options
 * @returns {json}
 */
export const getShow = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

export const useGetShow = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  
  const execute = async (options = {}) => {
    try {
      setIsLoading(true);
      const show = await getShow(show_url + '/' + id, options);
      setData(show);
      return show;
    } catch (e) {
      setError(e);
      setIsLoading(false);
      throw e;
    }
  };
    
  return {
    isLoading,
    error,
    data,
    execute: useCallback(execute, []), // to avoid infinite calls when inside a `useEffect`
  };
};


function App() {
  const {
    isLoading,
    data,
    execute,
  } = useGetPreviews();
  
  useEffect(() => {
    try {
      execute()  
      console.log("test")
    } catch(e) {}
  }, [
    execute,  
  ]);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  )
}

export default App
