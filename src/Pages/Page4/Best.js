import React from 'react'
import Vect1 from './img/Vect1.png'
import Vect2 from './img/Vect2.png'
import Vect3 from './img/Vect3.png'
import Vect4 from './img/Vect4.png'
import styles from './Best.module.css'
import { H1, Img } from '../../Page1'

export default function Best() {
  return (
    <>
    <div className={styles.Bdiv1}>
        <div>
           <H1 >Best Offers & Online Shopping Sale!</H1>
           <p className={styles.Bp}>Get Deals & Discounts Across 30+ Categories Every Day Only Royallook!</p>
        </div>
        <button><p>Get More Offers</p></button>
    </div>
    <div>
        <h1 className={styles.Bh1}>Why Choose Us?</h1>
        <Img><span className={styles.sp}></span></Img>
        <div className={styles.Bdiv}>
            <div >
                <img src={Vect1} alt='vector1'/>
                <h2>d</h2>
                <h3>Customer</h3>
            </div>
            <div>
                <img src={Vect2} alt='vector2'/>
                <h2>d</h2>
                <h3> Plants</h3>
            </div>
            <div>
                <img src={Vect3} alt='vector3'/>
                <h2>d</h2>
                <h3>Services</h3>
            </div>
            <div>
                <img src={Vect4} alt='vector4'/>
                <h2>d</h2>
                <h3>Accessories</h3>
            </div>
        </div>
    </div>
    </>
  )
}
