import React from 'react'
import ButtonCard from './ButtonCard'

const ButtonList = () => {
  const list = ["All","Music","Manga","Cricket","Trailer","Songs","Movies","RealMadrid","ManchesterUnited","Motivational","Yoga","Podcast","Live","Gaming","RecentlyUploaded","Watched","NewToYou"];
  return (
    <div className='flex flex-nowrap overflow-x-scroll no-scrollbar'>
      {list.map((item)=>(
        <ButtonCard key={item} name={item}/>
      ))}
    </div>
  )
}

export default ButtonList