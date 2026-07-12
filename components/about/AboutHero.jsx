import styles from "./AboutHero.module.css";


export default function AboutHero(){

    return(

        <section className={styles.hero}>


            <div className={styles.overlay}></div>


            <div className={styles.content}>


                <h1>
                    About Wander Within
                </h1>


                <p>
                    A safe and compassionate space where healing,
                    growth and self-discovery begin.
                </p>


            </div>


        </section>

    )

}