import React from 'react'
import EarningsData from './EarningsData'
import ReferralCode from './ReferralCode'

const ReferralData = () => {
    return (
        <div className='w-screen  h-full'>
            <div className='flex w-[80vw] flex-col md:flex-row h-full ml-[10vw]  py-8 justify-between items-start'>
                <EarningsData />
                <div className='mx-8 mt-12 md:mt-0'>
                    <ReferralCode />
                </div>
            </div>
        </div>
    )
}

export default ReferralData