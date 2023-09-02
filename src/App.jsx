import './App.css'
import { PiInstagramLogo } from 'react-icons/pi'
import { RiFacebookFill, RiTwitterFill  } from 'react-icons/ri'
export default function App (){
  return <>
  <header><img className="logo" /></header>
  <main>
    <div className="container">
    <h1>We are launching <strong>soon!</strong></h1>
    <form>
      <label htmlFor="email">
        Subscribe and get notified
      </label>
      <div className='form'>
      <input placeholder='example@email.com' type="email" id="email" />
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