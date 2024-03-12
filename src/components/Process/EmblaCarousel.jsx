import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Process.module.css";
import { RevealDiv } from "../RevealDiv/RevealDiv";
import SliderArrow from "./SliderArrow";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>
            <div className={styles.slider__bg}>
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
                    <div className={styles.second_heading}>
                      future with smart
                    </div>
                  </RevealDiv>
                  <RevealDiv>
                    <div className={styles.third_heading}>green energy</div>
                  </RevealDiv>
                  <div className={styles.sticker__wrapper}>
                    <RevealDiv>
                      <div className={styles.sticker}>
                        <div className={styles.sticker__text__wrapper}>
                          <p className={styles.sticker__text}>New type</p>
                          <p className={styles.sticker__text}>New type</p>
                          <p className={styles.sticker__text}>New type</p>
                        </div>
                      </div>
                    </RevealDiv>
                  </div>
                </div>
                <div className={styles.control__wrapper}>
                  <div className={styles.txt__wrapper}>
                    <RevealDiv>
                      <p className={styles.txt}>
                        By combining a commercial energy storage system with a
                        renewable generation plant, surplus energy can be stored
                        and then retrieved around the clock. This means that
                        during periods of low wind and low sun, users can remain
                        energy self-sufficient, which is an economic advantage
                        in view of rising electricity prices.
                      </p>
                    </RevealDiv>
                    <RevealDiv>
                      <p className={styles.txt}>
                        A reliable power supply is crucial for many companies
                        and their operations. Emergency power storage systems
                        can maintain the necessary power supply even in the case
                        of power failures. This means that essential machines
                        and applications can continue to operate even in the
                        event of a power failure.
                      </p>
                    </RevealDiv>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.embla__slide}>
              <img
                data-animation="parallax"
                className={styles.embla__slide__img}
                src="/images/img1.webp"
                alt="Your alt text"
              />
            </div>
          </div>
          <div className={styles.embla__slide}>
            <div className={styles.slider__bg}>
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
                    <div className={styles.second_heading}>
                      future with smart
                    </div>
                  </RevealDiv>
                  <RevealDiv>
                    <div className={styles.third_heading}>green energy</div>
                  </RevealDiv>
                  <div className={styles.sticker__wrapper}>
                    <RevealDiv>
                      <div className={styles.sticker}>
                        <div className={styles.sticker__text__wrapper}>
                          <p className={styles.sticker__text}>New type</p>
                          <p className={styles.sticker__text}>New type</p>
                          <p className={styles.sticker__text}>New type</p>
                        </div>
                      </div>
                    </RevealDiv>
                  </div>
                </div>
                <div className={styles.control__wrapper}>
                  <div className={styles.txt__wrapper}>
                    <RevealDiv>
                      <p className={styles.txt}>
                        By combining a commercial energy storage system with a
                        renewable generation plant, surplus energy can be stored
                        and then retrieved around the clock. This means that
                        during periods of low wind and low sun, users can remain
                        energy self-sufficient, which is an economic advantage
                        in view of rising electricity prices.
                      </p>
                    </RevealDiv>
                    <RevealDiv>
                      <p className={styles.txt}>
                        A reliable power supply is crucial for many companies
                        and their operations. Emergency power storage systems
                        can maintain the necessary power supply even in the case
                        of power failures. This means that essential machines
                        and applications can continue to operate even in the
                        event of a power failure.
                      </p>
                    </RevealDiv>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.embla__slide}>
              <img
                data-animation="parallax"
                className={styles.embla__slide__img}
                src="/images/img2.webp"
                alt="Your alt text"
              />
            </div>
          </div>
          <div className={styles.embla__slide}>
            <div className={styles.slider__bg}>
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
                    <div className={styles.second_heading}>
                      future with smart
                    </div>
                  </RevealDiv>
                  <RevealDiv>
                    <div className={styles.third_heading}>green energy</div>
                  </RevealDiv>
                  <div className={styles.sticker__wrapper}>
                    <RevealDiv>
                      <div className={styles.sticker}>
                        <div className={styles.sticker__text__wrapper}>
                          <p className={styles.sticker__text}>New type</p>
                          <p className={styles.sticker__text}>New type</p>
                          <p className={styles.sticker__text}>New type</p>
                        </div>
                      </div>
                    </RevealDiv>
                  </div>
                </div>
                <div className={styles.control__wrapper}>
                  <div className={styles.txt__wrapper}>
                    <RevealDiv>
                      <p className={styles.txt}>
                        By combining a commercial energy storage system with a
                        renewable generation plant, surplus energy can be stored
                        and then retrieved around the clock. This means that
                        during periods of low wind and low sun, users can remain
                        energy self-sufficient, which is an economic advantage
                        in view of rising electricity prices.
                      </p>
                    </RevealDiv>
                    <RevealDiv>
                      <p className={styles.txt}>
                        A reliable power supply is crucial for many companies
                        and their operations. Emergency power storage systems
                        can maintain the necessary power supply even in the case
                        of power failures. This means that essential machines
                        and applications can continue to operate even in the
                        event of a power failure.
                      </p>
                    </RevealDiv>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.embla__slide}>
              <img
                data-animation="parallax"
                className={styles.embla__slide__img}
                src="/images/img3.webp"
                alt="Your alt text"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.embla__buttons}>
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
};

export default EmblaCarousel;
