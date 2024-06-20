import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Components/Home/Home";
import SignIn from './Components/SignIn/SignIn';
import UserPage from './Components/UserPage/UserPage';
import AccountInfo from './Components/AccountInfo/AccountInfo';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="login" element={<SignIn />} />
  <Route path="user" element={<UserPage />} />
  <Route path="user/account" element={<AccountInfo />} />
</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;