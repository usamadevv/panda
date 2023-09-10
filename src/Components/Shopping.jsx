
import React, { useState } from 'react'
import {FaUserAlt} from 'react-icons/fa'
import {BsCurrencyDollar} from 'react-icons/bs'
import {VscReferences} from 'react-icons/vsc'
import {IoSearchSharp} from 'react-icons/io5'
import po from '../images/po.svg'
const Shopping = () => {
    const [i, seti] = useState(0)
    const [p, setp] = useState(0)
  return (
   
    <div className="mainb2">
  
  <div className="header">
    <h1>Shopping</h1>
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
    <button className='btn1w' onClick={e=>setp(0)}>Shopping</button>
<button className='btn2w btn5w'  onClick={e=>setp(1)}>Billing</button>
 </div>

 {p===0?
 <>
 <div className="selects">
    <button className={`${i===0?"":"light"}`} onClick={e=>seti(0)}>Add purchase</button>
    <button className={`${i===1?"":"light"}`}  onClick={e=>seti(1)}>My deposits</button>
 </div>
 {i===0?
  <div className="bodysales2">
  <div className="formdata">
      <p>Bank</p>
      <select name="" id=""
      >
  
          <option value="abl"> Allied Bank</option>
          <option value="abl"> United Bank</option>
          <option value="abl"> Grand Bank</option>
      </select>
      <p>Account</p>
      <select name="" id=""
      >
  
          <option value="abl"> Allied Bank</option>
          <option value="abl"> United Bank</option>
          <option value="abl"> Grand Bank</option>
      </select>
      <p>How to buy</p>
      <select name="" id=""
      >
  
          <option value="abl"> Allied Bank</option>
          <option value="abl"> United Bank</option>
          <option value="abl"> Grand Bank</option>
      </select>
      <p>Buyer's name</p>
      <select name="" id=""
      >
  
          <option value="abl"> Allied Bank</option>
          <option value="abl"> United Bank</option>
          <option value="abl"> Grand Bank</option>
      </select>
      <p>Amount</p>
     <input type="text" placeholder='200' />
     <p>File</p>
     <div className="imgup">
      <input type="file" />
      <p>Upload Image</p>
  
     </div>
  
  <p>Commnets</p>
  <textarea name="" id="" cols="30" rows="10"></textarea>
  <button className='btn6w'>Finalize Purchase</button>
  </div>
    
    <img src={po} alt="" />
    </div>:
<>
<div className="formdata formdatax">
   
      <select name="" id=""
      >
  
          <option value="abl"> Allied Bank</option>
          <option value="abl"> United Bank</option>
          <option value="abl"> Grand Bank</option>
      </select>
     
     
     <input type="text" placeholder='Starting date' />
     <input type="text" placeholder='Ending date' />
   
  
  <button className='btn7w'>Search</button>
  </div>
<div className="searchbar" style={{marginTop:'0px'}}>
    <div className="searchin">

    <input type="text" placeholder='Search' />
    <div className="btnsearch">
<IoSearchSharp />
    </div>
    </div>
   
  </div>

 <div className="bodysales">
    
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
</>
 }
 </>
 :
 <>
 <div className="selects">
    <button className={`${i===0?"":"light"}`}  onClick={e=>seti(0)}>Billing</button>
    <button className={`${i===1?"":"light"}`}  onClick={e=>seti(1)}>My tax information</button>
 </div>
 {i===0?
  <div className="bodysales2">
  <div className="formdata">
    <h3>Tax information</h3>
      <p>Company name / Name</p>
    
    <input type="text" placeholder='Name' />
      <p>RFC</p>
  <input type="text" placeholder='RFC' />
      <p>Telephone</p>
   <input type="text" placeholder='+02321312321' />
      <p>Use of CFDI</p>
   <input type="text" />
     <p>Feescal deedule</p>
     <div className="imgup">
      <input type="file" />
      <p>Upload Image</p>
  
     </div>
  
  <p>List of emails</p>
  <textarea name="" id="" cols="30" rows="10"></textarea>
  <h3>Fiscal Address</h3>
  <p>Street</p>
  <input type="text" placeholder='0' />
  <div className="parentin">
    <div className="subparentin">
        <p>External number</p>
        <input type="text" placeholder='number' />
    </div> <div className="subparentin">
        <p>Inner number</p>
        <input type="text" placeholder='number' />
    </div>
  </div>  <div className="parentin">
    <div className="subparentin">
        <p>Corogne</p>
        <input type="text" placeholder='number' />
    </div> <div className="subparentin">
        <p>City</p>
        <input type="text" placeholder='number' />
    </div>
  </div>
  <div className="parentin">
    <div className="subparentin">
        <p>Muncipility</p>
        <input type="text" placeholder='number' />
    </div> <div className="subparentin">
        <p>Status</p>
        <input type="text" placeholder='number' />
    </div>
  </div>
  <div className="parentin">
    <div className="subparentin">
        <p>Nation</p>
        <input type="text" placeholder='number' />
    </div> <div className="subparentin">
        <p>Postal Code</p>
        <input type="text" placeholder='number' />
    </div>
  </div>

  <button className='btn6w' style={{marginBottom:'0px'}}>Save Changes</button>
  </div>
    
    <img src={po} alt="" />
    </div>:
<>
<div className="formdata formdatax">
   
      <select name="" id=""
      >
  
          <option value="abl"> Allied Bank</option>
          <option value="abl"> United Bank</option>
          <option value="abl"> Grand Bank</option>
      </select>
     
      <select name="" id=""
      >
  
          <option value="abl"> Status</option>
          <option value="abl"> United Bank</option>
          <option value="abl"> Grand Bank</option>
      </select>
     
     
     <input type="text" placeholder='Starting date' />
     <input type="text" placeholder='Ending date' />
   
  
  <button className='btn7w'>Search</button>
  </div>
<div className="searchbar" style={{marginTop:'0px'}}>
    <div className="searchin">

    <input type="text" placeholder='Search' />
    <div className="btnsearch">
<IoSearchSharp />
    </div>
    </div>
   
  </div>

 <div className="bodysales">
    
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
</>
 }
 </>
 }



  </div>
  )
}

export default Shopping