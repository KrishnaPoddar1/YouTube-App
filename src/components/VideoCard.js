import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const {snippet,statistics} = info;
    //console.log(snippet);
    const {channelTitle,title,thumbnails} = snippet;
    //  console.log(thumbnails);
    const {viewCount} = statistics;
  return (
    <div className='p-2 m-2 w-72'>
         <img alt="thumbnail" src={thumbnails.medium.url} className='rounded-lg' />
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard