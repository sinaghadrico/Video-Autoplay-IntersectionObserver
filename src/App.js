import React from 'react'
import VideosList from './components/videosList'
import FetchVideos from './components/FetchVideos'
import './App.css'
import "bootstrap/dist/css/bootstrap.css"
function App() {
  return (
    <>
      <FetchVideos />
      <VideosList />
    </>
  )
}

export default App
