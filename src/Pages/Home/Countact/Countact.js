import React from 'react';
import appointment2 from '../../../../src/assets/images/appointment.png';
import PrimariButton from '../../../Components/PrimaryButton/PrimariButton';


const Countact = () => { 
    
    return (
        <div className=''
        style={{
            background: `url(${appointment2})`
        }}
        >
          <div className='flex justify-center p-20'> 
                <div className="card  max-w-sm shadow-2xl bg-base-100 ">
                <div className='text-center'>
                <h2 className='text-primary text-xl font-semibold'>Contact</h2>
                <h1 className='text-white text-2xl font-semibold'>Stay connected with us</h1>
              </div>    
                    <form className="card-body">
                        <div className="form-control">
                            <input type="email" placeholder="email" className="bg-white input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Subject" className="bg-white input input-bordered" required />
                        </div>
                        <div>
                            <input type="text" placeholder="Message" className=" bg-white input input-bordered h-20" required />      
                        </div>
                        <div className="form-control mt-6">
                            <PrimariButton>Submit</PrimariButton>
                        </div>
                    </form>
                </div>
            </div>  
        </div>
    );
};

export default Countact;