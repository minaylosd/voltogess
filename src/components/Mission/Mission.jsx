import React from "react";
import styles from "./Mission.module.css";
import Map from "./Map";
import { RevealDiv } from "../RevealDiv/RevealDiv";
import { ShowMore } from "./ShowMore";

export const Mission = (props) => {
  const listData = [
    {
      heading: "Infrastructure",
      text: "Voltogess Commercial Batteries enable commercial and agricultural\n businesses to optimize their self-consumption, increasing their\n profitability and independence from the power grid. The generation\n and use of climate-friendly forms of energy is of crucial importance in\n this context. Companies in the commercial and agricultural sectors\n also want to contribute to a carbon-neutral energy supply with\n innovative energy solutions. Ecological energy storage solutions play a\n special role in enabling 100% renewable energy around the clock.",
    },
    {
      heading: "Security management",
      text: "Voltogess Commercial Batteries enable commercial and agricultural\n businesses to optimize their self-consumption, increasing their\n profitability and independence from the power grid. The generation\n and use of climate-friendly forms of energy is of crucial importance in\n this context. Companies in the commercial and agricultural sectors\n also want to contribute to a carbon-neutral energy supply with\n innovative energy solutions. Ecological energy storage solutions play a\n special role in enabling 100% renewable energy around the clock.",
    },
    {
      heading: "Reduction",
      text: "Voltogess Commercial Batteries enable commercial and agricultural\n businesses to optimize their self-consumption, increasing their\n profitability and independence from the power grid. The generation\n and use of climate-friendly forms of energy is of crucial importance in\n this context. Companies in the commercial and agricultural sectors\n also want to contribute to a carbon-neutral energy supply with\n innovative energy solutions. Ecological energy storage solutions play a\n special role in enabling 100% renewable energy around the clock.",
    },
  ];
  return (
    <section className={`${styles.section} section`}>
      <div className={styles.heading__container}>
        <RevealDiv>
          <p className={styles.chapter}>
            <span className={styles.marker}>(02)</span>Mission
          </p>
        </RevealDiv>
        <RevealDiv>
          <div className={styles.heading}>Future of energy,</div>
        </RevealDiv>
        <RevealDiv>
          <div className={styles.heading}>Ecological technology,</div>
        </RevealDiv>
        <RevealDiv>
          <div className={styles.heading}>Power from renewable</div>
        </RevealDiv>
        <RevealDiv>
          <div className={styles.heading}>Sources</div>
        </RevealDiv>
      </div>
      <div className={styles.main__container}>
        <div className={styles.map__wrapper}>
          <Map />
        </div>
        <div className={styles.mission__list}>
          <RevealDiv>
            <div className={styles.line}></div>
          </RevealDiv>
          {listData.map((item, index) => (
            <RevealDiv key={index}>
              <ShowMore content={item} />
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
};
