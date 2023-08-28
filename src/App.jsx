
import './App.css'
import { useState, useEffect } from 'react'
import NowPlaying from '../NowPlaying'
import Previews from '../Previews'
import { useAPICall } from './useAPICall'


const previews_url = "https://podcast-api.netlify.app/shows"
const show_url = "https://podcast-api.netlify.app/id/"


function App() {

  const [id, setId] = useState('')
  const [previews, setPreviews] = useState([])
  const [show, setShow] = useState('')
  const [season, setSeason] = useState(0)
  
  const {isLoading, error, executeAPICall} = useAPICall()
  
  useEffect(() => {
    executeAPICall(previews_url, setPreviews)
  }, [])

  useEffect(() => {
    executeAPICall(show_url+id, setShow)
  }, [id])
  
  return (
    <>
      <NowPlaying  
        show={show}
        season={season} 
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
