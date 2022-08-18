import React from 'react'
import Vect1 from './img/smile.svg'
import Vect2 from './img/Vect2.png'
import Vect3 from './img/Vect3.png'
import Vect4 from './img/Vect4.png'
import styles from './Best.module.css'
import { H1, Img, Sc } from '../../Page1'
import Best1 from './Best1'
import Best2 from './Best2'
import Best3 from './Best3'
import Best4 from './Best4'


export default function Best() {
  return (
    <>
    <Sc className={styles.scdiv}>
    <div className={styles.Bdiv1}>
    
        <div>
           <H1 >Best Offers & Online Shopping Sale!</H1>
           <p className={styles.Bp}>Get Deals & Discounts Across 30+ Categories Every Day Only Royallook!</p>
        </div>
        <button className={styles.btn}>Get More Offers</button>
    </div>
    <div className={styles.sumdiv}>
    <div className={styles.sumdiv1}>
        <h1 className={styles.Bh1}>Why Choose Us?</h1>
        <Img><span className={styles.sp}></span></Img>
        <div className={styles.Bdiv}>
            <div >
                <img src={Vect1} alt='vector1' className={styles.img}/>
                <Best1 />
                <h3 className={styles.sm}>Customer</h3>
            </div>
            <div>
                <img src={Vect2} alt='vector2' className={styles.img}/>
                <Best2/>
                <h3 className={styles.sm}> Plants</h3>
            </div>
            <div>
                <img src={Vect3} alt='vector3' className={styles.img}/>
                <Best3/>
                <h3 className={styles.sm}>Services</h3>
            </div>
            <div>
                <img src={Vect4} alt='vector4' className={styles.img}/>
                <Best4/>
                <h3 className={styles.sm}>Accessories</h3>
            </div>
        </div>
        </div>
    </div>
    </Sc>
    </>
  )
}
