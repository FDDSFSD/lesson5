import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Left from './img/40191 1.png'
import Second from './img/1827 1.png'
import Last from './img/1391 1.png'
import styles from './Controlled.module.css'

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Left}
          alt="First slide"
        />
        <Carousel.Caption>
        <div className={styles.condiv}>
            <div>
                <h1>21, June, 2019</h1>
            </div>
            <p>Suspendisse posuere, 
            diam in bibendum lobortis, turpis ipsum aliquam risus,
            sit amet ...</p>
            <button><p>Read more</p></button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Second}
          alt="Second slide"
        />

        <Carousel.Caption>
        <div className={styles.condiv}>
            <div>
                <h1>21, June, 2019</h1>
            </div>
            <h1>Nullam Ullamcorper Ornare Molestie</h1>
            <p>Suspendisse posuere, diam in bibendum lobortis,
            turpis ipsum aliquam risus, sit amet ...</p>
            <button><p>Read more</p></button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Last}
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className={styles.condiv}>
            <div>
                <h1>21, June, 2019</h1>
            </div>
            <h1>Nullam Ullamcorper Ornare Molestie</h1>
            <p>Suspendisse posuere, diam in bibendum lobortis,
            turpis ipsum aliquam risus, sit amet ...</p>
            <button><p>Read more</p></button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

