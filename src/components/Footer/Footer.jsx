import { useEffect } from 'react'
import styles from './Footer.module.css'
import { Ticker } from "../Ticker/Ticker"
import { gsap } from 'gsap'

export const Footer = () => {

  const tickerContent = {
      firstLine: 'Lets connect',
  }

  useEffect(() => {
      let tween = gsap.fromTo(".ticker__inner",{xPercent: 0}, {xPercent: -50, repeat: -1, duration: 15, ease: "linear"}).totalProgress(0);
  })

  return (
    <section className={styles.section}>
      <Ticker
      first={tickerContent.firstLine}
      second={tickerContent.firstLine}
      third={tickerContent.firstLine}
      />
  </section>
  )
}
