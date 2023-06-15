import styles from "./TwoTickerSection.module.css"
import { Ticker } from "../Ticker/Ticker"

export const TwoTickerSection = () => {

    const tickerContent = {
        firstLine: 'New business model',
        secondLine: 'Renewable energy',
        thirdLine: 'Revolutionary technology',
    }
    
    return (
        <section className={styles.section}>
            <div className={styles.ticker__position}>
                <div className={styles.upper__ticker}>
                    <Ticker
                    first={tickerContent.firstLine}
                    second={tickerContent.secondLine}
                    third={tickerContent.thirdLine}
                    />
                </div>
                <div className={styles.lower__ticker}>
                    <Ticker
                    first={tickerContent.firstLine}
                    second={tickerContent.secondLine}
                    third={tickerContent.thirdLine}
                    />
                </div>
            </div>
        </section>
    )
  }