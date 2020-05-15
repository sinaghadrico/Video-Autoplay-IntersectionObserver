import React, { useRef,useEffect } from 'react'

import  useViewport  from '../hooks/useViewport'
function VideoWithIntersectionObserver(props) {
  const videosEl = useRef(null)
  const isVisible = useViewport(videosEl)

  const {big_poster,preview_src}=props;
  useEffect(() => {
      if(videosEl){
        if(isVisible===true )
        {
           videosEl.current.play();
        }
        else{
            videosEl.current.pause();
        }
      }
   
}, [isVisible])

  return (

    <video controls poster={big_poster} ref={videosEl}>
      <source src={preview_src} type="video/mp4" />
    </video>
 
  )
}
VideoWithIntersectionObserver.defaultName = 'VideoWithIntersectionObserver'
export default VideoWithIntersectionObserver
