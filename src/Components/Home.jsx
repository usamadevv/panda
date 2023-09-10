import React, { useState } from 'react'
import {AiFillHome} from 'react-icons/ai'
import {BsStack} from 'react-icons/bs'
import {BiDollar} from 'react-icons/bi'
import './Home.css'
import {FaSimCard} from 'react-icons/fa'
import card from '../images/card.jpeg'
import Sales from './Sales'
import Balance from './Balance'
import Inventory from './Inventory'
import Product from './Product'
import Shopping from './Shopping'
import {FaShoppingBag,FaBullhorn,FaUserAlt} from 'react-icons/fa'
import {FaLuggageCart} from 'react-icons/fa'
import {HiUsers} from 'react-icons/hi'
import Port from './Port'
import kk from '../images/kk.png'
import Profile from './Profile'
import {BiMobileVibration} from 'react-icons/bi'
import Users from './Users'
import Activation from './Activation'
import {MdOutlineSimCard} from 'react-icons/md'
import Ads from './Ads'
const Home = () => {
  const [selected, setselected] = useState(0)
  return (
   <div className="home">
    <div className="sideb">
      <div className="tab">
        <img src={kk} alt="" />
      </div>
<div className="tab" onClick={e=>setselected(0)}>
<AiFillHome className='icon' />
Home
</div><div className="tab" onClick={e=>setselected(1)}>
<BsStack className='icon'  />
Sales
</div>
<div className="tab" onClick={e=>setselected(2)}>
<BiDollar className='icon' />
Balances
</div>
<div className="tab" onClick={e=>setselected(3)}>
<FaSimCard className='icon' />
Sim inventory
</div>
<div className="tab"  onClick={e=>setselected(4)}>
<FaLuggageCart className='icon' />
Product Inventory
</div>
<div className="tab"  onClick={e=>setselected(5)}>
<FaShoppingBag className='icon' />
Shopping
</div>
<div className="tab"  onClick={e=>setselected(6)}>
<BiMobileVibration className='icon' />
Portablility
</div>
<div className="tab"  onClick={e=>setselected(7)}>
<FaUserAlt className='icon' />
Profile
</div>
<div className="tab"  onClick={e=>setselected(8)}>
<HiUsers className='icon' />
Users
</div><div className="tab"  onClick={e=>setselected(9)}>
<MdOutlineSimCard className='icon' />
Activation
</div>

<div className="tab"  onClick={e=>setselected(10)}>
<FaBullhorn className='icon' />
Advertising and manuals
</div>




<div className="tab"  onClick={e=>setselected(99)}>
<BsStack className='icon' />
Logout
</div>
    </div>
  {selected===0?
   <div className="mainb">
   <div className="imgside">
   <img src={card} alt="" />

   <h1>Banks</h1>
     <p>Here you will find the bank references</p>
   </div>
   <div className="adside">

   </div>

 </div>:
 selected===1?
 <Sales />:
 selected===2?
 <Balance />
 :selected===3?<Inventory />
:selected===4?
<Product />
:selected===5?<Shopping />:
selected===6?
<Port/>

:
selected===7?
<Profile />
:selected===8?<Users />
:selected===9?<Activation />
:
<Ads />
  }
   </div>
  )
}

export default Home