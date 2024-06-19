import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import { cacheResults } from '../utils/searchSlice';
import { useNavigate } from 'react-router-dom';

const Head = () => {
  const [searchQuery,setSearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store)=>store.search);
  const navigate = useNavigate();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  useEffect(()=>{
    const timer = setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSuggestions();
      }
    },200)
    return () => {
      clearTimeout(timer);
    }
  },[searchQuery]);

  const getSearchSuggestions = async () =>{
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery]:json[1],
    }));
  };

  const handleSearchClick = (suggestion) => {
    // console.log(suggestion);
    setSearchQuery(suggestion);
    navigate(`/search?q=${suggestion}`);
    // getSearchClickVideos(suggestion);
  };

  // const getSearchClickVideos = async (query) =>{
  //   //fetch(YOUTUBE_SEARCH_SUGGESTION_API+searchQuery+"&key="+GOOGLE_API_KEY);
  //   const data = await fetch(`${YOUTUBE_SEARCH_SUGGESTION_API}${query}&key=${GOOGLE_API_KEY}`);
  //   const json = await data.json();
  //   setSearchResults(json.items);
  //   console.log(json.items);
  //   // All the search data is here in this console.log .
  //   // This can be used to display the video cards on to the page
  //   // {videos.map((video)=>(
  //   //   <Link to={"/watch?v="+video.id}>
  //   //     <VideoCard key={video.id} info={video}/>
  //   //   </Link>
  //   // ))}
  //   // <SearchPage data={json.items[0]}/>
  // };

  const handleInputFocus = () => {
    setShowSuggestions(true);
  };

  const handleInputBlur = () => {
    // Delay hiding suggestions to allow click event to fire
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
  };

  return (
    <div className='grid grid-flow-col p-4 fixed w-full top-0 bg-white'>
      <div className='flex col-span-1'>
        <img alt='menu' src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp&w=256' className='h-10 cursor-pointer' onClick={handleToggleMenu} />
        <img alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png' className='h-10 mx-2  cursor-pointer' />
      </div>
      <div className='col-span-10 px-12'>
        <input type='text' className='w-1/2 border border-gray-400 p-2 px-5 rounded-l-full' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onBlur={handleInputBlur} onFocus={handleInputFocus}/>
        <button className='p-2 border border-gray-400 rounded-r-full hover:bg-red-600 hover:text-white' onClick={() => handleSearchClick(searchQuery)}>Search</button>
      </div>
      {showSuggestions && (<div className='absolute bg-white left-[19rem] top-[3.6rem] w-[31.4rem] py-2 px-2 shadow-lg rounded-lg'>
        <ul>
          {suggestions.map((s)=>(
            <li key={s} className='py-2 px-2 rounded-lg hover:bg-gray-100' onClick={() => handleSearchClick(s)}>{s} </li>
          ))}
        </ul>
      </div>)}
      <div className='col-span-1'>
      <img alt='user-icon' className='h-10 cursor-pointer' src='https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg' />
      </div>
    </div>
  )
}

export default Head