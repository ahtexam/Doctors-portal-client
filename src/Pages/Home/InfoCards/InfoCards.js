import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';


const InfoCards = () => {
    const cardData= [
        {
            id: 1,
            name: "Opening hours",
            description:"open 10am to 4pm ",
            icon:clock,
            bgclass: 'bg-gradient-to-r from-secondary to-primary'
        },
        {
            id: 2,
            name: "Visit our location",
            description:"open Brooklyn, NY 10036, United States ",
            icon:marker,
            bgclass: 'bg-accent'
        },
        {
            id: 3,
            name: "Contact us now",
            description:"+000 123 456789",
            icon:phone,
            bgclass: 'bg-gradient-to-r from-secondary to-primary'
        },
    ]
    return (
        <div className='grid gap-6 mt-10 lg:grid-cols-3 md:grid-flow-cols-2 sm:grid-cols-1'>
          {
            cardData.map(card=> <InfoCard
            key={card.id}
            card={card}
            ></InfoCard>)
          }
        </div>
    );
};

export default InfoCards;