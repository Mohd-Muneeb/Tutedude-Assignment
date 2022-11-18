import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import FooterLinks from '../components/FooterLinks';
import Navbar from '../components/Navbar';
import ReferralData from '../components/ReferralData';
import ReferralRules from '../components/ReferralRules';

const Refer = () => {

    console.log("asdad")
    return (
        <div className='bg-[#FFFFFF] m-0 p-0 min-h-screen min-w-screen relative font-poppins'>
            <Navbar />
            <div className="max-w-full  max-h-full mt-[75px] absolute mb-8">
                <BreadCrumb />
                <div className='bg-[#E5E5E5]'>
                    <ReferralData />
                    <ReferralRules />
                    <FooterLinks />
                </div>
            </div>
        </div>
    )
}

export default Refer;