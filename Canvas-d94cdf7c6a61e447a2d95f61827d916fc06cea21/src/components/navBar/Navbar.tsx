import  React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { BiHome } from "react-icons/bi";
import { RiGalleryLine } from "react-icons/ri";
import { MdCall } from "react-icons/md";
import { GiBasket } from "react-icons/gi";
import Item from './item';


function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
        <Item path="/Home" children={BiHome} title="Main" />
        <Item path="/Gallery" children={RiGalleryLine} title="Gallery" />
        <Item path="/Contacts" children={MdCall} title="Contacts" />
        <Item path="/Basket" children={GiBasket} title="Basket"  />
        </ul>
      </nav>
    </>
  );
}

export default React.memo(Navbar)