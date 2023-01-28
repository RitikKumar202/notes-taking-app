import React, { useState } from 'react';

// Styled Components
import { BiMenu } from 'react-icons/bi';

// Custom Components
import SearchBar from '../Search/SearchBar';

// Link for linking to other page
import { Link } from 'react-router-dom';

// Assets
import Logo from '../../assets/logo192.png';

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div>
        <div className='header'>
          <div className='brand'>
            <BiMenu
              className='menu-icon'
              onClick={() => setShow(!show)}
              size={25}
            />
            <img src={Logo} alt='Logo' />
            <h4>Notes Taking App</h4>
          </div>
          <div className='search-bar'>
            <SearchBar />
          </div>
        </div>

        <div
          className='mobile-menu'
          style={{ display: show ? 'block' : 'none' }}
        >
          <Link className='menu-item' to='/'>
            Notes
          </Link>
          <Link className='menu-item' to='/archieve'>
            Archive
          </Link>
          <Link className='menu-item' to='/bin'>
            Bin
          </Link>
        </div>
        <div className='mobile-search'>
          <SearchBar />
        </div>
      </div>

      <nav className='nav__cont'>
        <ul className='nav'>
          <Link to='/'>
            <li className='nav__items '>
              <i className='fas fa-lightbulb'></i>
              <p>Notes</p>
            </li>
          </Link>
          <Link to='/archieve'>
            <li className='nav__items '>
              <i className='fas fa-archive'></i>
              <p>Archive</p>
            </li>
          </Link>
          <Link to='/bin'>
            <li className='nav__items '>
              <i className='far fa-trash-alt'></i>
              <p>Bin</p>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
