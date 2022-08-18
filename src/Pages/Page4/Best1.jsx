import React from "react";
import AnimatedNumbers from "react-animated-numbers";
import styles from './Best.module.css'


export default function Best1() {
  const [num, setNum] = React.useState(4863);
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
        <button onClick={() => setNum((state) => state + 1)} 
        className={styles.numbtn}>+</button>
       
      </div>
    </div>
    </section>
    </>
  );
}
