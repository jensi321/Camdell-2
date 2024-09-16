import React, { useState } from 'react'
import Orderlist from './Loyaltypoints/Orderlist';
import BestDeal from './Loyaltypoints/BestDeal';

const LoyaltyPoints = () => {


    const [showOrderList, setShowOrderList] = useState(false);





    return (
        <>

            {showOrderList ? (
                <Orderlist />
            ) : (
                <BestDeal setShowOrderList={() => setShowOrderList(true)} />
            )
            }


        </>
    )
}

export default LoyaltyPoints