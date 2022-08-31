import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Group from './img/Group.png'
import styles from './Index.module.css';
import { BsSearch } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Sc } from '../Page1'


export default function Header() {
  const [open, setOpen] = useState();

  const Toggle = () => {
    setOpen(!open);
  }
  return (
    <Sc>
      <header className={styles.Id}>
        <div className={styles.container}>
          <div className={styles.plantdiv}>
            <img src={Group} alt='group' />
            <h1 className={styles.planth}>PlantCity</h1>
          </div>
          <div className={styles.btn} onClick={() => { Toggle() }}>
            <FaBars />
          </div>
          <nav className={`${styles.nv} ${open ? styles.active : ''}`}>
            <ul className={styles.uli}>
               <div className={styles.minContainer}>
               <Link to='/green' className={styles.linka}>Green Plant</Link>
              <Link to='/gift' className={styles.linka}>Gift Plant</Link>
              <Link to='/indoor' className={styles.linka}>Indoor Plants</Link>
              <Link to='/blog' className={styles.linka}>Blog</Link>
              <Link to='/more' className={styles.linka}>More</Link>
               </div>
              <div className={styles.iconsContainer}>
                <div><BsSearch className={styles.icondiv} /></div>
                <div><AiOutlineUser className={styles.icondiv} /></div>
                <div className={styles.icondiv2} ><AiOutlineShoppingCart className={styles.icondiv} /></div>
              </div>
            </ul>

          </nav>
        </div>
      </header>
    </Sc>
  )
}