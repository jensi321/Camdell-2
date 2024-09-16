import React from 'react'
import Header from '../Header'
import PageBanner from '../PageBanner'
import VoucherAll from '../User/VoucherAll'

const VouchersPages = () => {
    return (
        <>
        <Header/>
            <PageBanner title='Vouchers' />
            <VoucherAll />
        </>
    )
}

export default VouchersPages