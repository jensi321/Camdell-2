import React from 'react'
import CashbackStore from './MyCupon/CashbackStore'
import CuponOffer from './MyCupon/CuponOffer'
import VoucherCupon from './MyCupon/VoucherCupon'

const MyCupon = () => {
    return (
        <>
            <div className="mycupon-outer">
                
                        <CashbackStore />
                        <CuponOffer />
                        <VoucherCupon />
                    </div>
                
        </>
    )
}

export default MyCupon