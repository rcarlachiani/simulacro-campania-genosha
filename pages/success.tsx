import React from "react";
import Count from '../components/Count';
import Footer from '../components/Footer';

export async function getServerSideProps(context: any) {
    return {
        props: { 
           selectedDate: context.query.selectedDate ? context.query.selectedDate : null, 
           date: context.query.date ? context.query.date : null
        }
    }
}

const Success = (props: any) => {
    return (
        <div>
            <main className="flex flex-col items-center bg-center bg-cover" id='register-section' style={{ backgroundImage: "url(/images/wall2.png)" }}>   
                <Count
                    date={props.date}
                    selectedDate={props.selectedDate}
                />
            </main>
            <Footer />
        </div>
    )
}

export default Success