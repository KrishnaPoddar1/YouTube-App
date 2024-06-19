import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_SUGGESTION_API } from '../utils/constant';

const SearchPage = () => {
  const [videos, setVideos] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    if (query) {
      fetchVideos(query);
    }
  }, [query]);

  const fetchVideos = async (query) => {
    const data = await fetch(`${YOUTUBE_SEARCH_SUGGESTION_API}${query}&key=${GOOGLE_API_KEY}`);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className='flex flex-col'>
      {videos.map((video) => (
        <Link key={video.id.videoId} to={"/watch?v="+video.id.videoId}>
          <div  className='flex flex-row'>
          <div className='p-2 m-2 w-96 '>
          <img alt="thumbnail" src={video.snippet.thumbnails.medium.url} className='rounded-lg' />
          </div>
          <div className=''>
          <ul>
            <li className='font-bold py-2'>{video.snippet.title}</li>
            <li>{video.snippet.channelTitle}</li>
            <li>{video.snippet.description}</li>
          </ul>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
}

export default SearchPage;
