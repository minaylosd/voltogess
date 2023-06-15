import Asterisk from "./Asterisk"
import styles from "./Hero.module.css"
import { RevealDiv } from "../RevealDiv/RevealDiv"

export const Hero = () => {
  return (
    <section className={styles.section}>
        <div className={styles.hero}>
            <div className={styles.asterisk__container}>
                <RevealDiv staggered={true}>
                    <div className={styles.asterisk}>
                        <Asterisk />
                    </div>
                </RevealDiv>
                <RevealDiv staggered={true}>
                    <div className={styles.first_heading}>  
                        Clean energy
                    </div>
                </RevealDiv>
            </div>
            <div className={styles.second_heading__wrapper}>
                <div className={styles.second_heading__paragraph}>
                    <RevealDiv staggered={true}>
                        100% renewable energies around the
                    </RevealDiv>
                    <RevealDiv staggered={true}>
                        clock for a fairer and cleaner world for
                    </RevealDiv>
                    <RevealDiv staggered={true}>
                        future generations - this is the great
                    </RevealDiv>
                    <RevealDiv staggered={true}>
                        challenge of our time.
                    </RevealDiv>
                </div>
                <RevealDiv staggered={true}>
                    <div className={styles.second_heading}>Every day</div>
                </RevealDiv>
            </div>
            <RevealDiv staggered={true}>
               <div className={styles.third_heading}>& night<span className={styles.registered}>®</span></div> 
            </RevealDiv>
        </div>
    </section>
  )
}
