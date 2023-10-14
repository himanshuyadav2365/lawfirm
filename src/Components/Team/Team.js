import React from 'react'
import styles from './Team.module.css'
import Daniel from '../assets/daniel.png'
import Sanfole from '../assets/sanfole.png'
import Cesforila from '../assets/cesfrollia.png'
import Collen from '../assets/collen.png'
import Haldone from '../assets/haldone.png'
import Nik from '../assets/nik.png'

const Team = () => {
  return (
    <div>
        <h3 className={styles.heading}>Our Team</h3>
        <div className={styles.cardwrapper}>
            <div className={styles.card}>
                <img src={Daniel} alt="daniel" className={styles.img}/>
                <div>
                    <p className={styles.name}>Danial Def</p>
                    <p className={styles.intro}>301 Cases</p>
                </div>
            </div>
            <div className={styles.card2}>
                <img src={Sanfole} alt="sanfole" className={styles.img}/>
                <div>
                    <p className={styles.name}>Sanfole</p>
                    <p className={styles.intro}>850 Cases</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src={Cesforila} alt="cesfrolia" className={styles.img}/>
                <div>
                    <p className={styles.name}>Cesforila</p>
                    <p className={styles.intro}>470 Cases</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src={Collen} alt="Collen" className={styles.img}/>
                <div>
                    <p className={styles.name}>Colleen</p>
                    <p className={styles.intro}>180 Cases</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src={Haldone} alt="haldone" className={styles.img}/>
                <div>
                    <p className={styles.name}>Haldone</p>
                    <p className={styles.intro}>212 Cases</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src={Nik} alt="nik" className={styles.img}/>
                <div>
                    <p className={styles.name}>Nik Jeo</p>
                    <p className={styles.intro}>350 Cases</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team