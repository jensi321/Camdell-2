import React from "react";
import Header from "../Header";
import PageBanner from "../PageBanner";
import WishList from "../User/WishList";

const WishListPage = () =>{
    return(
        <>
        <Header/>
            <PageBanner title='Wish List'/>
            <WishList/>
        </>
    )
}

export default WishListPage