import React, { useState, useEffect, useRef } from "react";
import styles from "./Blog.module.css";
import { RevealDiv } from "../RevealDiv/RevealDiv";
import { gsap } from "gsap";

export const Blog = (props) => {
  const cardRefs = useRef([]);
  // const sectionRef = useRef(null);

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
    // sectionRef.current.removeEventListener("click", sectionRef.current.fn);
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
    const cards = document.querySelectorAll(".card-animation");
    const width = window.innerWidth;
    const height = window.innerHeight;
    cards.forEach((card) => {
      const movable = card.querySelector(".movable");
      const movableWidth = movable.getBoundingClientRect().width;
      const movableHeight = movable.getBoundingClientRect().height;
      card.addEventListener("mousemove", function (event) {
        let posX = event.screenX - 0.5 * width - 0.5 * movableWidth;
        let posY = event.screenY - 0.5 * height - 0.5 * movableHeight;
        gsap.to(movable, { y: posY, x: posX, delay: 0.2 });
      });
    });
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
                id={card.id}
                key={card.id}
                className={`${styles.blog__item} card-animation`}
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
                    <img
                      src="/images/img2.jpg"
                      alt="cursor image"
                      style={{
                        width: "100%",
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
