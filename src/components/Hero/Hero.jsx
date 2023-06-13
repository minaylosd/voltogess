import Asterisk from "./Asterisk"
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.section}>
        <div className={styles.hero}>
            <div className={styles.asterisk__container}>
                <div className={styles.asterisk}>
                    <Asterisk />
                </div>
                <div className={styles.first_heading}>  
                    Clean energy
                </div>
            </div>
            <div className={styles.second_heading__wrapper}>
                <p className={styles.second_heading__paragraph}>
                    100% renewable energies around the clock for a fairer and cleaner world for future generations - this is the great challenge of our time.
                </p>
                <div className={styles.second_heading}>Every day</div>
            </div>
            <div className={styles.third_heading}>& night®</div>
        </div>
    </section>
  )
}
