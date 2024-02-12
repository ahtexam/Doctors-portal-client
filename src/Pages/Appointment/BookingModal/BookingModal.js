import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({treatment, setTreatment, selectedDate }) => {
    const {name, slots}=treatment;
    const date= format(selectedDate, "PP")
    const {user} = useContext(AuthContext);

    const handleBooking = event =>{
        event.preventDefault();
        const form= event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking ={
            appointDate: date,
            treatment: name,
            patient: name,
            slot,
            email, 
            phone,
        }


        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            setTreatment(null);
            alert('Your booking confirmed');
        })

        
    }
    return (
        <div>
            <input type='checkbox' id='Booking-Modal' className='modal-toggle'/>
            <div className='modal '>
             <div className='modal-box relative text-accent bg-white'>
                <label htmlFor='Booking-Modal' className='btn btn-sm btn-circle absolute right-2 top-2'>✕</label>
                <h3 className='text-lg font-bold'>{name}</h3>
                <form onSubmit={handleBooking} className="grid gap-3 grid-cols-1 mt-10">
                        <input name='date' type="text"  bg-white value={date} className=" disabled input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full ">
                            {
                                slots.map((slot, i) =>
                                 <option value={slot}
                                 key={i}
                                 >{slot}</option>
                                )
                            }
                        </select>         
                        <input name='name' type="text" defaultValue={user?.displayName}readOnly placeholder="Your Name" className="input input-bordered w-full " />      
                        <input name='email' type="email" defaultValue={user?.email} readOnly placeholder="Your Email" className="input input-bordered w-full " />      
                        <input name='phone' type="text" placeholder="Your phone" className="input input-bordered w-full " />
                        <br/> 
                        <input className=' btn btn-accent w-full mex-w-xm' type='submit' value='Submit'/>     
                </form>
             </div>
            </div>
        </div>
    );
};

export default BookingModal;