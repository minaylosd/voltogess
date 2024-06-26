import React from "react";
import styles from "./Process.module.css";
import SliderArrow from "./SliderArrow";
import { RevealDiv } from "../RevealDiv/RevealDiv";
import EmblaCarousel from "./EmblaCarousel";

export const Process = (props) => {
  const OPTIONS = { containScroll: "trimSnaps" };
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <section className={styles.section}>
      <EmblaCarousel slides={SLIDES} options={OPTIONS}></EmblaCarousel>
      {/* <Image src={sliderImg} fill={true} alt="photo" /> */}
      {/* <div className={styles.slider__bg}>
        <div className={styles.slider__content}>
          <RevealDiv>
            <p className={styles.chapter}>
              <span className={styles.marker}>(03)</span>Process
            </p>
          </RevealDiv>
          <div className={styles.heading__container}>
            <RevealDiv>
              <div className={styles.first_heading}>We are creating</div>
            </RevealDiv>
            <RevealDiv>
              <div className={styles.second_heading}>future with smart</div>
            </RevealDiv>
            <RevealDiv>
              <div className={styles.third_heading}>green energy</div>
            </RevealDiv>
            <div className={styles.sticker__wrapper}>
              <div className={styles.sticker}>
                <div className={styles.sticker__text__wrapper}>
                  <p className={styles.sticker__text}>New type</p>
                  <p className={styles.sticker__text}>New type</p>
                  <p className={styles.sticker__text}>New type</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.control__wrapper}>
            <RevealDiv>
              <div className={styles.controls}>
                <div className={styles.arrow}>
                  <SliderArrow />
                </div>
                <div
                  className={styles.arrow}
                  style={{ transform: "rotate(180deg)" }}
                >
                  <SliderArrow />
                </div>
              </div>
            </RevealDiv>

            <div className={styles.txt__wrapper}>
              <RevealDiv>
                <p className={styles.txt}>
                  By combining a commercial energy storage system with a
                  renewable generation plant, surplus energy can be stored and
                  then retrieved around the clock. This means that during
                  periods of low wind and low sun, users can remain energy
                  self-sufficient, which is an economic advantage in view of
                  rising electricity prices.
                </p>
              </RevealDiv>
              <RevealDiv>
                <p className={styles.txt}>
                  A reliable power supply is crucial for many companies and
                  their operations. Emergency power storage systems can maintain
                  the necessary power supply even in the case of power failures.
                  This means that essential machines and applications can
                  continue to operate even in the event of a power failure.
                </p>
              </RevealDiv>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};
