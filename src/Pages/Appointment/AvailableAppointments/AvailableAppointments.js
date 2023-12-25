import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointments = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions]= useState([]);
    const [treatment, setTreatment]= useState(null);
    useEffect(()=>{
        fetch('http://localhost:5000/appintmentOptions')
        .then(res =>res.json())
        .then(data =>setAppointmentOptions(data))
    },[]);
    return (
        <section>
            <p className='text-center text-secondary text-bold mt-20'>Available Services on {format(selectedDate, 'PP')}</p>
            <div className='grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-accent'>
                {
                    appointmentOptions.map(options=> <AppointmentOption
                    appointOption={options}
                    setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
           {
           treatment &&
           <BookingModal
            selectedDate={selectedDate}
            treatment={treatment}
            setTreatment={setTreatment}
           ></BookingModal>}

        </section>
    );
};

export default AvailableAppointments;