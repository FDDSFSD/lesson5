import React from 'react'
import Group from './img/Group.png'
import styles from './Footer.module.css'
import { ImFacebook} from 'react-icons/im'
import {FiInstagram} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'
import { Sc } from '../Page1'
export default function Footer() {
  return (
    <> 
    <Sc className={styles.scdiv}>
       <div className={styles.Fdiv}>
          <img src={Group} alt='group'/>
          <h1 className={styles.plh}>PlantCity</h1>
       </div>
    <div className={styles.Ft}>
       <ul>
        <h1>Products</h1>
        <li>Prices drop</li>
        <li>New products</li>
        <li>Best sales</li>
        <li>Contact us</li>
        <li>Sitemap</li>
       </ul>
       <ul>
        <h1>Shop</h1>
        <li>Best Selleres</li>
        <li>Succulents</li>
        <li>Variety Packs</li>
        <li>Subscription Box</li>
       </ul>
       <ul>
        <h1>Need Help?</h1>
        <li>Shipping & Returns</li>
        <li>Affiliate Program</li>
        <li>Privacy Policy</li>
        <li>Copyright Policy</li>
        <li>Terms of Use</li>
       </ul>
       <ul>
        <h1>Contact us</h1>
        <li>sales@plantcity.com</li>
        <li>www.plantcity.com</li>
        <li>+374 77 897 564 987</li>
       </ul>
       <ul className={styles.ul1}>
         <h1>Join us</h1>
         <a href="#" className={styles.a}>Get first access to sales 
         and new products</a>
         <input  type="email" placeholder='Enter your Email'/>
         <button className={styles.btn}>Submit</button>

       </ul>
    </div>
    <div className={styles.Fdiv1}>
        <h1>Follow Us</h1>
        <div className={styles.fbdiv}>
          <div className={styles.fb1div}>
            <a href='https://www.facebook.com/'><ImFacebook className={styles.instadiv}/></a>
            <a href='https://www.instagram.com/'><FiInstagram className={styles.instadiv}/></a>
            <a href='https://www.linkedin.com/'><FaLinkedinIn className={styles.instadiv}/></a>
            </div>
        </div>
    </div>
    </Sc>
    </>
  )
}
