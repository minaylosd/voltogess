import React, { useState } from "react";
import styles from "./Blog.module.css"
import { RevealDiv } from "../RevealDiv/RevealDiv"


export const Blog = React.forwardRef((props, ref) => {
    const [cards, setCards] = useState([
        {
            id: 1,
            category: "Insights",
            time: "10 min",
            article: "Academy",
            date: "05 June 2023",
            author: "Michael Johnson",
            description: "With Voltoges‘s commercial storage solutions, commercial and agricultural businesses can optimize their own consumption and thus increase their profitability and independence from the power grid. Voltoges‘s Commercial.",
            scale: 1,
            opacity: 1,
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
            description: "Batteries are specifically designed to meet the requirements of these industries. Thanks to the use of ecological redox flow technology, they are also excellent in terms of safety and durability.",
            scale: 1,
            opacity: 1,
        },
        {
            id: 3,
            category: "Insights",
            time: "8 min",
            article: "Applications",
            date: "22 June 2023",
            author: "Michael Johnson",
            description: "In light of advancing political and social efforts to combat climate change, the energy supply is currently in a state of comprehensive change. The generation and use of climate-friendly forms of energy is of crucial importance in this context.",
            scale: 1,
            opacity: 1,
        },
    ]);

    const handleMouseEnter = (id) => {
        const updatedCards = cards.map((card) => {
            if (card.id === id) {
                return { ...card };
            } else {
                return { ...card, scale: 0.95, opacity: 0.55 };
            }
        });

        setCards(updatedCards);
    };

    const handleMouseLeave = () => {
        const resetCards = cards.map((card) => ({
            ...card,
            scale: 1,
            opacity: 1
        }));

        setCards(resetCards);
    };
    
    return (
        <section className={styles.section} ref={ref}>
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
                        <RevealDiv key={card.id}>
                            <div
                                key={card.id}
                                className={styles.blog__item}
                                onMouseEnter={() => handleMouseEnter(card.id)}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    transform: `scale(${card.scale})`,
                                    opacity: card.opacity
                                }}
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
                                <p className={styles.description__column}>{card.description}</p>
                            </div>
                        </RevealDiv>  
                    ))}
                </div>
            </div>
        </section>
    )
});