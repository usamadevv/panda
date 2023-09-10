import React from 'react'
import {FaUserAlt} from 'react-icons/fa'
import {BsCurrencyDollar} from 'react-icons/bs'
import {VscReferences} from 'react-icons/vsc'
import {IoSearchSharp} from 'react-icons/io5'
const Balance = () => {
  return (
   
    <div className="mainb2">
  
  <div className="header">
    <h1>Balances</h1>
    <div className="others">
        <div className="el1">
            <FaUserAlt className='icon2'/>
            <p>alejandrom</p>
            <h3>user</h3>
        </div>
        <div className="el1">

        <VscReferences className='icon2'/>
            <p>334324</p>
            <h3>reference</h3>
        </div>  <div className="el1">

        <BsCurrencyDollar className='icon2'/>
            <p>1000 $</p>
            <h3>Balance</h3>
        </div>
    </div>

  </div>
  <div className="searchbar">
    <div className="searchin">

    <input type="text" placeholder='Search' />
    <div className="btnsearch">
<IoSearchSharp />
    </div>
    </div>
    <div className="searchbtns">
        <button className='btn1w'>Export</button>
        <button className='btn2w'>Print</button>
    </div>
  </div>
  <div className="bodysales">
    <h1>Latest Transactions</h1>
    <div className="tablex">
        <div className="tablehead">
        <h3>Customer</h3>
        <h3>Name</h3>
        <h3>Initial Balance</h3>
        <h3> Balance Recieved</h3>
        <h3>Sale</h3>
        <h3>Balance sent</h3>
        <h3>Residual</h3>

        <h3>Current Balance</h3>
        </div><div className="tablebody">
        <h3>Usama</h3>
        <h3>Saleem</h3>
        <h3>2000 $</h3>
        <h3> 10000 $</h3>
        <h3>200 $
        </h3>
        <h3>1500 $
        </h3>
        <h3>2000 $</h3>

        <h3>8000 $</h3>
        </div>
    </div>
  </div>


  </div>
  )
}

export default Balance