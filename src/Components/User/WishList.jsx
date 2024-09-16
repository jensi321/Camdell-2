import { Tabs } from "antd";
import React from "react";
import AllWish from "./WishList/AllWish";
import CashBackOfferWishList from "./WishList/CashBackOfferWishList";
import CuponOfferWishList from "./WishList/CuponOfferWishlist";
import VoucherWishList from "./WishList/VoucherWishList";

const WishList = () =>{
    return(
        <>
            <div className="wishlist-outer">
                
                    <Tabs
            className="coupontab"
    defaultActiveKey="1"
    centered
    items={[
      {
        label: 'All',
        key: '1',
        children: <AllWish/>,
      },
      {
        label: 'Cashback',
        key: '2',
        children: <CashBackOfferWishList/>,
      },
      {
        label: 'Vouchers',
        key: '3',
        children: <VoucherWishList/>,
      },
      {
        label: 'Offers Coupons',
        key: '4',
        children: <CuponOfferWishList/>,
      },
    ]}
  />
            </div>
        </>
    )
}

export default WishList