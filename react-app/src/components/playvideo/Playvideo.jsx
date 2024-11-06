import React from 'react'
import './playvideo.css'
import video1 from '../../assets/images/video.mp4'
import like from '../../assets/images/like.png'
import dislike from '../../assets/images/dislike.png'
import share from '../../assets/images/share.png'
import save from '../../assets/images/save.png'
import jack from '../../assets/images/jack.png'
import user from '../../assets/images/user_profile.jpg'
import Button from '../button/Button'


const Playvideo = () => {
  return (
    <div className='playvideo'>
        <video src={video1} controls muted></video>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <div className="video-info">
            <p>345views &bull; 1 hour ago</p>
            <div className="video-icons">
                <span><img src={like} alt="" /></span>
                <span><img src={dislike} alt="" /></span>
                <span><img src={share} alt="" /></span>
                <span><img src={save} alt="" /></span>
            </div>
        </div><hr />
        <div className="author">
            <img src={jack} alt="" />
            <div className="author-info">
                <p>Serene</p>
                <small>200k subscribers</small>
            </div>
            <Button/>
        </div>
        <div className="video-description">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, consectetur facilis dolore consequatur quas fuga. Quia repellat nisi doloremque iste molestiae quo et asperiores.</p>
            <hr />
            <h3>12 comments</h3>
            <div className="comment-section">
                <img src={user} alt="" />
                <div className="commenter">
                    <div className="comment-info">
                        <p className="name">@prince_Elemi &bull; 2w ago</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequuntur quia quae.</p>
                    </div>
                    <div className="comment-rxn">
                        <span><img src={like} alt="" /> <p>1.2k</p> </span>
                        <span><img src={dislike} alt="" /> <p>50</p> </span>
                        <span><img src={like} alt="" /> <p>1.2k</p> </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Playvideo