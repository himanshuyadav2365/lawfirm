import React from 'react'
import styles from './Review.module.css'
import Jane from "../assets/Jane.png"
import Robert from "../assets/Robert.png"
import Devon from "../assets/Devon.png"
import left from '../assets/leftarrow.png'
import right from '../assets/rightarrow.png'

const Review = () => {
  return (
    <>
        <div className={styles.headingwrapper}>
            <p className={styles.heading}>What says our <br/>happy Clients</p>
            <div className={styles.carouselwrapper}>
                <div className={styles.btn1}>
                    <img src={left} alt="leftarrow"/>
                </div>
                <div className={styles.btn2}>
                    <img src={right} alt="rightarrow"/>
                </div>
            </div>
        </div>
        <div className={styles.wrapper}>
             <div className={styles.card}>
                
                    <img src={Jane} alt="cardprofile photo1" className={styles.img}/>
               
                <h3 className={styles.cardheading}>Jane Cooper</h3>
                <p className={styles.subheading}>Ceo of Hunt</p>
                <p className={styles.cardtext}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia</p>
            </div>
             <div className={styles.card2}>
                <div className={styles.imgcontainer}>
                    <img src={Devon} alt="cardprofile photo2" className={styles.img}/>
                </div>
                <h3 className={styles.cardheading}>Devon Lane</h3>
                <p className={styles.subheading}>Ceo of Hunt</p>
                <p className={styles.cardtext}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia</p> 
            </div>
             <div className={styles.card}>
                <div className={styles.imgcontainer}>
                    <img src={Robert} alt="cardprofile photo3" className={styles.img}/>
                </div>
                <h3 className={styles.cardheading}>Robert Fox</h3>
                <p className={styles.subheading}>Ceo of Hunt</p>
                <p className={styles.cardtext}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia</p>
            </div>
        </div>
    </>   
  )
}

export default Review