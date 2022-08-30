import React from 'react'
import { Bt, H1, H2,Sc } from '../../Page1';
import styles from './Summer.module.css'

export default function Summer() {
  return (
    <>
    <Sc className={styles.scdiv}>
      <div className={styles.sumdiv}>
        <div className={styles.sumdiv1}>
        <H2>Summer Best Offer Flat 50%</H2>
        <H1>Indoor and outdoor Plants</H1>
        <Bt className={styles.btn}>View more items</Bt>
        </div>
        
      </div>
      </Sc>
    </>
    
  )
}
