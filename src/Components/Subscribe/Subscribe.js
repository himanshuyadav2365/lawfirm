import React from 'react'
import styles from './Subscribe.module.css'

const Subscribe = () => {
  return (
    <div className={styles.subscribe}>
        <p className={styles.title}>Subscribe Our Newsletter</p>
        <div className={styles.wrapper}>
            <input placeholder='Name :'  className={styles.input}/>
            <input placeholder='Enter your Email' className={styles.input}/>
            <button className={styles.btn}>SEND</button>
        </div>
    </div>
  )
}

export default Subscribe