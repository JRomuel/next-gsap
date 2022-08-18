
import gsap from "gsap";
import React, { useEffect, useState } from 'react'

import Banner from "../components/banner"
import IntroOverlay from "../components/layouts/introOverlay"
import styles from '../styles/index.module.scss'

const tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
  
  tl.from('.line span', 1.8, {
    y: 100,
    ease: 'power4.out',
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3,
    }
  }).to('.overlay-top', 1.6, {
    height: 0,
    ease: 'expo.inOut',
    stagger: {
      amount: 0.4,
    },
    onComplete: completeAnimation
  })
}

export default function Home() {

  const [animationComplete, setAnimationComplete] = useState(false)

  const completeAnimation = () => {
    setAnimationComplete(true);
  }

  useEffect(() => {
    homeAnimation(completeAnimation);
  }, [])


  return (
    <>
      {animationComplete === false ? <IntroOverlay/> : '' }
      <Banner/>
    </>
  )
}
