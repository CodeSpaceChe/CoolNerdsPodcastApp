
import './App.css'
import { useState, useEffect } from 'react'
import NowPlaying from './components/NowPlaying'
import Previews from './components/Previews'
import { useAPICall } from './useAPICall'


const previews_url = "https://podcast-api.netlify.app/shows"
const show_url = "https://podcast-api.netlify.app/id/"


function App() {

  const [currentShowId, setCurrentShowId] = useState('')
  const [previews, setPreviews] = useState([])
  const [show, setShow] = useState('')
  const [season, setSeason] = useState(0)
  
  const {isLoading, error, executeAPICall} = useAPICall()
  
  useEffect(() => {
    executeAPICall(previews_url, setPreviews)
  }, [])

  useEffect(() => {
    executeAPICall(show_url+currentShowId, setShow)
  }, [currentShowId])
  
  return (
    <>
    
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