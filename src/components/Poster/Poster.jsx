import styles from "./Poster.module.css"
import Image from "next/image"
import Photo from "../../../public/images/img1.jpg"

export const Poster = () => {
    return (
      <section className={styles.section}>
        <div className={styles.poster}>
            <div className={styles.poster__img_wrapper}>
                <Image 
                    src={Photo}
                    fill={true}
                    alt="photo"
                />
            </div>
            <div className={styles.poster__img_description}>
                <p className={styles.motto}>
                    Transforming for growth
                </p>
                <p className={styles.place}>
                    Based in California, USA
                </p>
            </div>
        </div>
      </section>
    )
  }