import styles from './Footer.module.css'
import { Ticker } from "../Ticker/Ticker"

export const Footer = () => {

    const tickerContent = {
        firstLine: 'Lets connect',
    }

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
