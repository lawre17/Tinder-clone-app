import './Css/App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Chats from './Components/Chats';
import ChatScreen from './Components/ChatScreen';
function App() {
  return (
    <div>
      <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chats/:person" element={<ChatScreen />} />
      </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
