import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook,FaInstagram,FaTwitter } from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>
            <div className='bg-light p-2'>
                <img src="https://assets.telegraphindia.com/abp/2022/Sep/1663937405_food-1.jpg" alt="" className='w-100 rounded-5' />
                <h5 className='text-center mt-3 mb-3'>
                Social media:
                </h5>
                <p className='p-2'>Here Is Our Social Media Address</p>
                <div className='p-3'>
                    <h6> <FaFacebook /> Facebook</h6>
                    <h6><FaInstagram /> Instagram</h6>
                    <h6><FaTwitter /> Twitter</h6>
                </div>
                
            </div>
        </div>
    );
};

export default RightNav;