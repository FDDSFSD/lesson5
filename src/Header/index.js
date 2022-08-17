import React from 'react'
// import { Link } from 'react-router-dom'
import Group from './img/Group.png'
import Search from './img/Search.png'
import Vector from './img/Vector.png'
import styles from './Index.module.css'

export default function Header() {
    
  return (
    <header className={styles.Id}>
        <div style={{display:`flex`}}>
            <img src={Group} alt='group'/>
            <h1>PlantCity</h1>
        </div>
    <nav>
        <ul>
        {/* <Link to='/'>Green Plant</Link>
        <Link to='/gift'>Gift Plant</Link>
        <Link to='/indoor'>Indoor Plants</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/more'>More</Link> */}
        <img src={Search} alt='search'/>
        <img src={Vector} alt='vector'/>
        </ul>
    </nav>
    </header>
  )
}