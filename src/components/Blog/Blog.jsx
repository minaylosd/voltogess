import React, { useState, useEffect, useRef } from "react";
import styles from "./Blog.module.css";
import { RevealDiv } from "../RevealDiv/RevealDiv";
import cursorImage from "../../../public/images/cursorFollowImg1.png";
import Image from "next/image";
import { gsap } from "gsap";

export const Blog = (props) => {
  const cardRefs = useRef([]);

  const [cards, setCards] = useState([
    {
      id: 1,
      category: "Insights",
      time: "10 min",
      article: "Academy",
      date: "05 June 2023",
      author: "Michael Johnson",
      description:
        "With Voltoges‘s commercial storage solutions, commercial and agricultural businesses can optimize their own consumption and thus increase their profitability and independence from the power grid. Voltoges‘s Commercial.",
      scale: 1,
      opacity: 1,
      stickerScale: 0,
      stickerRadius: 9999,
    },
    {
      id: 2,
      scale: 1,
      opacity: 1,
      category: "Insights",
      time: "5 min",
      article: "Sources",
      date: "06 June 2023",
      author: "Elizabeth Ericson",
      description:
        "Batteries are specifically designed to meet the requirements of these industries. Thanks to the use of ecological redox flow technology, they are also excellent in terms of safety and durability.",
      scale: 1,
      opacity: 1,
      stickerScale: 0,
      stickerRadius: 9999,
    },
    {
      id: 3,
      category: "Insights",
      time: "8 min",
      article: "Applications",
      date: "22 June 2023",
      author: "Michael Johnson",
      description:
        "In light of advancing political and social efforts to combat climate change, the energy supply is currently in a state of comprehensive change. The generation and use of climate-friendly forms of energy is of crucial importance in this context.",
      scale: 1,
      opacity: 1,
      stickerScale: 0,
      stickerRadius: 9999,
    },
  ]);

  const handleMouseEnter = (id) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          stickerScale: 1,
          stickerRadius: "calc(var(--width-k) * 13)",
        };
      } else {
        return {
          ...card,
          scale: 0.95,
          opacity: 0.55,
          stickerScale: 0,
          stickerRadius: "calc(var(--width-k) * 13)",
        };
      }
    });

    setCards(updatedCards);
  };

  const handleMouseLeave = () => {
    const resetCards = cards.map((card) => ({
      ...card,
      scale: 1,
      opacity: 1,
      stickerScale: 0,
      stickerRadius: "calc(var(--width-k) * 13)",
    }));

    setCards(resetCards);
  };

  useEffect(() => {
    const gsapCards = Array.from(document.querySelectorAll(".movable"));

    gsap.set(gsapCards, { xPercent: -100, yPercent: -100 });

    var movable = document.querySelector(".movable");
    var pos = { x: window.innerWidth, y: window.innerHeight };
    var mouse = { x: pos.x, y: pos.y };
    var speed = 0.2;

    var fpms = 60 / 1000;

    var xSet = gsap.quickSetter(gsapCards, "x", "px");
    var ySet = gsap.quickSetter(gsapCards, "y", "px");

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    gsap.ticker.add((time, deltaTime) => {
      var delta = deltaTime * fpms;
      var dt = 2 - Math.pow(1.0 - speed, delta);

      pos.x += (0.5 * mouse.x - pos.x) * dt;
      pos.y += (0.5 * mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });
  }, []);

  useEffect(() => {
    let tween = gsap
      .fromTo(
        ".ticker",
        { xPercent: 0 },
        { xPercent: -25, repeat: -1, duration: 5, ease: "linear" }
      )
      .totalProgress(0);
  });

  return (
    <section className={`${styles.section} section`}>
      <div className={styles.content}>
        <div className={styles.heading__container}>
          <RevealDiv>
            <p className={styles.chapter}>
              <span className={styles.marker}>(04)</span>Blog
            </p>
          </RevealDiv>
          <div className={styles.heading}>
            <RevealDiv>
              <div>Some of our</div>
            </RevealDiv>
            <RevealDiv>
              <div>recent news</div>
            </RevealDiv>
          </div>
        </div>
        <div className={styles.blog__wrapper}>
          {cards.map((card) => (
            <RevealDiv
              key={card.id}
              style={{ transform: `scale(${card.scale})` }}
            >
              <div
                key={card.id}
                className={styles.blog__item}
                onMouseEnter={() => handleMouseEnter(card.id)}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `scale(${card.scale})`,
                  opacity: card.opacity,
                }}
                ref={(el) => cardRefs.current.push(el)}
              >
                <div className={styles.info__column}>
                  <div className={styles.info__wrapper}>
                    <div className={styles.category}>{card.category}</div>
                    <div className={styles.time}>{card.time}</div>
                  </div>
                  <h2 className={styles.article}>{card.article}</h2>
                  <div className={styles.info__wrapper}>
                    <div className={styles.info}>{card.date}</div>
                    <div className={styles.info}>{card.author}</div>
                  </div>
                </div>
                <div className="movable">
                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "calc(var(--width-k) * 13)",
                      width: "calc(var(--width-k) * 239)",
                      height: "calc(var(--width-k) * 179)",
                    }}
                  >
                    <Image
                      src={cursorImage}
                      alt="cursor image"
                      fill={true}
                      style={{
                        transform: `scale(${card.stickerScale})`,
                        transition: "transform 0.4s",
                        transitionTimingFunction: "ease-in-out",
                      }}
                    />
                    <div className={styles.sticker__wrapper}>
                      <div
                        className={styles.sticker}
                        style={{
                          transform: `scale(${card.stickerScale})`,
                          transition: "transform 0.4s",
                          transitionTimingFunction: "ease-in-out",
                        }}
                      >
                        <div
                          className={`${styles.sticker__text__wrapper} ticker`}
                        >
                          <p className={styles.sticker__text}>Coming soon</p>
                          <p className={styles.sticker__text}>Coming soon</p>
                          <p className={styles.sticker__text}>Coming soon</p>
                          <p className={styles.sticker__text}>Coming soon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className={styles.description__column}>{card.description}</p>
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
};
