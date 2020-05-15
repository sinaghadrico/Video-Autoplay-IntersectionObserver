import React, { useEffect, useRef } from 'react'

import { shallowEqual, useSelector } from "react-redux";
function Videos() {

const { data, loading, error } = useSelector(
    (state) => state.dataReducer,
    shallowEqual
  );

  const videosEl = useRef(null);
   useEffect(() => {
    if (typeof(window) !== "undefined"){
        window.addEventListener('scroll', checkScroll, false)
        window.addEventListener('resize', checkScroll, false)
      }
      checkScroll()
  }, [])


   useEffect(() => {
      checkScroll()
  }, [data])



  useEffect(() => {
    return () => {
        window.removeEventListener('scroll', checkScroll, false)
        window.removeEventListener('resize', checkScroll, false)
    };
  }, []);


  const checkScroll = () => {
   let fraction = 0.8;
   if (typeof(window) !== "undefined") {
    if(videosEl.current)
    {
     var data = videosEl.current.children;
     for (var i = 0; i < data.length; i++) {
       var video = data[i].children[0]
       var x = video.offsetLeft,
         y = video.offsetTop,
         w = video.offsetWidth,
         h = video.offsetHeight,
         r = x + w,
         b = y + h,
         visibleX,
         visibleY,
         visible
 
       visibleX = Math.max(
         0,
         Math.min(
           w,
           window.pageXOffset + window.innerWidth - x,
           r - window.pageXOffset,
         ),
       )
       visibleY = Math.max(
         0,
         Math.min(
           h,
           window.pageYOffset + window.innerHeight - y,
           b - window.pageYOffset,
         ),
       )
 
       visible = (visibleX * visibleY) / (w * h)
 
       if (visible > fraction) {
         video.play()
       } else {
         video.pause()
       }
     }
    }
}
   
  }

 
  return (
    <div className="App">
           {loading ? (
            <div className="alert alert-info">درحال دریافت اطلاعات</div>
          ) : (
            <div className="videos"  ref={videosEl}  >
            { data && data.map((item, index) => {
              return (
                <div key={'video-'+index} className="video">
                  <video controls poster={item.attributes.big_poster}>
                    <source src={item.attributes.preview_src} type="video/mp4" />
                  </video>
                </div>
              )
            })}
          </div>
          )}
    
   
      {error && <div className="alert alert-warning">{error.message}</div>}
    </div>
  )
}
Videos.defaultName = 'Videos'
export default Videos
