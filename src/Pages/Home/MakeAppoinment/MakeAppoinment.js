import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'

const MakeAppoinment = () => {
    return (

        <div className='mt-32'
        style={{
            background: `url(${appointment})`
        }}
        >
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='' className=" -mt-32 hidden md:block rounded-lg lg:w-1/2" />
                    <div>
                    <h2 className='text-xl text-primary'>Appointment</h2>
                    <h1 className="text-4xl text-white font-bold">Make an appointment Today</h1>
                    <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAppoinment;