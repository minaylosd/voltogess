import React from "react";
import Asterisk from "./Asterisk"
import styles from "./Hero.module.css"
import { RevealDiv } from "../RevealDiv/RevealDiv"

export const Hero = React.forwardRef((props, ref) => {
  return (
    <section className={`${styles.section} hero`} ref={ref}>
        <div className={styles.hero}>
            <div className={styles.asterisk__container}>
                <RevealDiv>
                    <div className={styles.asterisk}>
                        <Asterisk />
                    </div>
                </RevealDiv>
                <RevealDiv>
                    <div className={styles.first_heading}>  
                        Clean energy
                    </div>
                </RevealDiv>
            </div>
            <div className={styles.second_heading__wrapper}>
                <div className={styles.second_heading__paragraph}>
                    <RevealDiv>
                        100% renewable energies around the
                    </RevealDiv>
                    <RevealDiv>
                        clock for a fairer and cleaner world for
                    </RevealDiv>
                    <RevealDiv>
                        future generations - this is the great
                    </RevealDiv>
                    <RevealDiv>
                        challenge of our time.
                    </RevealDiv>
                </div>
                <RevealDiv>
                    <div className={styles.second_heading}>Every day</div>
                </RevealDiv>
            </div>
            <RevealDiv>
               <div className={styles.third_heading}>& night<span className={styles.registered}>®</span></div> 
            </RevealDiv>
        </div>
    </section>
  )
});
