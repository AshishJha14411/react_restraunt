import React from 'react';
import { images } from '../../constants';
import './Chef.css';
import { SubHeading } from '../../components';
const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
    <img src={images.chef} alt='chef_image' />
    </div>
    <div className='app__wrapper_info'>
    <SubHeading title="Chef's Word" />
    <h1 className='headtext__cormorant'>
    What we believe in
    </h1>
    <div className='app__chef-content'>
      <div className='app__chef-content_quote'>
        <img src={images.quote} alt="quote_image" />
        <p className='p__opensans'>
        Nam pretium urna nec eros aliquam, in rhoncus odio sodales. Donec faucibus efficitur eros, et cursus urna. Phasellus id varius eros. Aliquam erat volutpat. Suspendisse eget purus tristique, feugiat dolor ut, fringilla felis. Nullam in odio lorem. Mauris hendrerit semper neque finibus semper. Donec vitae elementum felis.
        </p>
      </div>
        <p>
        Nam pretium urna nec eros aliquam, in rhoncus odio sodales. Donec faucibus efficitur eros, et cursus urna. Phasellus id varius eros. Aliquam erat volutpat. Suspendisse eget purus tristique, feugiat dolor ut, fringilla felis. Nullam in odio lorem. Mauris hendrerit semper neque finibus semper. Donec vitae elementum felis.
        </p>
    </div>
    <div className='app__chef-sign'>
      <p>Kevin Luo</p>
      <p className='p__opensans'>
        Chef & Founder
      </p>
      <img src={images.sign} alt='sign_image'/>
    </div>
    </div>
  </div>
);

export default Chef;
