import React, { useEffect, useState } from 'react'

import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Subscriptionuser from './Components/Pages/Subscriptionuser';
import PaymentDetails from './Components/Pages/PaymentDetails';
import CashBackOfferPages from './Components/Pages/CashBackOfferPages';
import DiscountPage from './Components/Pages/DiscountPage';
import VouchersPages from './Components/Pages/VouchersPages';
import Home from './Components/Pages/Home';
import Dashbord from './Components/Pages/Dashbord';
import Automotive from './Components/Pages/Automotive';
import AboutUsPage from './Components/Pages/AboutUsPage';
import FaqPage from './Components/Pages/FaqPage';
import Partnerwithus from './Components/Pages/Partnerwithus';
import WishListPage from './Components/Pages/WishListPage';
import MerchantDesktop from './Components/Merchant/MerchantDesktop';
import DraftCuponPage from './Components/Merchant/DraftCuponPage';
import MerchantNewDeals from './Components/Merchant/MerchantNewDeals';
import MeachantLoginPage from './Components/Merchant/MeachantLoginPage';
import MearchntSubscriptionPage from './Components/Merchant/MearchntSubscriptionPage';
import AdsPromostion from './Components/Merchant/AdsPromostion';
import YourCuponPage from './Components/Merchant/YourCuponPage';
import ListofOperatorsPage from './Components/Merchant/ListofOperatorsPage';
import OperatorLoginPage from './Components/Merchant/OperatorLoginPage';
import Loyaltypointspage from './Components/Merchant/Loyaltypointspage';
import MearchentHome from './Components/Merchant/MearchentHome';
import MerchantCuponDescriptionPage from './Components/Merchant/MerchantCuponDescriptionPage';
import MearchntPaymentPage from './Components/Merchant/MearchntPaymentPage';
import OperatorDesktop from './Components/Operator/OperatorDesktop';
import OperatorNewDealsPage from './Components/Operator/OperatorNewDealsPage';
import OperatorDraftCuponspage from './Components/Operator/OperatorDraftCuponspage';
import OperatorMyCuponPage from './Components/Operator/OperatorMyCuponPage';
import MearchantStaticsPage from './Components/Merchant/MearchantStaticsPage';
import OperatorCuponDescription from './Components/Operator/OperatorCuponDescription';
import OperatorSubscriptionPage from './Components/Operator/OperatorSubscriptionPage';
import OperatorPymentpage from './Components/Operator/OperatorPymentpage';
import OperatorAdsPrmotionPage from './Components/Operator/OperatorAdsPrmotionPage';
import OperatorStaticPage from './Components/Operator/OperatorStaticPage';
import OperatorLoyaltyPoins from './Components/Operator/OperatorLoyaltyPoins';
import OperatorsListPage from './Components/Operator/OperatorsListPage';
import ScannerOptionPage from './Components/Operator/ScannerOptionPage';
import OperatorsLoginPage from './Components/Operator/OperatorsLoginPage';
import CashierScanner from './Components/Shoper/CashierScanner';
import Loader from './Components/Loader';
import axios from 'axios';
import { CategoryApi } from './Components/BaseURL/BaseUrl';
import CuponDescription from './Components/Pages/CuponDescriptionPage';



const App = () => {

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get(`${CategoryApi}/getcategory`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
      .then(function (response) {
        console.log(response.data.data);
        setCategories(response.data.data);
      })
      .catch(function (error) {
        console.error('There was an error making the request:', error);
      });
  }, []);

  return (
    <>

      <Loader />
      <Routes>

        {/* User Pages */}
        <Route path='/' element={<Home />} />
        {
          categories && categories.map((i) => (
            <Route key={i.id} path={`/${i.name}`} element={<Automotive categoryId={i.id} categoryName={i.name} />} />
          ))
        }
        <Route path='/cupondescription' element={<CuponDescription />} />
        <Route path='/subscription' element={<Subscriptionuser />} />
        <Route path='/pymentdetails' element={<PaymentDetails />} />
        <Route path='/cashbackoffer' element={<CashBackOfferPages />} />
        <Route path='/dicountcoupon' element={<DiscountPage />} />
        <Route path='/voucher' element={<VouchersPages />} />
        <Route path='/dashbord' element={<Dashbord />} />
        <Route path='/aboutus' element={<AboutUsPage />} />
        <Route path='/faq' element={<FaqPage />} />
        <Route path='/partnerwithus' element={<Partnerwithus />} />
        <Route path='/wishlist' element={<WishListPage />} />


        {/* Mearchnt Pages */}
        <Route path='/merchanthome' element={<MearchentHome />} />
        <Route path='/merchantsignup' element={<MeachantLoginPage />} />
        <Route path='/merchantdesktop' element={<MerchantDesktop />} />
        <Route path='/newdeals' element={<MerchantNewDeals />} />
        <Route path='/draftcupon' element={<DraftCuponPage />} />
        <Route path='/adsprmotiondescription' element={<MerchantCuponDescriptionPage />} />
        <Route path='/mearchntsubscription' element={<MearchntSubscriptionPage />} />
        <Route path='/mearchntpayment' element={<MearchntPaymentPage />} />
        <Route path='/adsprmotion' element={<AdsPromostion />} />
        <Route path='/yourcupon' element={<YourCuponPage />} />
        <Route path='/opertors' element={<ListofOperatorsPage />} />
        <Route path='/opertorslogin' element={<OperatorLoginPage />} />
        <Route path='/loyaltypoints' element={<Loyaltypointspage />} />
        <Route path='/mearchntstatics' element={<MearchantStaticsPage />} />


        {/* Operator Page */}

        <Route path='/operatordesktop' element={<OperatorDesktop />} />
        <Route path='/operatornewdeal' element={<OperatorNewDealsPage />} />
        <Route path='/operatordraftcupon' element={<OperatorDraftCuponspage />} />
        <Route path='/operatormycupons' element={<OperatorMyCuponPage />} />
        <Route path='/operatorcupondes' element={<OperatorCuponDescription />} />
        <Route path='/operatorsubsription' element={<OperatorSubscriptionPage />} />
        <Route path='/operatorpayment' element={<OperatorPymentpage />} />
        <Route path='/operatoradspromotion' element={<OperatorAdsPrmotionPage />} />
        <Route path='/operatorstatic' element={<OperatorStaticPage />} />
        <Route path='/operatorloyaltypoints' element={<OperatorLoyaltyPoins />} />
        <Route path='/opertorlogin' element={<OperatorsLoginPage />} />
        <Route path='/operatormanager' element={<OperatorsListPage />} />
        <Route path='/scanneroption' element={<ScannerOptionPage />} />


        {/* Shoper Page */}

        <Route path='/shoper' element={<CashierScanner />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
