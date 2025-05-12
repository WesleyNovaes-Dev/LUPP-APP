import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoList.css';

const VideoList = ({ videos }) => {
  const navigate = useNavigate();

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div className="video-list">
      {videos.map((video) => (
        <div 
          key={video.id} 
          className="video-item" 
          onClick={() => handleVideoClick(video.id)}
        >
          <div className="video-thumbnail">
            <img src={video.thumbnail} alt={video.title} />
            <span className="video-duration">{video.duration}</span>
          </div>
          <div className="video-info">
            <h3>{video.title}</h3>
            <p>{video.channel}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;