import React from 'react'
import { Link } from 'react-router-dom'
import Group from './img/Group.png'
import styles from './Index.module.css';
import { BsSearch} from 'react-icons/bs'
import { AiOutlineUser} from 'react-icons/ai'
import { AiOutlineShoppingCart} from 'react-icons/ai'
import { Sc } from '../Page1'


export default function Header() {
    
  return (
    <Sc>
    <header className={styles.Id}>
        <div className={styles.plantdiv}>
            <img src={Group} alt='group'/>
            <h1 className={styles.planth}>PlantCity</h1>
        </div>
    <nav className={styles.nv}>
        <ul className={styles.uli}>
        <Link to='/green' className={styles.linka}>Green Plant</Link>
        <Link to='/gift' className={styles.linka}>Gift Plant</Link>
        <Link to='/indoor' className={styles.linka}>Indoor Plants</Link>
        <Link to='/blog'className={styles.linka}>Blog</Link>
        <Link to='/more' className={styles.linka}>More</Link>
        <div><BsSearch className={styles.icondiv}/></div>
        <div><AiOutlineUser className={styles.icondiv}/></div> 
        <div className={styles.icondiv2} ><AiOutlineShoppingCart className={styles.icondiv}/></div>
        </ul>
        
    </nav>
    </header>
    </Sc>
  )
}