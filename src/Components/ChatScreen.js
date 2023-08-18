import { Avatar } from "@mui/material";
import Header from "./Header";
import '../Css/Chatscreen.css'
import ChatsData from "../ChatsData";
import { useParams } from "react-router-dom"
import { useState } from "react";
import {sortChatData,getCurrentTimestampFormatted} from '../Helpers'

function ChatScreen(props) {
    //.log("rendered")
    const { person } = useParams();
    const[input,setInput] = useState('')
    const [chatData, setChatData] = useState([])

    if (chatData.length === 0) {

         const matchingData = ChatsData.find(data => data.name === person);
        matchingData ? setChatData([matchingData]) : setChatData([])
        
    }

    //console.log(chatData)

    const handleSend = e => {
        e.preventDefault()

        const newMessage = {
            message: input,
            timeStamp: getCurrentTimestampFormatted()
        };

        setChatData(
            preChatdata => {
                
                const UpdatedChatData = preChatdata.map(data => {

                    return {
                        ...data,
                        messages: {
                            ...data.messages,
                            to:[...data.messages.to,newMessage]
                        }
                    }
                })

                return UpdatedChatData

            }
        )
    }
    

    const chats = chatData.map(data => (
        <div
            key={Math.random()}
            className="messages">
                {sortChatData(data).map(sms => (
                    sms.type === "from" ?
                        <div
                            key={sms.timeStamp}
                            className="chats-from">
                        <Avatar alt={data.name} src={data.pic} />
                        <p className="ChatsUser">
                            {sms.message}
                        </p>
                    </div>
                        :
                        <p
                             key={sms.timeStamp}
                            className="Chats-to">
                        {sms.message}
                        <span className="ticks">✔✔</span>
                    </p>
                ))} 
        </div>
    ))
    
    
    
    return ( 
        <div>
            <Header backButton = "/chats"/>
            <div className="chatsScreen-Container">
                <div className="match-info">{`YOU MATCHED WITH ${ person.toLocaleUpperCase()} ON 10/08/2023`}</div>
                { chats}
                <div className="input">
                    <form className="chat-form">
                        <input
                            onChange={e =>setInput(e.target.value) }
                            value={input}
                            type="text"
                            name="message"
                            className="chat-input"
                            placeholder="Type a message ..." />
                        <button type="submit" onClick={handleSend} className="btn">SEND</button>
                    </form>
                </div>
            </div>
        </div>
     );
}

export default ChatScreen;