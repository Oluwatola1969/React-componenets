import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'
import thumbnail1 from '../../assets/images/thumbnail1.png'
import thumbnail2 from '../../assets/images/thumbnail2.png'
import thumbnail3 from '../../assets/images/thumbnail3.png'
import thumbnail4 from '../../assets/images/thumbnail4.png'
import thumbnail5 from '../../assets/images/thumbnail5.png'
import thumbnail6 from '../../assets/images/thumbnail6.png'
import thumbnail7 from '../../assets/images/thumbnail7.png'
import thumbnail8 from '../../assets/images/thumbnail8.png'
import Button from '../button/Button'


const Card = ({subscription, setSubscription}) => {
  return (
    <div className='feed'> 
       <Link to='video/20/324' className="card">
            <img src={thumbnail1} alt="" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <h3>Brenda</h3>
            <p>11.3k views and &bull; 2 weeks ago <Button subscription={subscription} setSubscription={setSubscription} /></p>
            
        </Link>
        <div className="card">
            <img src={thumbnail2} alt="" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, id?</h2>
            <h3>Brenda</h3>
            <p>11.3k views and &bull; 2 days ago <Button subscription={subscription} setSubscription={setSubscription} /></p>
        </div>
        <div className="card">
            <img src={thumbnail3} alt="" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, id?</h2>
            <h3>Brenda</h3>
            <p>11.3k views and &bull; 4 days ago <Button/></p>
        </div>
        <div className="card">
            <img src={thumbnail4} alt="" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, id?</h2>
            <h3>Brenda</h3>
            <p>11.3k views and &bull; 2 months ago <Button/></p>
        </div>
        <div className="card">
            <img src={thumbnail5} alt="" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, id?</h2>
            <h3>Brenda</h3>
            <p>11.3k views and &bull; 2 days ago <Button/></p>
        </div>
        <div className="card">
            <img src={thumbnail6} alt="" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, id?</h2>
            <h3>Brenda</h3>
            <p>11.3k views and &bull; 2 days ago <Button/></p>
        </div>
        <div className="card">
            <img src={thumbnail7} alt="" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, id?</h2>
            <h3>Brenda</h3>
            <p>11.3k views and &bull; 2 days ago <Button/></p>
        </div>
        <div className="card">
            <img src={thumbnail8} alt="" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, id?</h2>
            <h3>Brenda</h3>
            <p>11.3k views and &bull; 6 weeks ago <Button/></p>
        </div>
        <div className="card">
            <img src={thumbnail1} alt="" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <h3>Brenda</h3>
            <p>11.3k views and &bull; 2 weeks ago <Button/></p>
        </div>
        <div className="card">
            <img src={thumbnail2} alt="" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, id?</h2>
            <h3>Brenda</h3>
            <p>11.3k views and &bull; 2 days ago <Button/></p>
        </div>
        <div className="card">
            <img src={thumbnail3} alt="" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, id?</h2>
            <h3>Brenda</h3>
            <p>11.3k views and &bull; 4 days ago <Button/></p>
        </div>
        <div className="card">
            <img src={thumbnail4} alt="" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, id?</h2>
            <h3>Brenda</h3>
            <p>11.3k views and &bull; 2 months ago <Button/></p>
        </div>
        <div className="card">
            <img src={thumbnail5} alt="" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, id?</h2>
            <h3>Brenda</h3>
            <p>11.3k views and &bull; 2 days ago <Button/></p>
        </div>
        <div className="card">
            <img src={thumbnail6} alt="" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, id?</h2>
            <h3>Brenda</h3>
            <p>11.3k views and &bull; 2 days ago <Button/></p>
        </div>
        <div className="card">
            <img src={thumbnail7} alt="" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, id?</h2>
            <h3>Brenda</h3>
            <p>11.3k views and &bull; 2 days ago <Button/></p>
        </div>
        <div className="card">
            <img src={thumbnail8} alt="" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, id?</h2>
            <h3>Brenda</h3>
            <p>11.3k views and &bull; 6 weeks ago <Button/></p>
        </div> 
    </div>
  )
}

export default Card