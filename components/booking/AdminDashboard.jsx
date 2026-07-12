import styles from "./AdminDashboard.module.css";


export default function AdminDashboard(){

    return (

        <div className={styles.card}>


            <h2>
                Admin Dashboard
            </h2>



            <div className={styles.stats}>


                <div className={styles.box}>

                    <h3>
                        New Clients
                    </h3>

                    <span>
                        46
                    </span>

                    <p>
                        New Clients
                    </p>

                </div>



                <div className={styles.box}>

                    <h3>
                        Upcoming Appointments
                    </h3>

                    <span>
                        12
                    </span>

                    <p>
                        Scheduled
                    </p>

                </div>



                <div className={styles.box}>

                    <h3>
                        Form Submissions
                    </h3>

                    <span>
                        2
                    </span>

                    <p>
                        Submissions
                    </p>

                </div>


            </div>


        </div>

    )

}