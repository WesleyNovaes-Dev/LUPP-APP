import React from 'react';
import './VideoCard.css';

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <div className="thumbnail-container">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="thumbnail"
        />
        <span className="duration">{video.duration}</span>
      </div>
      <div className="video-info">
        <div className="details">
          <h3 className="title">{video.title}</h3>
          <p className="channel">{video.channel}</p>
          <p className="views-and-time">{video.views} • {video.uploadTime}</p>
        </div>
      </div>
    </div>
  );
  
};

export default VideoCard;