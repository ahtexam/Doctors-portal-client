import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
   

    return (
        <header>
            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className='lg:ml-20'>
                    <img src={chair} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className='lg:mr-20 text-black'>
                    <DayPicker
                     mode="single"
                     selected={selectedDate}
                     onSelect={setSelectedDate}
                    />
                    </div>
                </div>
            </div>   
        </header>
    );
};

export default AppointmentBanner;