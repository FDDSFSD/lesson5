import React from 'react'
import Group from './img/Group.png'
import Fb from './img/facebook.png'
import Insta from './img/instagram.png'
import Link from './img/linkedin.png'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <> 
    <section>
       <div className={styles.Fdiv}>
          <img src={Group} alt='group'/>
          <h1>PlantCity</h1>
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
    </div>
    <div className={styles.Fdiv1}>
        <h1>Follow Us</h1>
        <div>
            <img src={Fb} alt='fb'/>
            <img src={Insta} alt='insta'/>
            <img src={Link} alt='link'/>
        </div>
    </div>
    </section>
    </>
  )
}
