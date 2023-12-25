import React from 'react';
import quote from '../../../../src/assets/icons/quote.svg'
import people1 from '../../../../src/assets/images/people1.png';
import people2 from '../../../../src/assets/images/people2.png';
import people3 from '../../../../src/assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            id:1,
            img:people1,
            name:"Winson Herry",
            location:"California",
            review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id:1,
            img:people2,
            name:"Winson Herry",
            location:"California",
            review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id:1,
            img:people3,
            name:"Winson Herry",
            location:"California",
            review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                  <h2 className='text-xl text-primary font-bold'>Testimonial</h2>
                  <h1 className='text-3xl text-accent font-bold'>What Our Patients Says</h1>
                </div>
                <figure className='w-24 lg:w-48'>
                    <img src={quote} alt=''/>
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review =><Review
                    key={reviews.id}
                    review={review}
                    
                    ></Review>)
                }
            </div>
          
        </section>
    );
};

export default Testimonial;