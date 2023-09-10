
import React from 'react'
import {FaUserAlt} from 'react-icons/fa'
import {BsCurrencyDollar} from 'react-icons/bs'
import {VscReferences} from 'react-icons/vsc'
import {IoSearchSharp} from 'react-icons/io5'
const Product = () => {
  return (
   
    <div className="mainb2">
  
  <div className="header">
    <h1>Product inventory</h1>
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
 
 <div className="filtbtns">
    <button className='btn1w'>Product Management</button>
<button className='btn2w btn5w'>Transfers made</button>
 </div>
  <div className="bodysales">

    <div className="tablex">
        <div className="tablehead">
        <h3>Customer</h3>
        <h3>Name</h3>
        <h3>Shares</h3>
        </div><div className="tablebody">
        <h3>Alejandrom</h3>
        <h3>Saleem</h3>
        <h3><button className='btn4w'>See products</button></h3>
        </div>
    </div>
  </div>


  </div>
  )
}

export default Product