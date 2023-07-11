import React from 'react';
import styles from './Preloader.module.css';

export const Preloader = () => {
  return (
    <div className={`${styles.section} fade`}>
        <div className={styles.preloader__wrapper}>
            <div className={styles.progressbar__wrapper}>
                <div className={styles.progressbar}>
                   <div className={`${styles.progress__current} current ${styles.pulse}`}></div>
                    <div className={styles.progress__overall}></div> 
                </div>
                
            </div>
            <div className={`${styles.indication__bar} ${styles.pulse}`}>
                <div className={styles.indicator__holder}>
                    <div className={styles.indicator}></div>
                    Loading..
                </div>
                <div>//</div>
            </div>
        </div>
    </div>
  )
}
