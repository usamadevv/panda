
import React, { useState } from 'react'
import {FaUserAlt} from 'react-icons/fa'
import {BsCurrencyDollar} from 'react-icons/bs'
import {VscReferences} from 'react-icons/vsc'
import {IoSearchSharp} from 'react-icons/io5'
import abc from '../images/abc.jpeg'
import abc2 from '../images/abc2.jpeg'
import po from '../images/po.svg'
const Ads = () => {
    const [i, seti] = useState(0)
    const [p, setp] = useState(0)
  return (
   
    <div className="mainb2">
  
  <div className="header">
    <h1>Activation</h1>
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
 
 <div className="filtbtns filtbtnx">
    {p===0?

<button className='btn1w' onClick={e=>setp(0)}>Advertisement</button>:

<button className='btn1w dgray' onClick={e=>setp(0)}>Advertisement</button>

    }

    {p===1?

<button className=' btn5w lgray'  onClick={e=>setp(1)}>Manual</button>
    :

<button className=' btn5w '  onClick={e=>setp(1)}>Manual</button>

    }
    {p===2?
    
<button className='btn2w btn5w lgray'  onClick={e=>setp(2)}>videos</button>
    :


<button className='btn2w btn5w'  onClick={e=>setp(2)}>videos</button>
    }
 </div>

 {p===0?
 <>

<div className="bodysales2">
  
    <div className="imgtab">

<img src={abc} alt="" />

    </div>    <div className="imgtab">

<img src={abc2} alt="" />

    </div>    <div className="imgtab">

<img src={abc} alt="" />

    </div>    <div className="imgtab">

<img src={abc2} alt="" />

    </div>
    </div>
 </>
 :p===1?
 <>

<div className="bodysales2">
  <div className="formdata">
    <h4>Check the status of your company change

</h4>
    <h5>Write down your phone number to check your current status

</h5>
      <p>Your current phone number</p>
     <input type="text" placeholder='IMEI' />
  <button className='btn8w btn6w'>Cosnult IMEI</button>
  </div>
    
    <img src={po} alt="" />
    </div>
 </>: <>

<div className="bodysales2">
  <div className="formdata">
    <h4>Cancel process



</h4>
    <h5>You can cancel the process by sending your phone number.



</h5>
      <p>Telephone number</p>
     <input type="text" placeholder='IMEI' />
  <button className='btn8w btn6w'>Cosnult IMEI</button>
  </div>
    
    <img src={po} alt="" />
    </div>
 </>
 }



  </div>
  )
}

export default Ads