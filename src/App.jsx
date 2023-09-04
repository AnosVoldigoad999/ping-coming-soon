import './App.css'
import { useState } from 'react'; 
import { PiInstagramLogo } from 'react-icons/pi'
import { RiFacebookFill, RiTwitterFill  } from 'react-icons/ri'
export default function App (){
  const [email, setEmail] = useState('');
  const [emailclass, setEmailClass] = useState('')
  const [spanmess, setSpanMess] = useState('')
  const pattern =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!email.match(pattern)){
      setEmailClass('red')
      setSpanMess('please provide a valid email address')
    } else{
      setEmailClass('')
      setSpanMess('')
    }
  } 
  return <>
  <header><img className="logo" /></header>
  <main>
    <div className="container">
    <h1>We are launching <strong>soon!</strong></h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Subscribe and get notified
      </label>
      <div className='form'>
      <input placeholder='example@email.com' className={emailclass}  type="text" id="email" value={email} onChange={e=>setEmail(e.target.value)}  />
      <button>Notify me</button>
      </div>
    </form>
    <span>{spanmess}</span>
    <br />
    <img className="other" />
    </div>
  </main>
  <footer>
    <div className='icons'>
      <RiFacebookFill className='icon' />
      <RiTwitterFill className='icon' />
      <PiInstagramLogo className='icon' />
    </div>
    <p> ©Copyright Ping. All rights reserved</p>
  </footer>
  </>
}