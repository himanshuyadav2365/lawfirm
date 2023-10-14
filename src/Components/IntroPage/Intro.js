import React from 'react'
import styles from './Intro.module.css'
import cardimg from '../assets/card-image.png'

const Intro = () => {
  return (<>
            <div className={styles.intro}>
                <p className={styles.left}>Let’s Introduce <br/>Ourself</p>
                <div className={styles.verticalline}>
                </div>
                <div>
                    <p className={styles.rightheading}>Criminal Lawyer</p>
                    <p className={styles.rightcontent}>Amet minim mollit non deserunt ullamco est <br/> sit aliqua dolor do amet sint. Velit officia consequatduis <br/>enim velit mollit Exercitation.</p>
                </div>
            </div>     

        <div className={styles.whychooseus}>
           <p className={styles.text}>Why Choose us?</p> 
            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <div className={styles.imgcontainer}>
                        <img src={cardimg} alt="cardprofile photo" className={styles.img}/>
                    </div>
                    <h3 className={styles.cardheading}>98% Success Rate</h3>
                    <p className={styles.cardtext}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
                    <button className={styles.btn}>Read more</button>
                </div>
                <div className={styles.card}>
                    <div className={styles.imgcontainer}>
                        <img src={cardimg} alt="cardprofile photo" className={styles.img}/>
                    </div>
                    <h3 className={styles.cardheading}>100% Success Rate</h3>
                    <p className={styles.cardtext}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
                    <button className={styles.btn}>Read more</button>
                </div>
                <div className={styles.card}>
                    <div className={styles.imgcontainer}>
                        <img src={cardimg} alt="cardprofile photo" className={styles.img}/>
                    </div>
                    <h3 className={styles.cardheading}>100% Success Rate</h3>
                    <p className={styles.cardtext}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
                    <button className={styles.btn}>Read more</button>
                </div>
            </div>
        </div>
    </>    
  
  )
}

export default Intro