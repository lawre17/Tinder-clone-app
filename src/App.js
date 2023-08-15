import './Css/App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Chat from "./Chat";
import Profile from "./Components/Profile";
function App() {
  return (
    <div>
      <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
