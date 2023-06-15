import Asterisk from "./Asterisk"
import styles from "./Hero.module.css"
import { RevealDiv } from "../RevealDiv/RevealDiv"

export const Hero = () => {
  return (
    <section className={styles.section}>
        <div className={styles.hero}>
            <RevealDiv>
                <div className={styles.asterisk__container}>
                    <div className={styles.asterisk}>
                        <Asterisk />
                    </div>
                    <div className={styles.first_heading}>  
                        Clean energy
                    </div>
                </div>
            </RevealDiv>
            <div className={styles.second_heading__wrapper}>
                <RevealDiv>
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
                </RevealDiv>
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
}
