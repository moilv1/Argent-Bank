import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "./AccountInfo.css";
import { useState } from 'react';

const transactions = [
  { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: "5.00", balance: 2082.79, type: 'Electronic', category: 'Food', note: '' },
  { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: "10.00", balance: 2087.79, type: 'Electronic', category: 'Food', note: '' },
  { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: "20.00", balance: 2097.79, type: 'Electronic', category: 'Food', note: '' },
  { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: "30.00", balance: 2117.79, type: 'Electronic', category: 'Food', note: '' },
  { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: "40.00", balance: 2147.79, type: 'Electronic', category: 'Food', note: '' },
  { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: "50.00", balance: 2187.79, type: 'Electronic', category: 'Food', note: '' },
];

export default function AccountInfo() {

  const [editingCategory, setEditingCategory] = useState(null);
  const [editingNote, setEditingNote] = useState(null);
  const [category, setCategory] = useState('');
  const [note, setNote] = useState('');
  const [openCard, setOpenCard] = useState(null);

  const handleEditCategoryClick = (index, event) => {
    event.stopPropagation();
    setEditingCategory(index);
    setCategory(transactions[index].category);
  };

  const handleEditNoteClick = (index, event) => {
    event.stopPropagation();
    setEditingNote(index);
    setNote(transactions[index].note);
  };

  const handleCategoryChange = (index, event) => {
    setCategory(event.target.value);
    transactions[index].category = event.target.value;
  };

  const handleNoteChange = (index, event) => {
    setNote(event.target.value);
    transactions[index].note = event.target.value;
  };

  return (
    <div>
      <Header />
      <section className="accountInfo">
        <div className="accountInfoContent">
          <p className="accountInfoTitle">Argent Bank Checking (x8349) </p>
          <h3 className="accountInfoAmount">$2,083.79</h3>
          <p className="accountInfoDescription">Available Balance</p>
        </div>
      </section>
      <section className="accountTransaction">
        <div className="transactionHeader">
          <span className='DATEHeader'>DATE</span>
          <span className='DescHeader'>DESCRIPTION</span>
          <span className='AmountHeader'>AMOUNT</span>
          <span className='BalanceHeader'>BALANCE</span>
        </div>
        {transactions.map((transaction, index) => (
          <div key={index} className={`transactionCard ${openCard === index ? 'open' : ''}`} onClick={() => openCard === index ? setOpenCard(null) : setOpenCard(index)}>
            <div className="transactionDetails">
              <i className={`fa-solid ${openCard === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
              <p>{transaction.date}</p>
              <p>{transaction.description}</p>
              <p>${transaction.amount}</p>
              <p>${transaction.balance}</p>
            </div>
            {openCard === index && (
              <div className="editingButtons">
                <p>Transaction Type: {transaction.type}</p>
                {editingCategory === index ? (
                  <select value={category} onChange={(e) => handleCategoryChange(index, e)} onClick={(e) => e.stopPropagation()} onBlur={() => setEditingCategory(null)}>
                    <option value="Food">Food</option>
                    <option value="SOON">SOON</option>
                  </select>
                ) : (
                  <p onClick={(e) => handleEditCategoryClick(index, e)}>Category: {transaction.category} <span>✏️</span></p>
                )}
                {editingNote === index ? (
                  <input value={note} onChange={(e) => handleNoteChange(index, e)} onClick={(e) => e.stopPropagation()} onBlur={() => setEditingNote(null)} />
                ) : (
                  <p onClick={(e) => handleEditNoteClick(index, e)}>Notes: {transaction.note} <span>✏️</span></p>
                )}
              </div>
            )}
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}