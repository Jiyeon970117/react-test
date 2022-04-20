import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from './components/home';
import Profile from './components/profile';
function App() {
  return (
    <BrowserRouter >
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/profile'>Profile</Link>
      </nav>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



// exact는 기본을 설정하는 경로를 잡을때 exact를 넣어 true로 만들어준다(즉, 맨처음 실행될 때 보여지는 화면을 설정할 수 있다.)