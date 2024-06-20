import React from 'react'
import "../Home/Home.css"
import Header from '../Header/Header'
import Banniere from '../Banniere/Banniere'
import Footer from '../Footer/Footer'
import Features from '../Features/Features'
import LogoFeature1 from "../Assets/icon-chat.png"
import LogoFeature2 from "../Assets/icon-money.png"
import LogoFeature3 from "../Assets/icon-security.png"




export default function Home() {
  return (
    <>
    <Header/>
    <Banniere/>
    <div className='Features'>
    <Features  image={LogoFeature1} titre='You are our #1 priority' description='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.' />
    <Features  image={LogoFeature2} titre='More savings means higher rates' description='The more you save with us, the higher your interest rate will be!' />
    <Features  image={LogoFeature3} titre='Security you can trust' description='We use top of the line encryption to make sure your data and money is always safe.'/>
    </div>
    <Footer/>
</>
  )
}
 