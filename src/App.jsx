import './App.css'
import { PiTwitterLogoThin, PiFacebookLogoThin, PiInstagramLogoThin } from 'react-icons/pi'

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
      <input type="email" id="email" />
    </form>
    <br />
    <img className="other" />
    </div>
  </main>
  <footer>
    <div className='icons'>
      <PiFacebookLogoThin className='icon' />
      <PiTwitterLogoThin className='icon' />
      <PiInstagramLogoThin className='icon' />
    </div>
    <p> Copyright Ping. All rights reserved</p>
  </footer>
  </>
}