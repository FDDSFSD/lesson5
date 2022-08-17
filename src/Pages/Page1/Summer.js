import React from 'react'
import { Bt, H1, H2, P1 } from '../../Page1'
import Mask from './img/Mask.jpg'
import styles from './Summer.module.css'

export default function Summer() {
  return (
    <>
      <div className={styles.sumdiv}>
        <H2>Summer Best Offer Flat 50%</H2>
        <H1>Indoor and outdoor Plants</H1>
        <Bt><P1>View more items</P1></Bt>
      </div>
    </>
    
  )
}
