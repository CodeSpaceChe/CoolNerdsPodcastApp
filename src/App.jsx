
import './App.css'
import { useState, useEffect } from 'react'
import NowPlaying from '../NowPlaying'
import Previews from '../Previews'


const previews_url = "https://podcast-api.netlify.app/shows"
const show_url = "https://podcast-api.netlify.app/id/"


function App() {

  const [id, setId] = useState('')
  const [previews, setPreviews] = useState([])
  const [show, setShow] = useState('')
  const [season, setSeason] = useState(0)
  const [error, setError] = useState(null);
  
  const apiCall = (url, setData, options = {}) => {
    try {
      fetch(url, options)
      .then(response => response.json())
      .then(json => setData(json))
    } catch (e) {
      setError(e);
      throw e;
    }
  };
  
  useEffect(() => {
    apiCall(previews_url, setPreviews)
  }, []);
  
  useEffect(() => {
    apiCall(show_url+id, setShow)
  }, [id]);

  return (
    <>
      <NowPlaying 
        previews={previews} 
        show={show}
        season={season} 
        setId={setId} 
        setSeason={setSeason} 
      />
      <Previews 
        previews={previews}
        setId={setId}
        setSeason={setSeason}
      />
    </>
  )
}

export default App
