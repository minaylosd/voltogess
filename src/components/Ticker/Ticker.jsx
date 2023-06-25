import styles from './Ticker.module.css'
import Arrow from './Arrow'
import { useEffect } from 'react'
import { gsap } from 'gsap'

export const Ticker = ({...props}) => {
    useEffect(() => {
        let currentScroll = 0;
        let isScrollingDown = true;

        let tween = gsap.to(".ticker__part", {xPercent: -65, repeat: -1, duration: 10, ease: "linear"}).totalProgress(0);
    })
  return (
    <div className={styles.ticker__wrapper}>
        <div className={`${styles.ticker} ticker__part`}>
            <div className={styles.ticker__item}>
                {props.first}
            </div>
            <div className={styles.ticker__item}>
                <div className={styles.arrow}>
                    <Arrow />
                </div>
            </div>
            <div className={styles.ticker__item}>
                {props.second}
            </div>
            <div className={styles.ticker__item}>
                <div className={styles.arrow}>
                    <Arrow />
                </div>
            </div>
            <div className={styles.ticker__item}>
                {props.third}
            </div>
            <div className={styles.ticker__item}>
                <div className={styles.arrow}>
                    <Arrow />
                </div>
            </div>
        </div>
        <div className={`${styles.ticker} ticker__part`}>
            <div className={styles.ticker__item}>
                {props.first}
            </div>
            <div className={styles.ticker__item}>
                <div className={styles.arrow}>
                    <Arrow />
                </div>
            </div>
            <div className={styles.ticker__item}>
                {props.second}
            </div>
            <div className={styles.ticker__item}>
                <div className={styles.arrow}>
                    <Arrow />
                </div>
            </div>
            <div className={styles.ticker__item}>
                {props.third}
            </div>
            <div className={styles.ticker__item}>
                <div className={styles.arrow}>
                    <Arrow />
                </div>
            </div>
        </div>
    </div>
  )
}
