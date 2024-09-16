import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BaseUrl } from "../../BaseURL/BaseUrl";
import { ProfileContext } from "../../Context/UserContext";
import CashbackItems from "../../Items/CashbackItems";

const CashBackOfferWishList = () => {
  // const cashback = [
  //     {
  //         img: 'assets/Image/amzon.png',
  //         sale: 'Up to 760% off + Extra 5% offer on EMI',

  //     },
  //     {
  //         img: 'assets/Image/realme.png',
  //         sale: 'Up to 760% off + Extra 5% offer on EMI',

  //     },
  //     {
  //         img: 'assets/Image/nike.png',
  //         sale: 'Up to 760% off + Extra 5% offer on EMI',

  //     },
  //     {
  //         img: 'assets/Image/acer-logo.png',
  //         sale: 'Up to 760% off + Extra 5% offer on EMI',

  //     },
  //     {
  //         img: 'assets/Image/acer-logo.png',
  //         sale: 'Up to 760% off + Extra 5% offer on EMI',

  //     },
  //     {
  //         img: 'assets/Image/drema.png',
  //         sale: 'Up to 760% off + Extra 5% offer on EMI',

  //     },
  //     {
  //         img: 'assets/Image/udemy.png',
  //         sale: 'Up to 760% off + Extra 5% offer on EMI',

  //     },
  //     {
  //         img: 'assets/Image/amzon.png',
  //         sale: 'Up to 760% off + Extra 5% offer on EMI',

  //     },
  //     {
  //         img: 'assets/Image/realme.png',
  //         sale: 'Up to 760% off + Extra 5% offer on EMI',

  //     },
  //     {
  //         img: 'assets/Image/nike.png',
  //         sale: 'Up to 760% off + Extra 5% offer on EMI',

  //     },
  // ]

  const [cashback, setCashback] = useState([]);
  const { userId  } = useContext(ProfileContext);

  useEffect(() => {


    const formdata = {
      user_id: userId
    }

    console.log(formdata)
    const fetchCoupons = async () => {

      try {

          const response = await axios.post(`${BaseUrl}/getcouponcode.php`, formdata);

          const data = response.data.data;

          if (Array.isArray(data)) {

              setCashback(data);
              console.log("data", data)
              

          } else {

              console.error("API response is not an array");

          }

          console.log(response.data.data)

      } catch (error) {

          console.error(error);

      }

  };
    fetchCoupons();
  }, [userId]);

  return (
    <>
      <div className="cashback-store">
        <div className="container">
          <div className="cashback-store-inner">

            <div className="heading">
              <h3>cash back stores</h3>
            </div>
            <div className="row cashback">
            {cashback.filter(coupon => coupon.coupon_type === "cashback" && coupon.is_liked === 1).length > 0 ? (
                                cashback.filter(coupon => coupon.coupon_type === "cashback" && coupon.is_liked === 1).map((coupon, index) => (
                                    <CashbackItems key={index} value={coupon} />
                                ))
                            ) : (
                                <div className="no-coupons-message">
                                    <b>Your cashback offer wishlist is blank</b>
                                </div>
                            )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CashBackOfferWishList;