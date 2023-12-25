import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimariButton from '../../../Components/PrimaryButton/PrimariButton';
const Dental = () => {
    return (
        <div>
            <div className="hero mt-20 ">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                        <div className='lg:ml-20 text-accent'>
                            <h1 className="text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <PrimariButton>GET START</PrimariButton>
                        </div>
                    </div>
             </div>
        </div>
    );
};

export default Dental;