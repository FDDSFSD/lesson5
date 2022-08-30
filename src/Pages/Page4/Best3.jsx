import React from "react";
import AnimatedNumbers from "react-animated-numbers";
import styles from './Best.module.css'


export default function Best3() {
  const num = 302;
  return (
    <>
    <section className={styles.Best1}>
    <div className="container" style={{display:"flex" ,color:'white'}}>
      <AnimatedNumbers
        includeComma
        animateToNumber={num}
        fontStyle={{ fontSize: 40 }}
        configs={[
          { mass: 1, tension: 220, friction: 100 },
          { mass: 1, tension: 180, friction: 130 },
          { mass: 1, tension: 280, friction: 90 },
          { mass: 1, tension: 180, friction: 135 },
          { mass: 1, tension: 260, friction: 100 },
          { mass: 1, tension: 210, friction: 180 },
        ]}
      ></AnimatedNumbers>
      <div>
      <h2 className={styles.ph}>+</h2>
       
      </div>
    </div>
    </section>
    </>
  );
}
