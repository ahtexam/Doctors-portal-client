import React from 'react';

const AppointmentOption = ({appointOption ,setTreatment }) => {
    const{name, slots}=appointOption;
    return (
        <div className="card  shadow-xl">
            <div className="card-body text-center">
                <h2 className=" justify-center card-title text-secondary text-2xl">{name}</h2>
                <p>{slots.length > 0? slots[0] : "Try Another Day "}</p>
                <p>{slots.length} {slots.length > 1? "spaces" : "space "} available</p>
                <div className="card-actions justify-center">
                 <label
                  disabled={slots.langth === 0}
                 htmlFor='Booking-Modal'
                  className='btn btn-secondary
                   text-white'
                   onClick={()=> setTreatment(appointOption)}
                   >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;