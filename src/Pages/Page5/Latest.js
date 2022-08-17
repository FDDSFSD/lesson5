import React from 'react'
import Left from './img/Left.png'
import Right from './img/Right.png'

export default function Latest() {
  return (
    <>
    <div>
        <img src={Left} alt='left'/>
        <h1>Latest News</h1>
        <img src={Right} alt='right'/>  
    </div>
    <section>
        <div>
            <div>
                <h1>21, June, 2019</h1>
            </div>
            <p>Suspendisse posuere, 
            diam in bibendum lobortis, turpis ipsum aliquam risus,
            sit amet ...</p>
            <button><p>Read more</p></button>
        </div>
        <div>
            <div>
                <h1>21, June, 2019</h1>
            </div>
            <h1>Nullam Ullamcorper Ornare Molestie</h1>
            <p>Suspendisse posuere, diam in bibendum lobortis,
            turpis ipsum aliquam risus, sit amet ...</p>
            <button><p>Read more</p></button>
        </div>
        <div>
            <div>
                <h1>21, June, 2019</h1>
            </div>
            <h1>Nullam Ullamcorper Ornare Molestie</h1>
            <p>Suspendisse posuere, diam in bibendum lobortis,
            turpis ipsum aliquam risus, sit amet ...</p>
            <button><p>Read more</p></button>
        </div>
        
    </section>
    </>
  )
}
