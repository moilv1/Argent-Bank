import React from 'react'
import "./MoneyCards.css";
import { NavLink } from 'react-router-dom';

export default function MoneyCards({ title, amount, description }) {
  return (
    <section className="account">
      <div className="accountContent">
        <p className="accountTitle">{title}</p>
        <h3 className="accountAmount">{amount}</h3>
        <p className="accountDescription">{description}</p>
      </div>
      <div className="accountBtn">
      <NavLink to="/user/account">
        <button className="transactionButton">View transactions</button>
        </NavLink>
      </div>
    </section>
  )
}
