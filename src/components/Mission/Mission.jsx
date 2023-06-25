import React from "react";
import styles from "./Mission.module.css"
import Map from "./Map"
import Plus from "./Plus"
import { RevealDiv } from "../RevealDiv/RevealDiv"

export const Mission = React.forwardRef((props, ref) => {
    return (
        <section className={styles.section} ref={ref}>
            <div className={styles.heading__container}>
                <RevealDiv>
                    <p className={styles.chapter}>
                        <span className={styles.marker}>(02)</span>Mission
                    </p>
                </RevealDiv>
                <RevealDiv>
                    <div className={styles.heading}>Future of energy,</div>
                </RevealDiv>
                <RevealDiv>
                    <div className={styles.heading}>Ecological technology,</div>
                </RevealDiv>
                <RevealDiv>
                    <div className={styles.heading}>Power from renewable</div>
                </RevealDiv>
                <RevealDiv>
                    <div className={styles.heading}>Sources</div>
                </RevealDiv>
            </div>
            <div className={styles.main__container}>
                <div className={styles.map__wrapper}>
                    <Map />
                </div>
                <div className={styles.mission__list}>
                    <RevealDiv>
                        <div className={styles.line}></div>
                        <div className={styles.list__item}>
                            <div className={styles.item__name}>Infrastructure</div>
                            <div className={styles.plus__wrapper}>
                                <Plus />
                            </div>
                        </div>
                        <div className={styles.line}></div> 
                    </RevealDiv>
                    <RevealDiv>
                        <div className={styles.list__item}>
                            <div className={styles.item__name}>Security management</div>
                            <div className={styles.plus__wrapper}>
                                <Plus />
                            </div>
                        </div>
                        <div className={styles.line}></div>
                    </RevealDiv>
                    <RevealDiv>
                        <div className={styles.list__item}>
                            <div className={styles.item__name}>Reduction</div>
                            <div className={styles.plus__wrapper}>
                                <Plus />
                            </div>
                        </div> 
                        <div className={styles.line}></div> 
                    </RevealDiv>
                </div>
            </div>
        </section>
    )
});