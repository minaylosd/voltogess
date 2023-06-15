import styles from "./Action.module.css"
import Image from "next/image"
import Emoji from '/public/images/emoji.png'


export const Action = () => {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles.sticker__wrapper}>
                    <div className={styles.img__holder}>
                        <Image
                        src={Emoji}
                        fill={true}
                        />
                    </div>
                </div>
                <div>
                    <div className={styles.heading}>Don&#8217;t be shy it&#8217;s</div>
                    <div className={styles.heading}>time to say hello!</div>
                    <div className={styles.heading}>send us email</div>
                    <button className={styles.btn}>Write email to us</button>
                </div>
            </div>
        </section>
    )
}