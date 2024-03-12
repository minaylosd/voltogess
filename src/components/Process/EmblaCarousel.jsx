import React from "react";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Process.module.css";
import { RevealDiv } from "../RevealDiv/RevealDiv";
import { gsap } from "gsap";
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

  useEffect(() => {
    const carouselSlides = document.querySelectorAll(".carousel__slide");

    var observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const slideItems = Array.from(
            entry.target.querySelectorAll(".reveal")
          );
          gsap.from(slideItems, {
            autoAlpha: 0,
            y: 150,
            stagger: 0.05,
            delay: 0.1,
          });
        } else {
          return;
        }
      });
    });

    carouselSlides.forEach((slide) => {
      observer.observe(slide);
    });
  }, []);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>
            <div className={styles.slider__bg}>
              <div className={`${styles.slider__content} carousel__slide`}>
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
                        <div
                          className={`${styles.sticker__text__wrapper} ticker`}
                        >
                          <p className={styles.sticker__text}>New type</p>
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
                src="/images/img1.jpg"
                alt="alt text"
              />
            </div>
          </div>
          <div className={styles.embla__slide}>
            <div className={styles.slider__bg}>
              <div className={`${styles.slider__content} carousel__slide`}>
                <RevealDiv>
                  <p className={styles.chapter}>
                    <span className={styles.marker}>(03)</span>Process
                  </p>
                </RevealDiv>
                <div className={styles.heading__container}>
                  <RevealDiv>
                    <div className={styles.first_heading}>Making 100%</div>
                  </RevealDiv>
                  <RevealDiv>
                    <div className={styles.second_heading}>
                      renewable energies
                    </div>
                  </RevealDiv>
                  <RevealDiv>
                    <div className={styles.third_heading}>available</div>
                  </RevealDiv>
                  <div className={styles.sticker__wrapper}>
                    <RevealDiv>
                      <div className={styles.sticker}>
                        <div
                          className={`${styles.sticker__text__wrapper} ticker`}
                        >
                          <p className={styles.sticker__text}>Renewable</p>
                          <p className={styles.sticker__text}>Renewable</p>
                          <p className={styles.sticker__text}>Renewable</p>
                          <p className={styles.sticker__text}>Renewable</p>
                        </div>
                      </div>
                    </RevealDiv>
                  </div>
                </div>
                <div className={styles.control__wrapper}>
                  <div className={styles.txt__wrapper}>
                    <RevealDiv>
                      <p className={styles.txt}>
                        With the development of cost-effective and
                        resource-saving battery storage, Voltoge making an
                        important contribution to a climate-friendly future.
                      </p>
                    </RevealDiv>
                    <RevealDiv>
                      <p className={styles.txt}>
                        Renewable energy sources such as wind and sun are
                        becoming increasingly important and will be the most
                        important sources of energy supply in the future
                        globally. Energy storage solutions are a key technology
                        to reliably and cost-effectively bridge natural gaps in
                        supply during periods of low wind and no sun and to make
                        100% of green energy usable. With efficient and
                        sustainable storage solutions from VoltStorage, green
                        energy can be made usable 24/7.
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
                src="/images/img2.jpg"
                alt="alt text"
              />
            </div>
          </div>
          <div className={styles.embla__slide}>
            <div className={styles.slider__bg}>
              <div className={`${styles.slider__content} carousel__slide`}>
                <RevealDiv>
                  <p className={styles.chapter}>
                    <span className={styles.marker}>(03)</span>Process
                  </p>
                </RevealDiv>
                <div className={styles.heading__container}>
                  <RevealDiv>
                    <div className={styles.first_heading}>
                      Pioneering battery
                    </div>
                  </RevealDiv>
                  <RevealDiv>
                    <div className={styles.second_heading}>solutions that</div>
                  </RevealDiv>
                  <RevealDiv>
                    <div className={styles.third_heading}>are efficient</div>
                  </RevealDiv>
                  <div className={styles.sticker__wrapper}>
                    <RevealDiv>
                      <div className={styles.sticker}>
                        <div
                          className={`${styles.sticker__text__wrapper} ticker`}
                        >
                          <p className={styles.sticker__text}>Solutions</p>
                          <p className={styles.sticker__text}>Solutions</p>
                          <p className={styles.sticker__text}>Solutions</p>
                          <p className={styles.sticker__text}>Solutions</p>
                        </div>
                      </div>
                    </RevealDiv>
                  </div>
                </div>
                <div className={styles.control__wrapper}>
                  <div className={styles.txt__wrapper}>
                    <RevealDiv>
                      <p className={styles.txt}>
                        We rely on redox flow storage technology for our
                        batteries. This technology is particularly
                        climate-friendly, as they do not require rare earths or
                        conflict raw materials, are fully recyclable and are
                        also characterized by high operational reliability and
                        durability.
                      </p>
                    </RevealDiv>
                    <RevealDiv>
                      <p className={styles.txt}>
                        The Voltoge success story began in 2016 as a
                        Munich-based startup with the vision of making clean and
                        affordable energy accessible around the clock.
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
                src="/images/img3.jpg"
                alt="alt text"
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
