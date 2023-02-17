import React, {useState} from 'react';
import './NavBar.css'

function NavBar() {
  const [hamburgerIsOpen, sethamburgerIsOpen] = useState(true);

  const onHamburgerChange = () => {
    hamburgerIsOpen ? sethamburgerIsOpen(false): sethamburgerIsOpen(true);
  };

  return(
    <div className='navbar'>
        <div className='hamburger'>
          <div className='list-icon' onClick={onHamburgerChange}>
            <div className={`${hamburgerIsOpen ? 'hamburger-opened  bar1' : 'hamburger-closed bar1'}`}></div>
            <div className={`${hamburgerIsOpen ? 'hamburger-opened  bar2' : 'hamburger-closed bar2'}`}></div>
            <div className={`${hamburgerIsOpen ? 'hamburger-opened  bar3' : 'hamburger-closed bar3'}`}></div>
          </div>
          {/* <div className={`${hamburgerIsOpen ? 'hamburger-opened' : 'hamburger-closed'}`}></div> */}
        </div>
    </div>
  )
}

export default NavBar;