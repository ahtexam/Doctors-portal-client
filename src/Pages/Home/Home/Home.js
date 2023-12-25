import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import Dental from '../Dental/Dental';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Testimonial from '../Testimonial/Testimonial';
import Countact from '../Countact/Countact';



const Home = () => {
    return (
        <div className='mx-5'>
          <Banner></Banner>
          <InfoCards></InfoCards>
          <Services></Services>
          <Dental></Dental>
          <MakeAppoinment></MakeAppoinment>
          <Testimonial></Testimonial>
          <Countact></Countact>
        </div>
    );
};

export default Home;