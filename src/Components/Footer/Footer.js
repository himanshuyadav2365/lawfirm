import React from 'react'
import styles from './Footer.module.css'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import contactus from '../assets/socialmedia.png'

const Footer = () => {
  return (
    <>
        <div className={styles.footer}>
            <Logo/>
            <Menu/>
            <img src={contactus} alt="social media"/>
        </div>
        <div className={styles.copyright}>
            <p>© 2020 Acme. All right reserved.</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
    </div>
    </>
  )
}

export default Footer