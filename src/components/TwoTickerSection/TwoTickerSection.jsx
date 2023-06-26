import { useEffect } from "react"
import styles from "./TwoTickerSection.module.css"
import { Ticker } from "../Ticker/Ticker"
import { gsap } from "gsap"

export const TwoTickerSection = () => {

    const tickerContent = {
        firstLine: 'New business model',
        secondLine: 'Renewable energy',
        thirdLine: 'Revolutionary technology',
    }
    
    // useEffect(() => {
    //     let currentScroll = 0;
    //     let isScrollingDown = true;
  
    //     let tween = gsap.to(".ticker__inner__right", {xPercent: 25, repeat: -1, duration: 15, ease: "power1.out"}).totalProgress(0.5);
        
    //     window.addEventListener("scroll", function(){
  
    //         if ( window.pageYOffset > currentScroll ) {
    //           isScrollingDown = true;
    //         } else {
    //           isScrollingDown = false;
    //         }
             
    //         gsap.to(tween, {
    //           timeScale: isScrollingDown ? 1 : -1
    //         });
            
    //         currentScroll = window.pageYOffset
    //     })
    // })

    useEffect(() => {
        let currentScroll = 0;
        let isScrollingDown = true;
        
        let tweenRight = gsap.to(".ticker__inner__right", {xPercent: 25, repeat: -1, duration: 15, ease: "power1.out"}).totalProgress(0);

        window.addEventListener("scroll", function(){
  
            if ( window.pageYOffset > currentScroll ) {
              isScrollingDown = true;
            } else {
              isScrollingDown = false;
            }
             
            gsap.to(tweenRight, {
              timeScale: isScrollingDown ? 1 : -1
            });
            
            currentScroll = window.pageYOffset
        })
    });

    return (
        <section className={styles.section}>
            <div className={styles.ticker__position}>
                <div className={styles.upper__ticker}>
                    <Ticker
                    right={true}
                    first={tickerContent.firstLine}
                    second={tickerContent.secondLine}
                    third={tickerContent.thirdLine}
                    />
                </div>
                <div className={styles.lower__ticker}>
                    <Ticker
                    right={true}
                    first={tickerContent.firstLine}
                    second={tickerContent.secondLine}
                    third={tickerContent.thirdLine}
                    />
                </div>
            </div>
        </section>
    )
  }