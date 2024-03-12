import React from "react";
import styles from "./Action.module.css";
import { RevealDiv } from "../RevealDiv/RevealDiv";

export const Action = React.forwardRef((props, ref) => {
  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.content}>
        <RevealDiv>
          <div className={styles.sticker__wrapper}>
            <div className={styles.img__holder}>
              <img src="/images/emoji.png" alt="emoji" />
            </div>
          </div>
        </RevealDiv>
        <div>
          <RevealDiv>
            <div className={styles.heading}>Don&#8217;t be shy it&#8217;s</div>
          </RevealDiv>
          <RevealDiv>
            <div className={styles.heading}>time to say hello!</div>
          </RevealDiv>
          <RevealDiv>
            <div className={styles.heading}>send us email</div>
          </RevealDiv>
          <RevealDiv>
            <button className={styles.btn}>Write email to us</button>
          </RevealDiv>
        </div>
      </div>
    </section>
  );
});
