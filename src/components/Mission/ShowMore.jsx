import styles from "./Mission.module.css";
import { useState, useRef } from "react";
import { gsap } from "gsap";
export const ShowMore = ({ ...props }) => {
  const [isShown, setIsShown] = useState(false);
  const item = props.content;
  const textLines = lines(item.text);
  const showRef = useRef(null),
    plusRef = useRef(null),
    textRef = useRef(null);

  function lines(text) {
    return text.split("\n");
  }

  function openShowTween() {
    const elements = textRef.current.querySelectorAll(
      `[data-animation="lines"]`
    );

    const height = (window.innerWidth / 1440) * 323;

    gsap.to(showRef.current, {
      height: height,
      duration: 0.3,
    });

    gsap.to(plusRef.current, {
      rotate: 90,
      x: -10,
      y: 10,
      duration: 0.3,
    });

    gsap.fromTo(
      elements,
      {
        y: -150,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.03,
        delay: 0.1,
      }
    );

    setIsShown(true);
  }

  function closeShowTween() {
    const elements = textRef.current.querySelectorAll(
      `[data-animation="lines"]`
    );

    const height = (window.innerWidth / 1440) * 110;

    gsap.to(showRef.current, {
      height: height,
      duration: 0.3,
      onComplete: setIsShown(false),
    });

    gsap.to(plusRef.current, {
      rotate: 0,
      x: 0,
      y: 0,
      duration: 0.3,
    });

    gsap.fromTo(
      elements,
      {
        autoAlpha: 1,
      },
      {
        autoAlpha: 0,
        duration: 0.2,
      }
    );
  }

  function handleShow() {
    if (isShown == false) {
      openShowTween();
    } else {
      closeShowTween();
    }
  }

  return (
    <>
      <div ref={showRef} onClick={handleShow} className={styles.list__item}>
        <div className={styles.list__btn}>
          <div className={styles.item__heading}>{item.heading}</div>
          <div className={styles.plus__wrapper}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={"100%"}
              height={"100%"}
              fill="none"
              viewBox="0 0 22 22"
              {...props}
            >
              <path
                className={styles.plus__rotating}
                ref={plusRef}
                fill="#979797"
                d="M10 0h2v22h-2z"
              />
              <path fill="#979797" d="M0 12v-2h22v2z" />
            </svg>
          </div>
        </div>
        <p ref={textRef} className={styles.item__text}>
          {textLines.map((line, index) => (
            <span
              key={index}
              className={styles.item__lines}
              data-animation="lines"
            >
              {line}
            </span>
          ))}
        </p>
      </div>
      <div className={styles.line}></div>
    </>
  );
};
