import { createContext, useState, useEffect } from 'react';

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [token,] = useState(sessionStorage.getItem('token'));
  const [userData, setUserData] = useState();
  const [profileImage, setProfileImage] = useState();
  const [location, setLocation] = useState('');
  const [planId, setPlanId] = useState();
  const [planName, setPlanName] = useState();
  const [loyaltyPoint, setLoyaltyPoint] = useState('');
  const [planPrice, setPlanPrice] = useState();
  const [userId, setUserId] = useState();
  const [endDate, setEndDate] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [activeTab, setActiveTab] = useState('1');
  const [cuponid, setCuponid] = useState('');
  const [couponInfo, setCouponInfo] = useState({});
  const [wallet, setWallet] = useState();
  const [isLiked, setIsLiked] = useState(0); 

  useEffect(() => {
    if (token) {
      const userData = JSON.parse(token);
      setUserData(userData);
      setUserId(userData.id);
    }
  }, [token]);

  useEffect(() => {
    if (userData) {
      // You can also set other user data here
      setUserName(userData.name);
      setEmail(userData.email);
      setMobile(userData.mobile);
    }
  }, [userData]);

  console.log(userId);

  return (
    <ProfileContext.Provider
      value={{
        profileImage,
        setProfileImage,
        location,
        setLocation,
        planId,
        setPlanId,
        planName,
        setPlanName,
        planPrice,
        setPlanPrice,
        userId,
        setUserId,
        loyaltyPoint,
        setLoyaltyPoint,
        endDate,
        setEndDate,
        userName,
        setUserName,
        email,
        setEmail,
        mobile,
        setMobile,
        activeTab,
        setActiveTab, 
        cuponid, 
        setCuponid,
        couponInfo,
        setCouponInfo,
        wallet,
        setWallet,
        isLiked,
        setIsLiked
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileProvider, ProfileContext };