import React from "react";
import styles from "./Poster.module.css";
import Image from "next/image";
import Photo from "../../../public/images/img1.jpg";
import { RevealDiv } from "../RevealDiv/RevealDiv";

export const Poster = (props) => {
  return (
    <section className={`${styles.section} section`}>
      <div className={styles.poster}>
        <div className={styles.poster__img_wrapper}>
          <Image src={Photo} fill={true} alt="photo" />
        </div>
        <div className={styles.poster__img_mob}>
          <div className={styles.img__wrapper_mob}>
            <Image src={Photo} height={580} alt="photo" />
          </div>
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
