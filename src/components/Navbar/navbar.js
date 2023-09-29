import React, { useState } from 'react';
import './navbar.css';
import contactImg from '../../assets/contact.png';
import {Link} from 'react-scroll';
import menu from '../../assets/menu.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
      <Link to='intro' smooth={true} offset={-100} duration={500}><h1>Swaraj</h1></Link>
      <div className='DesktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenuListItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopmenuListItem'>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopmenuListItem'>Projects</Link>
      </div>
      <button className='desktopMenuBtn'onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={contactImg} alt='Contact me' className='desktopMenuImg' />
        Contact Me 
      </button>

      <img src={menu} alt='Menu' className='mobMenu' onClick={()=>{
        setShowMenu(!showMenu)
      }}/>
      <div className='navMenu' style={{display: showMenu ? 'flex' : 'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>{
          setShowMenu(false)
        }}> Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'  onClick={()=>{
          setShowMenu(false)
        }}>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'  onClick={()=>{
          setShowMenu(false)
        }}>Projects</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'  onClick={()=>{
          setShowMenu(false)
        }}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar