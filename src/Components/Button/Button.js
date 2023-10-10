import React from 'react'
import styles from './Button.module.css'

const Button = ({children}) => {
  return (
    <button className={styles.btn}>Contact Now</button>
  )
}

export default Button