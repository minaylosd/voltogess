import React from "react";
import styles from "./Poster.module.css"
import Image from "next/image"
import Photo from "../../../public/images/img1.jpg"
import { RevealDiv } from "../RevealDiv/RevealDiv"

export const Poster = React.forwardRef((props, ref) => {
    return (
      <section className={styles.section} ref={ref}>
        <div className={styles.poster}>
            <div className={styles.poster__img_wrapper}>
                <Image 
                    src={Photo}
                    fill={true}
                    alt="photo"
                />
            </div>
            <div className={styles.poster__img_description}>
                <RevealDiv>
                    <div className={styles.motto}>
                        Transforming for growth
                    </div>
                </RevealDiv>
                <RevealDiv>
                    <div className={styles.place}>
                        Based in California, USA
                    </div>
                </RevealDiv>
            </div>
        </div>
      </section>
    )
  });