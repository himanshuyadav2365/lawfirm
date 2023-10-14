import React from 'react'
import styles from './Faq.module.css'

const Faq = () => {
  return (
    <div>
        <p className={styles.heading}>FAQs</p>
        <div className={styles.wrap}>
            <p className={styles.subhead}>Amet minim mollit non deserunt ullamco est sit <br/>aliqua dolor do amet sint. </p>
            <div className={styles.qnawrapper}>
                <p className={styles.question}>Do I need a personal injury report?</p>
                <p className={styles.subhead}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
                <hr className={styles.line} />
                <div className={styles.qna}>
                    <p className={styles.question}>How much is my case worth?</p>
                    <div className={styles.togglebtn}>+</div>
                </div>
                <hr className={styles.line}/>
                <div className={styles.qna}>
                    <p className={styles.question}>How much is my case worth?</p>
                    <div className={styles.togglebtn}>+</div>
                </div>
                <hr className={styles.line} />
                <div className={styles.qna}>
                    <p className={styles.question}>How much is my case worth?</p>
                    <div className={styles.togglebtn}>+</div>
                </div>

            </div>
        </div>    
    </div>
  )
}

export default Faq