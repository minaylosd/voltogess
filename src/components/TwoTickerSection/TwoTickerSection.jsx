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

  let tl;
  let animating = false;

  // change direction/speed of ticker on scroll
  function animateTicker(e) {
    if (animating) {
      return;
    } else {
      animating = true;
      const delta = e.wheelDeltaY;
      if (delta > 0) {
        tl.timeScale(-2).reverse();
        setTimeout(() => {
          tl.timeScale(-1);
          animating = false;
        }, 350);
      } else {
        tl.timeScale(2);
        setTimeout(() => {
          tl.timeScale(1);
          animating = false;
        }, 350);
      }
    }
  }

  useEffect(() => {
    // animating tickers
    const tickers = document.querySelectorAll('[data-animation="ticker"]');
    tl = gsap.timeline({
      repeat: -1,
      onReverseComplete: function () {
        tl.totalTime(tl.duration() * 100);
      },
    });

    for (let i = 0, k = -1; i < tickers.length; i++) {
      const width = tickers[i].getBoundingClientRect().width;
      const distance = (width - 32) / 2;
      tl.to(
        tickers[i],
        {
          x: distance * k,
          duration: 15,
          ease: "linear",
        },
        0
      );
      k *= -1;
    }

    // TODO:
    // find way to add event listener only when ticker in viewport
    // (or simply kill animation when its not)
    document.addEventListener("wheel", animateTicker);
  });

  return (
    <section className={styles.section}>
      <div className={styles.ticker__position}>
        <div className={`${styles.lower__ticker} lower__ticker`}>
          <Ticker
            right={false}
            first={tickerContent.firstLine}
            second={tickerContent.secondLine}
            third={tickerContent.thirdLine}
          />
        </div>
        <div className={styles.upper__ticker}>
          <Ticker
            right={true}
            first={tickerContent.firstLine}
            second={tickerContent.secondLine}
            third={tickerContent.thirdLine}
          />
        </div>
      </div>
    </section>
  );
};
