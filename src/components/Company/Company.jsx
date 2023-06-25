import React from "react";
import styles from "./Company.module.css";
import { RevealDiv } from "../RevealDiv/RevealDiv";

export const Company = React.forwardRef((props, ref) => {
    return (
        <section className={styles.section} ref={ref}>
            <div className={styles.content}>
                <div className={styles.nav__col}>
                    <div className={styles.chapter}>
                        <RevealDiv>
                            <span className={styles.marker}>(01)</span>
                        </RevealDiv>
                        <RevealDiv>
                            <div>Company</div>
                        </RevealDiv>
                    </div>
                    <div className={styles.info__container}>
                        <RevealDiv>
                           <p className={styles.info__key}>Foundation</p> 
                        </RevealDiv>
                        <RevealDiv>
                            <div className={styles.info__value}>2016</div>
                        </RevealDiv>
                    </div>
                </div>
                <div className={styles.main__col}>
                    <RevealDiv>
                        <div className={styles.first_heading}>Unique plan.</div>
                    </RevealDiv>
                    <RevealDiv>
                        <div className={styles.second_heading}>Exceptional team.</div>
                    </RevealDiv>
                    <RevealDiv>
                        <div className={styles.third_heading}>One goal.</div>
                    </RevealDiv>
                    <div className={styles.description__container}>
                        <RevealDiv>
                            <div className={styles.description}>
                                Voltogess Commercial Batteries enable commercial and agricultural businesses to optimize their self-consumption, increasing their profitability and independence from the power grid. The generation and use of climate-friendly forms of energy is of crucial importance in this context. Companies in the commercial and agricultural sectors also want to contribute to a carbon-neutral energy supply with innovative energy solutions. Ecological energy storage solutions play a special role in enabling 100% renewable energy around the clock.
                            </div>
                        </RevealDiv>
                        <RevealDiv>
                            <div className={styles.btn__container}>
                                <button className={styles.btn}>Book a discovery call</button>
                                <button className={styles.btn}>Write email to us</button>
                            </div>
                        </RevealDiv>
                    </div>
                </div>
            </div>
        </section>
    )
  });