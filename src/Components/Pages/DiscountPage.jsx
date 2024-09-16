import React from 'react'
import Discountcoupon from '../User/Discountcoupon'
import PageBanner from '../PageBanner'
import Header from '../Header'

const DiscountPage = () => {
    return (
        <>
        <Header/>
            <PageBanner title='Discount Coupons' />
            <Discountcoupon />
        </>
    )
}

export default DiscountPage