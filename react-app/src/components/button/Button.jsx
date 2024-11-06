// import React, { useState } from 'react'
import styled from 'styled-components'

const Btn = styled.button`
width:65px;
background-color: red;
padding: 3px 20px;
border-radius: 25px;
border: none;
cursor:pointer;
font-size:12px;
color:#fff;
text-align: center;
margin: auto;
display:grid;
place-content:center;
`


const Button = ({subscription, setSubscription}) => {
   
  return (
    <Btn onClick={()=>setSubscription(prev=> prev?false:true)} className={`${subscription?"grey": ""}`}>{subscription?"Subcribed":"Subscribe"}</Btn>
  )
}

export default Button