import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created a new room');
    };
    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('ROOM ID & username is required');
            return;
        }

        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };
    const handleInputEnter = (e)=>{
        if(e.code === 'Enter'){
            joinRoom();
        }
    }
  return (
    <div className='homePageWrapper'>
        <div className='formWrapper'>
            <img src='/Gen.png' className='homeLogo'></img>
            <h4 className='mainLabel'>Paste invitation room id</h4>
            <div className='inputGroup'>
                <input 
                className='inputBox' 
                type='text' 
                placeholder='Room ID' 
                value={roomId}
                onChange={(e)=>setRoomId(e.target.value)}
                onKeyUp={handleInputEnter}
                ></input>
                <input 
                className='inputBox' 
                type='text' 
                placeholder='User Name'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                onKeyUp={handleInputEnter}
                ></input>
                <button className='btn joinBtn' onClick={(joinRoom)}>Join</button>
                <span className='createInfo'>
                    If you don't have an invite then  cereate &nbsp; 
                    <a href='' onClick={createNewRoom} className='createNewBtn'>New room</a>
                </span>
            </div>
        </div>
        <h4 className='footer'>Build with ❤️ by &nbsp;<a href='https://github.com/AbhishekTakIITian'>Abhishek Tak</a></h4>
    </div>
  )
}

export default Home