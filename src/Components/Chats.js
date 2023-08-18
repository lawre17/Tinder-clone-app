import { useEffect, useState } from "react";
import Chat from "./Chat";
import Header from "./Header";
import { Link } from "react-router-dom";
import ChatsData from "../ChatsData";
import '../Css/Chats.css'
import {timeAgo,getMostRecentMessage} from '../Helpers'

function Chats() {

    const [chats, setChats] = useState(ChatsData);

    const Messages = chats.map((item) =>
    (
        <Link key={item.name} to={`/chats/${item.name}`} style={{textDecoration:'none'}} params={item}>
            <Chat
                key={item.name}
                name={item.name}
                 message={getMostRecentMessage(item)[0]}
                timeStamp={timeAgo(getMostRecentMessage(item)[1])}
                pic={item.pic}
            />
        </Link>
    ))

    return ( 
        <div>
            <Header backButton = "/"/>
            <div className="chats-container">
                {Messages}
            </div>
        </div>
     );
}

export default Chats;