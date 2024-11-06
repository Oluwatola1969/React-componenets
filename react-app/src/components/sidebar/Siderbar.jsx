import React from 'react'
import './sidebar.css'
import home from '../../assets/images/home.png'
import sports from '../../assets/images/sports.png'
import entertainment from '../../assets/images/entertainment.png'
import tech from '../../assets/images/tech.png'
import music from '../../assets/images/music.png'
import blogs from '../../assets/images/blogs.png'
import news from '../../assets/images/news.png'
import gameicon from '../../assets/images/game_icon.png'
import tom from '../../assets/images/tom.png'
import megan from '../../assets/images/megan.png'
import cameron from '../../assets/images/cameron.png'
import jack from '../../assets/images/jack.png'
import simon from '../../assets/images/simon.png'
import automoblies from '../../assets/images/automobiles.png'

const Siderbar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="pry-links">
            <div className="links">
                <img src={home} alt="" /> <p>Home</p>
            </div>
            <div className="links">
                <img src={music} alt="" /> <p>Music</p>
            </div>
            <div className="links">
                <img src={blogs} alt="" /> <p>Blogs</p>
            </div>
            <div className="links">
                <img src={gameicon} alt=""/> <p>Gaming</p>
            </div>
            <div className="links">
                <img src={news} alt="" /> <p>News</p>
            </div>
            <div className="links">
                <img src={tech} alt="" /><p>Technology</p>
            </div>
            <div className="links">
                <img src={entertainment} alt="" /><p>Entertainment</p>
            </div>
            <div className="links">
                <img src={sports} alt="" /><p>Sport</p>
            </div>
        </div>
            <hr />
        <div className="subscription-list">
            <h3>Subscription</h3>
            <div className="links">
                <img src={megan} alt="" /> <p>Trenor Megan</p>
            </div>
            <div className="links">
                <img src={jack} alt="" /> <p>Jack Grealish</p>
            </div>
            <div className="links">
                <img src={cameron} alt="" /> <p>Ron Cameron</p>
            </div>
            <div className="links">
                <img src={simon} alt="" /> <p>Simon Peters</p>
            </div>
            <div className="links">
                <img src={tom} alt="" /> <p>Tom Tom</p>
            </div>
        </div>
    </div>
  )
}

export default Siderbar