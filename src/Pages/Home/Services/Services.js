import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';



const Services = () => {

    const serviceData = [

        {
            id:1,
            name:'Fluoride Treatment',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:fluoride
        },  

        {
            id:2,
            name:'Cavity Filling',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:cavity
        },  

        {
            id:3,
            name:'Teeth Whitening',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:whitening
        }  
    ]
    return (
        <div className='mt-24 text-accent'>
            <div>
                <h2 className='text-xl font-bold text-primary text-center '>OUR SERVISES</h2>
                <h1 className='text-3xl text-center '>Services We Provide</h1>
            </div>
            <div className='grid gap-6 mt-10 lg:grid-cols-3 md:grid-flow-cols-2 sm:grid-cols-1'>
                {
                    serviceData.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;