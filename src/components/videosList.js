import React from 'react'

import { shallowEqual, useSelector } from "react-redux";
import VideoWithIntersectionObserver from './videoWithIntersectionObserver'
function VideosList() {

const { data, loading, error } = useSelector(
    (state) => state.dataReducer,
    shallowEqual
  );





 
  return (
    <div className="App">
           {loading ? (
            <div className="alert alert-info">درحال دریافت اطلاعات</div>
          ) : (
            <div className="videos"   >
            { data && data.map((item, index) => {
              return (
                <div key={'video-'+index} className="video">
                  <VideoWithIntersectionObserver key={'video-'+index} big_poster={item.attributes.big_poster } preview_src={item.attributes.preview_src}  />
                </div>
              )
            })}
          </div>
          )}
    
   
      {error && <div className="alert alert-warning">{error.message}</div>}
    </div>
  )
}
VideosList.defaultName = 'VideosList'
export default VideosList
