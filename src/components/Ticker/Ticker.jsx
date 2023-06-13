import styles from "./Ticker.module.css"
import Arrow from "./Arrow"

export const Ticker = () => {

    const upperTickerWrapStyles = {
        transform: "rotate(-4deg) translateX(calc(var(--width-k) * 100 * -1))",
        position: "absolute",
    }

    const lowerTickerWrapStyles = {
        transform: "rotate(4deg) translateY(calc(var(--width-k) * 170))",
    }

    const lowerTickerStyles = {
        transform: "translateX(-23%)",
    }
    
    return (
        <section className={styles.section}>
            <div className={styles.ticker__position}>
                <div style={upperTickerWrapStyles} className={styles.ticker__wrapper}>
                    <div className={styles.ticker}>
                        <div className={styles.ticker__item}>
                            New business model
                        </div>
                        <div className={styles.ticker__item}>
                            <div className={styles.arrow}>
                                <Arrow />
                            </div>
                        </div>
                        <div className={styles.ticker__item}>
                            Renewable energy
                        </div>
                        <div className={styles.ticker__item}>
                            <div className={styles.arrow}>
                                <Arrow />
                            </div>
                        </div>
                        <div className={styles.ticker__item}>
                            Revolutionary technology
                        </div>
                    </div>
                </div>
                <div style={lowerTickerWrapStyles} className={styles.ticker__wrapper}>
                    <div style={lowerTickerStyles} className={styles.ticker}>
                        <div className={styles.ticker__item}>
                            New business model
                        </div>
                        <div className={styles.ticker__item}>
                            <div className={styles.arrow}>
                                <Arrow />
                            </div>
                        </div>
                        <div className={styles.ticker__item}>
                            Renewable energy
                        </div>
                        <div className={styles.ticker__item}>
                            <div className={styles.arrow}>
                                <Arrow />
                            </div>
                        </div>
                        <div className={styles.ticker__item}>
                            Revolutionary technology
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }