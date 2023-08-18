import '../Css/chat.css'
import { Avatar } from '@mui/material';
function Chat({ name, message, timeStamp, pic }) {
    
    return ( 
        <div className="chat-container">
            <div className='chat'>
                <Avatar sx={{width:50,height:50}} className='chat-pic' alt={name} src={pic} />
                {/* <img src={pic} alt={ name} className='chat-pic' /> */}
                <div className='chat-sample'>
                    <h4>{ name}</h4>
                    <div className='chat-message'>
                        <p>{ message}</p>
                    </div>
                    <p className='chat-stamp'>{ timeStamp}</p>

                </div>
            </div>
        </div>
     );
}

export default Chat;