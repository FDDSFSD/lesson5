import React from 'react'
import One from './img/One.png'
import Two from './img/Two.png'
import Three from './img/Three.png'
import Four from './img/Four.png'
import styles from './Second.module.css'
import { H3, Img, P2 } from '../../Page1'

export default function Second() {
  return (
    <>
    <section className={styles.section1}>
    <div>
      <Img><img src={One} alt='one' className={styles.images}/></Img>
        <H3>Fastest Delivery</H3>
        <P2>Apply on order over on $159</P2>
    </div>
    <div>
      <Img><img src={Two} alt='two' className={styles.images}/></Img>
        <H3>Return Exchange</H3>
        <P2>100% Moneyback Guarantee</P2>
    </div>
    <div>
      <Img><img src={Three} alt='three' className={styles.images}/></Img>
        <H3>Customer Center</H3>
        <P2>24/7 Online Solution</P2>
    </div>
    <div>
      <Img><img src={Four} alt='four' className={styles.images}/></Img>  
        <H3>Quality Support</H3>
        <P2>Online Feedback 24/7</P2>
    </div>
    </section>
    </>
  )
}
