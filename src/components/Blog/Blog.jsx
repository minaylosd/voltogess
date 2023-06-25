import React from "react";
import styles from "./Blog.module.css"
import { RevealDiv } from "../RevealDiv/RevealDiv"

export const Blog = React.forwardRef((props, ref) => {
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
                    <RevealDiv>
                        <div className={styles.blog__item}>
                            <div className={styles.info__column}>
                                <div className={styles.info__wrapper}>
                                    <div className={styles.category}>Insights</div>
                                    <div className={styles.time}>10 min</div>
                                </div>
                                <h2 className={styles.article}>Academy</h2>
                                <div className={styles.info__wrapper}>
                                    <div className={styles.info}>05 June 2023</div>
                                    <div className={styles.info}>Michael Johnson</div>
                                </div>
                            </div>
                            <p className={styles.description__column}>With Voltoges&#8216;s commercial storage solutions, commercial and agricultural businesses can optimize their own consumption and thus increase their profitability and independence from the power grid. Voltoges&#8216;s Commercial.</p>
                        </div>
                    </RevealDiv>
                    <RevealDiv>
                        <div className={styles.blog__item}>
                            <div className={styles.info__column}>
                                <div className={styles.info__wrapper}>
                                    <div className={styles.category}>Insights</div>
                                    <div className={styles.time}>5 min</div>
                                </div>
                                <h2 className={styles.article}>Sources</h2>
                                <div className={styles.info__wrapper}>
                                    <div className={styles.info}>06 June 2023</div>
                                    <div className={styles.info}>Elizabeth Ericson</div>
                                </div>
                            </div>
                            <p className={styles.description__column}>Batteries are specifically designed to meet the requirements of these industries. Thanks to the use of ecological redox flow technology, they are also excellent in terms of safety and durability.</p>
                        </div>
                    </RevealDiv>
                    <RevealDiv>
                        <div className={styles.blog__item}>
                            <div className={styles.info__column}>
                                <div className={styles.info__wrapper}>
                                    <div className={styles.category}>Insights</div>
                                    <div className={styles.time}>8 min</div>
                                </div>
                                <h2 className={styles.article}>Applications</h2>
                                <div className={styles.info__wrapper}>
                                    <div className={styles.info}>22 June 2023</div>
                                    <div className={styles.info}>Michael Johnson</div>
                                </div>
                            </div>
                            <p className={styles.description__column}>In light of advancing political and social efforts to combat climate change, the energy supply is currently in a state of comprehensive change. The generation and use of climate-friendly forms of energy is of crucial importance in this context.</p>
                        </div>
                    </RevealDiv>
                </div>
            </div>
        </section>
    )
});