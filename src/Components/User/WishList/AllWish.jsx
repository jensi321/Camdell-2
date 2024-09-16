import React from "react";
import CashBackOfferWishList from "./CashBackOfferWishList";
import CuponOfferWishList from "./CuponOfferWishlist";
import VoucherWishList from "./VoucherWishList";

const AllWish = () => {
return(
    <>
        <div className="allwish-outer">
        <CashBackOfferWishList/>
        <CuponOfferWishList/>
        <VoucherWishList/>
        </div>
    </>
)
}

export default AllWish