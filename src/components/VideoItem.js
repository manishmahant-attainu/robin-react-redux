import React from 'react';
// import './VideoItem.scss';
import style from './VideoItem.module.scss';
// [filename].module.[extension]

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
    onClick={() => onVideoSelect(video)}
    className={`${style['VideoItem__video-item']} ${style['VideoItem__video-item--item']}`}
    // className={'VideoItem__video-item  VideoItem__video-item--item'}
    >
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
