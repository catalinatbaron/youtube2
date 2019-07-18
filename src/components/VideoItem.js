import '../css/VideoItem.scss'
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div className="item video-item" onClick={() => onVideoSelect(video)}>
            <img src={video.snippet.thumbnails.medium.url} className="ui small image" alt={video.snippet.title}/>
           <div className="content">
            <div className="header">{video.snippet.title}</div>
            </div> 
            {/* <div className="description">{video.snippet.description}</div> */}
        </div>
    );
}

export default VideoItem