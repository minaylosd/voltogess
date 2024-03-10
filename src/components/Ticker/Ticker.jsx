import styles from "./Ticker.module.css";
import Arrow from "./Arrow";

export const Ticker = ({ ...props }) => {
  return (
    <div className={`${styles.ticker__wrapper} ticker__wrapper`}>
      <div
        data-animation="ticker"
        className={`${styles.ticker__inner} ${
          props.right ? "ticker__inner__right" : "ticker__inner"
        }`}
      >
        <div className={`${styles.ticker} ticker__part`}>
          <div className={styles.ticker__item}>{props.first}</div>
          <div className={styles.ticker__item}>
            <div className={styles.arrow}>
              <Arrow />
            </div>
          </div>
          <div className={styles.ticker__item}>{props.second}</div>
          <div className={styles.ticker__item}>
            <div className={styles.arrow}>
              <Arrow />
            </div>
          </div>
          <div className={styles.ticker__item}>{props.third}</div>
          <div className={styles.ticker__item}>
            <div className={styles.arrow}>
              <Arrow />
            </div>
          </div>
        </div>
        <div className={`${styles.ticker} ticker__part`}>
          <div className={styles.ticker__item}>{props.first}</div>
          <div className={styles.ticker__item}>
            <div className={styles.arrow}>
              <Arrow />
            </div>
          </div>
          <div className={styles.ticker__item}>{props.second}</div>
          <div className={styles.ticker__item}>
            <div className={styles.arrow}>
              <Arrow />
            </div>
          </div>
          <div className={styles.ticker__item}>{props.third}</div>
          <div className={styles.ticker__item}>
            <div className={styles.arrow}>
              <Arrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
