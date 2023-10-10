import React from 'react'
import styles from './Hero.module.css'
import heroimage from '../assets/Heroimage.png'
import { Email } from './Email/Email'

const Hero = () => {
  return (
    <div className={styles.firstpage}>
        <div className={styles.intro}>
            <p className={styles.intro1}>You don’t have to <br/><span className={styles.intro2}>Fight them Alone.</span></p>
            <p className={styles.intro3}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
            <Email/>
        </div>
        <img src={heroimage} alt="hero" className={styles.hero}/>
    </div>
  )
}

export default Hero