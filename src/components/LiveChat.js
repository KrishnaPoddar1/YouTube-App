import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessage, generateRandomNames } from '../utils/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector((store)=> store.chat.messages);
    const [liveMessage,setLiveMessage] = useState("");
    useEffect(()=>{
        const i= setInterval(()=>{
            console.log("API Polling");
            dispatch(addMessage({
                name:generateRandomNames(),
                message:generateRandomMessage(20),
            }));
        },2000);

        return () => {
            clearInterval(i);
        };
    },[]);
  return (
    <>
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {chatMessages.map((c,i)=>(
            <ChatMessage key={i} name={c.name} message={c.message}/>
        ))}
        
    </div>
    <form className='w-full p-2 ml-2 border border-black' onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
            name:"Krishna Poddar",
            message:liveMessage,
        }));
        setLiveMessage("");
    }}>
        <input className='px-2 w-72' type="text" value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value);}}/>
        <button className='px-2 mx-2 bg-green-200'>Send</button>
    </form>
    </>
  )
}

export default LiveChat