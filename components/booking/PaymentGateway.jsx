import styles from "./PaymentGateway.module.css";


export default function PaymentGateway(){

    return (

        <div className={styles.card}>


            <h2>
                Secure Payment Gateway
            </h2>


            <div className={styles.paymentBox}>


                <h3>
                    Credit Card
                </h3>


                <input 
                placeholder="Credit Card Name"
                />


                <input 
                placeholder="Card Number"
                />


                <input 
                placeholder="Enter Code Password"
                />


                <button>
                    PROCESS PAYMENT
                </button>


            </div>


        </div>

    )

}