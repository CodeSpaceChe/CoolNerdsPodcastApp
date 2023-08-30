import './App.css'
import { useState, useEffect } from 'react'
import NowPlaying from './components/NowPlaying'
import Previews from './components/Previews'
import { useAPICall } from './useAPICall'
import { useLocalStorage } from './useLocalStorage'


function App() {

  const [currentShowId, setCurrentShowId] = useState('')
  const [previews, setPreviews] = useState([])
  const [show, setShow] = useState('')
  const [season, setSeason] = useState(0)

  const [favourites, setFavourites] = useLocalStorage('favourites', [''])
  
  const {isLoading, error, executeAPICall} = useAPICall()
  
  const previews_url = new URL('https://podcast-api.netlify.app/shows');
  const show_url = new URL(`https://podcast-api.netlify.app/id/${currentShowId}`);

  useEffect(() => {
    executeAPICall(previews_url, setPreviews)
  }, [])

  useEffect(() => {
    executeAPICall(show_url, setShow)
  }, [currentShowId])
  
  return (
    <>
      <button onClick={() => {favourites.unshift(currentShowId); setFavourites(favourites)}}>Click Me!</button>
      <NowPlaying  
        show={show}
        season={season} 
        setSeason={setSeason} 
      />

      <Previews 
        previews={previews}
        setId={setCurrentShowId}
        setSeason={setSeason}
      />
    </>
)}

export default App

