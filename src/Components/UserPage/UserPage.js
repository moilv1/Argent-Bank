import React, { useEffect, useState } from 'react';
import "../Home/Home.css";
import Header from '../Header/Header';
import { useSelector, useDispatch } from "react-redux";
import { setUser } from '../../actions/userSlice'; 
import Footer from '../Footer/Footer';
import "./UserPage.css";
import MoneyCards from '../MoneyCards/MoneyCards';

export default function UserPage() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  const fetchUserData = async () => {
    
    if (!token) {
      console.error("Token is missing");
      return;
    }
    
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });
  
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données utilisateur");
      }
  
      const data = await response.json();
      dispatch(
        setUser({
          email: data.body.email,
          firstName: data.body.firstName,
          lastName: data.body.lastName,
          userName: data.body.userName
        })
      );
      
    } catch (error) {
      console.error("Erreur lors de la récupération des données utilisateur :", error.message);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, );


  
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [userName, setUserName] = useState(user.userName || "");
  const [isEditing, setIsEditing] = useState(false);

  const modifyName = async () => {
    if (!token) {
      console.error("Token is missing");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        
        method: "put",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          userName: userName || user.userName
        })
      });
  
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données utilisateur");
      }
  
      fetchUserData();
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données utilisateur :", error.message);
    }
  };


  return (
    <>
      <Header/>
      { user.connected ? ( 
        <main className='UserMain'>
         <section className="UserSection">
         <h1>Welcome back  <br/> {user.firstName} {user.lastName} !</h1>
        <div>
    {isEditing ? (
      <div className='FormChangeName'>
        <div className="DivInputChangeName">
        <label for='Firstname'>First name: </label>
        <input className="InputChangeName unclickable" value={firstName} disabled name='Firstname' placeholder={user.firstName}/>
        <label for='Firstname'>Last name: </label>
        <input className="InputChangeName unclickable" value={lastName} disabled  placeholder={user.lastName} />
        <label for='Firstname'>User name: </label>
        <input className="InputChangeName" value={userName} onChange={e => setUserName(e.target.value)}  placeholder={user.userName} />
        </div>
        <div className="DivBtnChangeName">
        <button className="BtnChangeName" onClick={modifyName}>Save</button>
        <button className="BtnChangeName" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>

      </div>
    ) : (
      <div>
        <button  className="NameButton" type="button" onClick={() => setIsEditing(true)}>Edit Name</button>
      </div>
    )}
  </div>
         </section>
          <MoneyCards title={"Argent Bank Checking (x8349)"}
                amount={"$2,082.79"}
                description={"Available Balance"} />
          <MoneyCards title={"Argent Bank Savings (x67124)"}
                amount={"$10,928.42"}
                description={"Available Balance"} />
          <MoneyCards title={"Argent Bank Credit Card (x5201)"}
                amount={"$184.30"}
                description={"Current Balance"} />
      </main> ) 
      : ( 
        <main className='UserMain'>
         <section className="UserSection">
         <h1> Please sign in to access your account</h1>
          </section>
      </main>
        ) }
    
      <Footer/>
    </>
  );
}