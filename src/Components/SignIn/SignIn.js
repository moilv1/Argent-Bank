import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../SignIn/SignIn.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useDispatch } from "react-redux";
import { loginSuccess} from "../../actions/userSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  let ErrorLogMessage = document.getElementById('ErrorLogContainer');
 

  const handleSignIn = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erreur lors de la connexion");
      }
      const data = await response.json();

      dispatch(loginSuccess({
        token: data.body.token, 
      }));
  
      localStorage.setItem("token", data.body.token);
      ErrorLogMessage.style.display = "none"
      navigate('/user');
  
    } catch (error) {
      console.error("Erreur lors de la connexion :", error.message);
      ErrorLogMessage.style.display = 'flex';
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  
  return (
    <>
      <Header />
      <main className='SignInMain'>
        <section className='SignInSection'>
          <i className='fa fa-user-circle' />
          <h1> Sign In </h1>
          <div id='ErrorLogContainer'>
            <p className='ErrorLogMessage'>
              Erreur dans l'identifiant et/ou le mot de passe.
            </p>
          </div>
          <form>
            <div className='input'>
              <label>Username</label>
              <input type='text' id='email' value={email} onChange={handleEmailChange} required />
            </div>
            <div className='input'>
              <label>Password</label>
              <input type='password' id='password' value={password} onChange={handlePasswordChange} required />
            </div>
            <div className='input-remember'>
              <input type='checkbox' id='remember-me' />
              <label>Remember me</label>
            </div>
            <button className='sign-in-button' type="button" onClick={handleSignIn}>Sign In</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default  SignIn;