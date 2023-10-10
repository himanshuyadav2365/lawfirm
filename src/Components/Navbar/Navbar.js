import React from 'react'
import styles from './Navbar.module.css'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import Button from '../Button/Button'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Logo/>
        <Menu/>
        <Button/>
    </div>
  )
}

export default Navbar