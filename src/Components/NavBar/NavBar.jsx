//styles
import './NavBar.css'

import { MdOutlineTravelExplore } from 'react-icons/md'


function NavBar() {
  return (
    <>
      <section className='navBarSection'> 
        <header className='header flex'>
          <div className='logoDiv'>
            <a href="#" className='logo flex'>
              <h1> <MdOutlineTravelExplore className='icon'/> Travel.</h1>
            </a>
          </div>
          <div className='navBar'>
            <ul className="navList flex">
              <li className="navitem">
                <a href="#" className='navLink'>Home</a>
              </li>
              <li className="navitem">
                <a href="#" className='navLink'>Packages</a>
              </li>
              <li className="navitem">
                <a href="#" className='navLink'>Shop</a>
              </li>
              <li className="navitem">
                <a href="#" className='navLink'>About</a>
              </li>
              <li className="navitem">
                <a href="#" className='navLink'>Pages</a>
              </li>
              <li className="navitem">
                <a href="#" className='navLink'>News</a>
              </li>
              <li className="navitem">
                <a href="#" className='navLink'>Contact</a>
              </li>
            </ul>
          </div>
        </header>
      </section>
    </>
  )
}

export default NavBar