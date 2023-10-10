import React from 'react'
import styles from './Intro.module.css'

const Intro = () => {
  return (
    <div className={styles.intro}>
        <p className={styles.left}>Let’s Introduce <br/>Ourself</p>
        <div className={styles.verticalline}></div>
        <div>
        <p className={styles.rightheading}>Criminal Lawyer</p>
        <p className={styles.rightcontent}>Amet minim mollit non deserunt ullamco est <br/> sit aliqua dolor do amet sint. Velit officia consequatduis <br/>enim velit mollit Exercitation.</p>
        </div>


    </div>
  )
}

export default Intro