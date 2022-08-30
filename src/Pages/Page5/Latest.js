import React from 'react'
import { Sc } from '../../Page1'
import ControlledCarousel from './ControlledCarousel';
import styles from './Controlled.module.css'

export default function Latest() {
  return (
    <>
    <Sc className={styles.scdiv}>
    <ControlledCarousel/>
    </Sc>
    
    </>
  )
}
