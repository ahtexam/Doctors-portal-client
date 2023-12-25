import React from 'react';

const Review = ({review}) => {
    const {name, img, review: userreview, location}= review;
    return (
        <div className="card text-accent  shadow-xl">
            <div className="card-body">
                <p>{userreview}</p>
                <div className="card-actions items-center mt-4">
                <div className="avatar">
                    <div className="w-16 mr-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} />

                    </div>
                    </div>
                    <div className='text-accent text-xl'>
                        <h4>{name}</h4>
                        <h4>{location}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;