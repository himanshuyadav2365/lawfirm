import React from 'react'
import styles from './Logo.module.css'
import logo from '../assets/logo.png'

const Logo = () => {
  return (
    <div className={styles.heading}>
    <img src={logo} alt="logo" className={styles.logo}/>
    <h1 className={styles.text}>IGSTUDIO</h1>
    </div>
  )
}

export default Logo