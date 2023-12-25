import React from 'react';
import chair from '../../../assets/images/chair.png';
import bgchair from '../../../assets/images/bg.png'
import PrimariButton from '../../../Components/PrimaryButton/PrimariButton';
const Banner = () => {
    return (
        <div>
            <div className="hero text-accent">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='' src={chair} className=" rounded-lg shadow-2xl lg:w-1/2" />
                    <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimariButton></PrimariButton>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Banner;