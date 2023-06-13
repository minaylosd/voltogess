import styles from "./Mission.module.css"
import Map from "./Map"
import Plus from "./Plus"

export const Mission = () => {
    return (
        <section className={styles.section}>
            <div className={styles.heading__container}>
                <p className={styles.chapter}>
                    <span className={styles.marker}>(02)</span>Mission
                </p>
                <div className={styles.heading}>Future of energy,</div>
                <div className={styles.heading}>Ecological technology,</div>
                <div className={styles.heading}>Power from renewable</div>
                <div className={styles.heading}>Sources</div>
            </div>
            <div className={styles.main__container}>
                <div className={styles.map__wrapper}>
                    <Map />
                </div>
                <div className={styles.mission__list}>
                    <div className={styles.list__item}>
                        <div className={styles.item__name}>Infrastructure</div>
                        <div className={styles.plus__wrapper}>
                            <Plus />
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.list__item}>
                        <div className={styles.item__name}>Security management</div>
                        <div className={styles.plus__wrapper}>
                            <Plus />
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.list__item}>
                        <div className={styles.item__name}>Reduction</div>
                        <div className={styles.plus__wrapper}>
                            <Plus />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}