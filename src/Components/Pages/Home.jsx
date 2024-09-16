import React from 'react'
import TypeOfCategory from '../User/Home/TypeOfCategory'
import CashBack from '../User/Home/CashBack'
import Exclusive from '../User/Home/Exclusive'
import Treandincupon from '../User/Home/Treandincupon'
import Voucher from '../User/Home/Voucher'
import Subscribe from '../User/Home/Subscribe'
import TermsSetTimeOut from '../User/TermsSetTimeOut'
import Store from '../User/Home/Store'
import Subscriptionmodel from '../User/Subscriptionmodel'
import Header from '../Header'
import HeaderSlider from '../User/Home/Slider'

const Home = () => {
    return (
        <>
        <Header />
            <TermsSetTimeOut />
            <Subscriptionmodel/>
            <HeaderSlider />
            <TypeOfCategory />
            <CashBack />
            <Exclusive />
            <Treandincupon />
            <Store />
            <Voucher />
            <Subscribe />
        </>
    )
}

export default Home