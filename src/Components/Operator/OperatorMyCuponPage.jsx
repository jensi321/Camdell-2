import React from 'react'
import PageBanner from '../PageBanner'
import OperatorHeader from './OperatorHeader'
import YourCupon from '../ComponentItems/YourCupon/YourCupon'

const OperatorMyCuponPage = () => {
    return (
        <>
            <OperatorHeader />
            <PageBanner title='YOUR COUPONS' />
            <YourCupon />
        </>
    )
}

export default OperatorMyCuponPage
