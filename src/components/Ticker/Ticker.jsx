import styles from './Ticker.module.css'
import Arrow from './Arrow'

export const Ticker = ({...props}) => {
  return (
    <div className={styles.ticker__wrapper}>
        <div className={styles.ticker}>
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
        </div>
    </div>
  )
}
