import IntakeForm from "@/components/booking/IntakeForm";
import AppointmentBooking from "@/components/booking/AppointmentBooking";
import PaymentGateway from "@/components/booking/PaymentGateway";
import AdminDashboard from "@/components/booking/AdminDashboard";


export default function BookingPage(){

    return(

        <main className="bookingPage">


            <div className="leftSide">

                <IntakeForm />

                <AdminDashboard />

            </div>



            <div className="rightSide">

                <AppointmentBooking />

                <PaymentGateway />

            </div>



        </main>

    )

}