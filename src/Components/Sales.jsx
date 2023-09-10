import React from 'react'
import {FaUserAlt} from 'react-icons/fa'
import {BsCurrencyDollar} from 'react-icons/bs'
import {VscReferences} from 'react-icons/vsc'
const Sales = () => {
  return (
   
    <div className="mainb2">
  
  <div className="header">
    <h1>Sales</h1>
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
  <div className="bodysales">
    <h1>Latest Transactions</h1>
    <div className="tablex">
        <div className="tablehead">
        <h3>Company</h3>
        <h3>Type</h3>
        <h3>Hour</h3>
        <h3>Tel</h3>
        <h3>Ref</h3>
        <h3>Folio</h3>
        <h3>Amount</h3>

        <h3>Ticket</h3>
        </div><div className="tablebody">
        <h3>Company</h3>
        <h3>Type</h3>
        <h3>Hour</h3>
        <h3>Tel</h3>
        <h3>Ref</h3>
        <h3>Folio</h3>
        <h3>Amount</h3>

        <h3>Ticket</h3>
        </div>
    </div>
  </div>


  </div>
  )
}

export default Sales