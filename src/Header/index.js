import React from 'react'
import { Link } from 'react-router-dom'
import Group from './img/Group.png'
import Search from './img/Search.png'
import Vector from './img/Vector.png'
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
        <Link to='/green'>Green Plant</Link>
        <Link to='/gift'>Gift Plant</Link>
        <Link to='/indoor'>Indoor Plants</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/more'>More</Link>
        <div><BsSearch className={styles.icondiv}/></div>
        <div><AiOutlineUser className={styles.icondiv}/></div> 
        <div className={styles.icondiv2} ><AiOutlineShoppingCart className={styles.icondiv}/></div>
        </ul>
        
    </nav>
    </header>
    </Sc>
  )
}