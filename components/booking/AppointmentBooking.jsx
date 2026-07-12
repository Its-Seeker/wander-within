import styles from "./AppointmentBooking.module.css";


export default function AppointmentBooking(){

    return(

        <div className={styles.card}>


            <h2>
                Online Appointment Booking
            </h2>


            <div className={styles.calendlyBox}>


                <div className={styles.header}>

                    Calendly

                </div>



                <div className={styles.content}>


                    <div className={styles.left}>

                        <h4>
                            Appointments
                        </h4>


                        <p>
                            Available Time
                        </p>


                        <p>
                            ● Consultation Session
                        </p>


                        <p>
                            📅 Online Meeting
                        </p>


                    </div>



                    <div className={styles.right}>


                        <h4>
                            Available Time
                        </h4>


                        <div className={styles.times}>


                            <button>
                                6:00 AM
                            </button>


                            <button>
                                8:00 AM
                            </button>


                            <button>
                                3:00 PM
                            </button>


                            <button>
                                5:00 PM
                            </button>


                            <button>
                                7:00 PM
                            </button>


                            <button>
                                12:00 PM
                            </button>


                        </div>


                    </div>


                </div>


            </div>


        </div>

    )

}