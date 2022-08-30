import React from 'react'
import { Bt, H3, Img, P1, P3, RecDiv, RecDiv1, RecSp, Sc, Sp1 } from '../../Page1'
import Flower2 from './img/Flower2.png'
import Flower3 from './img/Flower3.png'
import Flower4 from './img/Flower4.png'
import Flower5 from './img/Flower5.png'
import Flower6 from './img/Flower6.png'
import Flower7 from './img/Flower7.png'
import Flower8 from './img/Flower8.png'
import Fl from './img/3 593.svg'
import styles from './Recent.module.css'
import Rating from './BasicRating'
import BasicRating from './BasicRating'



export default function Recent() {
  return (
    <>
    <Sc className={styles.scdiv}>
    <h1 className={styles.rec1}>Recent Arrival</h1>
    <div className={styles.rec2}>
        <h1 className={styles.rec}>Recent Arrival</h1>
        <Img><span className={styles.sp}></span></Img>
        <Img>
        <ul className={styles.uli}>
           <li>Featured Items</li>
           <li>New Arrival</li>
           <li>Best Sellers</li>
        </ul>
        </Img>
    </div>
    <RecDiv1>
    <div className={styles.stldiv}>
        <RecDiv>
            <img src={Fl} alt='Flower' className={styles.Im}/>
            <RecSp></RecSp>
            
        </RecDiv>
        <BasicRating/>
        <H3>Fastest Delivery</H3>
        <P3><Sp1>€104.86</Sp1> €83.89</P3>
    </div>
    <div className={styles.stldiv}>
        <RecDiv><img src={Flower2} alt='Flower2' className={styles.Im}/>
        <RecSp></RecSp>
        </RecDiv>
        <BasicRating/>
        <H3>Exercitat Virginia</H3>
        <P3>€87.00</P3>
    </div>
    <div className={styles.stldiv}>
        <RecDiv><img src={Flower3} alt='Flower3' className={styles.Im}/>
        <RecSp></RecSp></RecDiv>
        <BasicRating/>
        <H3>Accusantium Doloremque</H3>
        <P3>€110.00</P3>
    </div>
    <div className={styles.stldiv}>
        <RecDiv><img src={Flower4} alt='Flower4' className={styles.Im}/>
        <RecSp></RecSp></RecDiv>
        <BasicRating/>
        <H3>Voluptas Assumenda</H3>
        <P3>€78.00</P3>
    </div>
    </RecDiv1>
    <RecDiv1>
    <div className={styles.stldiv}>
        <RecDiv><img src={Flower5} alt='Flower5' className={styles.Im}/>
        <RecSp></RecSp>
        </RecDiv>
        <BasicRating/>
        <H3>Nostrud Exercitation</H3>
        <P3><Sp1>€104.86</Sp1> €83.89</P3>
    </div>
    <div className={styles.stldiv}>
        <RecDiv><img src={Flower6} alt='Flower6' className={styles.Im}/>
        <RecSp></RecSp></RecDiv>
        <BasicRating/>
        <H3>Commodi Consequatur</H3>
        <P3>€85.00</P3>
    </div>
    <div className={styles.stldiv}>
        <RecDiv><img src={Flower7} alt='Flower7' className={styles.Im}/>
        <RecSp></RecSp></RecDiv>
        <BasicRating/>
        <H3>Praesentium Voluptatum</H3>
        <P3><Sp1>€104.86</Sp1> €83.89</P3>
    </div>
    <div className={styles.stldiv}>
        <RecDiv><img src={Flower8} alt='Flower8' className={styles.Im}/>
        <RecSp></RecSp>
        </RecDiv>
        <BasicRating/>
        <H3>Voluptates Repudiandae</H3>
        <P3>€105.00</P3>
    </div>
    </RecDiv1>
     <Img><Bt className={styles.btn}>All Products</Bt></Img>
     </Sc>
    </>
  )
}
