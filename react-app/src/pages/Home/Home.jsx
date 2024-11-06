import React from 'react'
import './Home.css'
import Siderbar from '../../components/sidebar/Siderbar'
import Feed from '../../components/Feed/Feed'

const Home = ({sidebar, subscription, setSubscription}) => {
  return (
    <div>
      <Siderbar sidebar={sidebar} />

      <div className={`container ${sidebar ? "" : "large-container"} `}>
      <Feed subscription={subscription} setSubscription={setSubscription}/>
      </div>

    </div>
  )
}

export default Home