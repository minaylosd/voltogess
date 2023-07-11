import React from "react";
import styles from "./Action.module.css"
import Image from "next/image"
import Emoji from '/public/images/emoji.png'
import { RevealDiv } from "../RevealDiv/RevealDiv"

export const Action = React.forwardRef((props, ref) => {
    return (
        <section className={styles.section} ref={ref}>
            <div className={styles.content}>
                <RevealDiv>
                    <div className={styles.sticker__wrapper}>
                        <div className={styles.img__holder}>
                            <Image
                            src={Emoji}
                            fill={true}
                            alt="emoji"
                            />
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
    )
});