import React from 'react'
import styles from './AreaofInterest.module.css'
import buisness from '../assets/Buissneess.png'
import landlord from '../assets/landlord.png'
import buisness1 from '../assets/buisness1.png'
import partnership from '../assets/partnership.png'
import realestate from '../assets/realestate.png'
import elder from '../assets/elderabuse.png'

const AreaofInterest = () => {
  return (<>
      <p className={styles.heading}>Area of Practices</p>
    <div className={styles.wrapper}>
        <div className={styles.lg}>
            <img src={buisness}/>
            <p>BUISNESS LAW</p>
        </div>
        <div className={styles.md}>
            <img src={partnership}/>
            <p>Partnership LAW</p>
        </div>
        <div className={styles.md} >
            <img src={realestate}/>
            <p>REAL ESTATE LAW</p>
        </div>
        <div className={styles.lg}>
            <img src={buisness1}/>
            <p>Buisness Disputes</p>
        </div>
        <div className={styles.lg}>
            <img src={landlord}/>
            <p>LANDLORD DISPUTES</p>
        </div>
        <div className={styles.md}>
            <img src={elder}/>
            <p>ELDER ABUSE</p>
        </div>     
    </div>
    </>
  )
}

export default AreaofInterest