
import React, { useState } from 'react'
import {FaUserAlt} from 'react-icons/fa'
import {BsCurrencyDollar} from 'react-icons/bs'
import {VscReferences} from 'react-icons/vsc'
import {IoSearchSharp} from 'react-icons/io5'
import po from '../images/po.svg'
const Users = () => {
    const [i, seti] = useState(0)
    const [p, setp] = useState(0)
  return (
   
    <div className="mainb2">
  
  <div className="header">
    <h1>Users</h1>
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
 
 <div className="filtbtns ">
    {p===0?

<button className='btn1w' onClick={e=>setp(0)}>Users</button>:

<button className='btn1w dgray' onClick={e=>setp(0)}>Users</button>

    }

    {p===1?

<button className=' btn5w lgray'  onClick={e=>setp(1)}>Create user</button>
    :

<button className=' btn5w '  onClick={e=>setp(1)}>Create user</button>

    }
  
 </div>

 {p===1?
 <>

<div className="bodysales2">
  <div className="formdata">
    <h3>Access</h3>
      <p>Name</p>
     <input type="text" placeholder='IMEI' />
     <div className="parentin">
    <div className="subparentin">
        <p>user</p>
        <input type="text" placeholder='number' />
    </div> <div className="subparentin">
        <p>Telephone</p>
        <input type="text" placeholder='number' />
    </div>
  </div> 

  <p>Email</p>
        <input type="text" placeholder='number' />
        <h3>Commercial conditions</h3>
  <button className='btn8w btn6w'>Create user</button>
  </div>
    
    <img src={po} alt="" />
    </div>
 </>
 :
 p===0?
 <div className="bodysales">

 <div className="searchbar" style={{marginTop:'20px'}}>
    <div className="searchin">

    <input type="text" placeholder='Search' />
    <div className="btnsearch">
<IoSearchSharp />
    </div>
    </div>
   
  </div>
 <h1>Consult</h1>
 <div className="tablex">
     <div className="tablehead">
     <h3>Customer </h3>
     <h3>Name</h3>
     <h3>Scheme</h3>
     <h3>Profile</h3>
     <h3>Referencce</h3>
     <h3>Commmission</h3>
     <h3>Active</h3>

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
</div>:
 p===2?

 <div className='bodysales2' >
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
</div>
 :
 p===3?
 <>

<div className="bodysales2">
  <div className="formdata">
    <h3>
        Change password
    </h3>
    <h4>The last update of your password was on: 08/05/2023 00:05:38




</h4>
   
      <p>Current Password</p>
     <input type="text" placeholder='password' />

     <p>New Password</p>
     <input type="text" placeholder='password' />
      <p>Confirm Password</p>
     <input type="text" placeholder='password' />  <button className='btn8w btn6w'>Update Password</button>
  </div>
    
    <img src={po} alt="" />
    </div>
 </>:
   <div className="bodysales">
   <h1>Your commissions

</h1>
  
  <div className="formdata formdatax">
    <div className="parentin parentinx">
        <div className="subparentin">
            <p>TAE Commission</p>
            <input type="text" placeholder='0' />
        </div>
    </div>
    <div className="parentin parentinx">
        <div className="subparentin">
            <p>Service Commission</p>
            <input type="text" placeholder='0' />
        </div>
    </div>
    <div className="parentin parentinx">
        <div className="subparentin">
            <p> Commission points</p>
            <input type="text" placeholder='0' />
        </div>
    </div>

  </div>
 </div>
 }



  </div>
  )
}

export default Users