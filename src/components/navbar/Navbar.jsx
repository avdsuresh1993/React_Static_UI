import React from 'react'
import styles from './Navbar.module.css'
import {AiOutlineMenu,AiOutlineClose,AiOutlineSearch,AiOutlineUser} from 'react-icons/ai'
import logo from "../../assets/images/logo.png"

export const Navbar = () => {
  return (
    <header className={styles.navbar}>
        <img src={logo} alt="navbar logo" />
        <nav>
            <ul className={styles.menu}>
                <li><a href="">Learn More</a></li>
                <li><a href="">Login</a></li>
                <li><a href="">Sign up</a></li>
                <li><AiOutlineSearch size={25} style={{marginTop:'15px'}}/></li>
                <li><AiOutlineUser size={25} style={{marginTop:'15px'}}/></li>
            </ul>
        </nav>
            <div className={styles.mobile_btn}>
                <AiOutlineMenu size={30}/>
            </div>
    </header>
  )
}

