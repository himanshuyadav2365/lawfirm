import React from 'react'
import styles from './email.module.css'

export const Email = () => {
  return (
    <div className={styles.email}>

        <input className={styles.input} placeholder='Enter your email address'/>
        <button className={styles.btn}>Let's Talk</button>
        
    </div>
  )
}
