import React from "react";
import styles from "./Poster.module.css";
import { RevealDiv } from "../RevealDiv/RevealDiv";

export const Poster = (props) => {
  return (
    <section className={`${styles.section} section`}>
      <div className={styles.poster}>
        <div className={styles.poster__img_wrapper}>
          <img
            className={styles.poster__img}
            data-animation="parallax"
            src="/images/img3.webp"
            alt="photo"
          />
        </div>
        <div className={styles.poster__img_description}>
          <RevealDiv>
            <div className={styles.motto}>Transforming for growth</div>
          </RevealDiv>
          <RevealDiv>
            <div className={styles.place}>Based in California, USA</div>
          </RevealDiv>
        </div>
      </div>
    </section>
  );
};
