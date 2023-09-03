import './App.css'
import { useState } from 'react'; 
import { PiInstagramLogo } from 'react-icons/pi'
import { RiFacebookFill, RiTwitterFill  } from 'react-icons/ri'
import { useForm } from 'react-hook-form'
export default function App (){
  const [email, setEmail] = useState('');
 
  return <>
  <header><img className="logo" /></header>
  <main>
    <div className="container">
    <h1>We are launching <strong>soon!</strong></h1>
    <form onSubmit={(e)=>e.preventDefault()}>
      <label htmlFor="email">
        Subscribe and get notified
      </label>
      <div className='form'>
      <input required='true' minLength={4}  placeholder='example@email.com'  type="email" id="email"  />
      <button>Notify me</button>
      </div>
    </form>
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