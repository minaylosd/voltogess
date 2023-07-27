import { useEffect } from "react";
import styles from "./TwoTickerSection.module.css";
import { Ticker } from "../Ticker/Ticker";
import { gsap } from "gsap";

export const TwoTickerSection = () => {
  const tickerContent = {
    firstLine: "New business model",
    secondLine: "Renewable energy",
    thirdLine: "Revolutionary technology",
  };

  useEffect(() => {
    gsap.fromTo(
      ".ticker__inner__right",
      {
        xPercent: 0,
      },
      {
        xPercent: 25,
        repeat: -1,
        duration: 15,
        yoyo: true,
        yoyoEase: "power1.out",
      }
    );

    gsap.fromTo(
      ".ticker__inner",
      {
        xPercent: -5,
      },
      {
        xPercent: -30,
        repeat: -1,
        duration: 15,
        yoyo: true,
        yoyoEase: "power1.out",
      }
    );
  });

  return (
    <section className={styles.section}>
      <div className={styles.ticker__position}>
        <div className={styles.upper__ticker}>
          <Ticker
            right={true}
            first={tickerContent.firstLine}
            second={tickerContent.secondLine}
            third={tickerContent.thirdLine}
          />
        </div>
        <div className={styles.lower__ticker}>
          <Ticker
            right={false}
            first={tickerContent.firstLine}
            second={tickerContent.secondLine}
            third={tickerContent.thirdLine}
          />
        </div>
      </div>
    </section>
  );
};
