import React, { useContext, useEffect, useState } from 'react';
import { Container, Dropdown, DropdownButton, DropdownItem, Modal, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaHeart, FaMapMarkerAlt, FaSearch, FaUser, FaUserAlt } from 'react-icons/fa';
import { IoLogOut } from "react-icons/io5";
import { FaRegBell } from 'react-icons/fa6';
import { MdOutlineQrCodeScanner } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import Operatorlogin from './Operator/Operatorlogin';
import Login from './User/Login';
import Signup from './User/Signup';
import Location from './User/Location';
import ScanerModel from './User/ScanerModel';
import Notification from './User/Notification';
import Merchantlogin from './Merchant/LoginRegister/Merchantlogin';
import ReferralId from './User/ReferralId';
import { Avatar } from 'antd';
import { ProfileContext } from './Context/UserContext';
import axios from 'axios';
import { BaseUrl, CategoryApi, ImageUrl } from './BaseURL/BaseUrl';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedToken = sessionStorage.getItem('token');
    return storedToken !== null;
  });

  const navigate =useNavigate()

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

  const { profileImage, location, setLocation, setProfileImage,setLoyaltyPoint,setEndDate,loyaltyPoint,setWallet,setActiveTab, userId} = useContext(ProfileContext);

useEffect(() => {
  const fetchUserProfile = async () => {
    // console.log(userData)
    // const userId = userData.id
    try {
      const formData = {
        user_id: userId
      }

      console.log(userId)

      const response = await fetch(`${BaseUrl}/getuserprofile.php`, {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.data && data.data.length > 0) {
        setProfileImage(data.data[0].profile_image);
        setLocation(data.data[0].location);
        setLoyaltyPoint(data.data[0].loyalty_point);
        setEndDate(data.data[0].end_date);
        setWallet(data.data[0].wallet);
      } else {
        console.log('No user data found');
      }
    } catch (error) {
      console.error(error);
    }
  };
  fetchUserProfile();

},[setEndDate, setLocation, setProfileImage, userId,setWallet, setLoyaltyPoint])


  const handleWalletClick = () => {
    setActiveTab('4'); // Update the activeTab state to 4 (Wallet tab)
  };

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/')
    console.log('User LogOut Successfull');
    alert('You are LogOut Succesfully');
  };

  const handleClose = () => setShowModal(false);

  const handleMemberLogin = () => {
    setModalContent(<Login onClose={handleClose} onOpenMemberSignUp={handleMemberSignUp} onOpenReferralId={(userId) => handleReferralId(userId)} onLoginSuccess={() => {
      setIsLoggedIn(true);
    }} />);
    setShowModal(true);
  };

  const handleReferralId = (userId) => {
    setModalContent(<ReferralId onClose={handleClose} onOpenMemberLogin={handleMemberLogin} userId={userId} />);
    setShowModal(true);
  };

  const handleMemberSignUp = () => {
    setModalContent(<Signup onClose={handleClose} onOpenreferralId={(userId) => { handleReferralId(userId) }} onOpenMemberLogin={handleMemberLogin} />);
    setShowModal(true);
  };

  const handleMerchantLogin = () => {
    setModalContent(<Merchantlogin onClose={handleClose} />);
    setShowModal(true);
  };

  const handleOperatorLogin = () => {
    setModalContent(<Operatorlogin onClose={handleClose} />);
    setShowModal(true);
  };

  const handleOpenLocation = () => {
    setModalContent(
      <Location
        onClose={handleClose}
        onLocationChange={(location) => {
          setLocation(location);
        }}
      />
    );
    setShowModal(true);
  };

  const handlenotificition = () => {
    setModalContent(<Notification onClose={handleClose} />);
    setShowModal(true);
  };

  const handleOpenscaer = () => {
    setModalContent(<ScanerModel onClose={handleClose} />);
    setShowModal(true);
  }

  return (
    <>
      <Navbar expand="lg" className="">
        <div className="top">
          <Container>
            <div className={`header-inner row justify-content-center`}>
              <div className={`logo ${isLoggedIn ? 'col-3' : 'col-2'}`}>
                <div className="img-content">
                  <img src="assets/Image/logo.png" alt="Header Logo" />
                </div>
              </div>
              <div className={`info ${isLoggedIn ? 'col-8' : 'col-8'}`}>
                <div className="search">
                  <input type="text" name="search" id="search" placeholder='Search for the coupons , deals and  offers' />
                  <button><FaSearch /></button>
                </div>
                {!isLoggedIn ? null : (<div className="points">
                  <img src="assets/Image/Coins.png" alt="Coins Logo" />
                  <p>{loyaltyPoint}</p>
                </div>)}
                {isLoggedIn ? null : (
                  <DropdownButton id="dropdown-basic-button" className="login-dropdown" title="Members Login">
                    <DropdownItem as={Link} onClick={handleMemberLogin}>Member Login</DropdownItem>
                    <DropdownItem as={Link} onClick={handleMerchantLogin}>Merchant Login</DropdownItem>
                    <DropdownItem as={Link} onClick={handleOperatorLogin}>Operator Login</DropdownItem>
                  </DropdownButton>

                )}
                {!isLoggedIn ? null : <div className="scanner">
                  <Link onClick={handleOpenscaer}><MdOutlineQrCodeScanner /></Link>
                </div>}
                <div className="subscribe">
                  <Link onClick={handlenotificition}><FaRegBell />
                  </Link>
                </div>

                {!isLoggedIn ? null : <div className="loction-info" onClick={handleOpenLocation}>
                  <span><FaMapMarkerAlt /></span>
                  <p>{location}</p>

                </div>}


                {!isLoggedIn ? null :
                  <div className="avtar-img">
                    <Dropdown>
                      <Dropdown.Toggle variant="" id="dropdown-basic">
                        {profileImage ? (

                          <img src={`${ImageUrl}/${profileImage}`} alt="User Profile" />

                        ) : (

                          <Avatar size={50} icon={<FaUserAlt />} />

                        )}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <DropdownItem as={Link} to="/dashbord"> <FaUser /> Dashboard</DropdownItem>
                        <DropdownItem as={Link} to="/wishlist"><FaHeart /> Wishlist</DropdownItem>
                        <DropdownItem as={Link} to="" onClick={handleLogout}><IoLogOut />Logout</DropdownItem>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>}

              </div>
            </div>
          </Container>
        </div>
        <div className="bottom">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
            <Nav className="">
              <Nav.Link as={Link} to="/">All</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                {categories && categories.map((category, index) => (
                  <NavDropdown.Item as={Link} to={`/${category.name}`} key={index}>
                    {category.name}
                  </NavDropdown.Item>
                ))}

              </NavDropdown>
              <Nav.Link as={Link} to="/dicountcoupon">Discount</Nav.Link>
              <Nav.Link as={Link} to="/cashbackoffer">Cashback</Nav.Link>
              <Nav.Link as={Link} to="/voucher">Vouchers</Nav.Link>
              <Nav.Link as={Link} to="/dashbord" onClick={handleWalletClick}>Wallet</Nav.Link>
              <Nav.Link as={Link} to="/merchanthome">Merchants</Nav.Link>
            </Nav>
            {isLoggedIn ? null : (

              <DropdownButton id="dropdown-basic-button" className="login-dropdown" title="Members Login">

                <DropdownItem as={Link} onClick={handleMemberLogin}>Member Login</DropdownItem>

                <DropdownItem as={Link} onClick={handleMerchantLogin}>Merchant Login</DropdownItem>

                <DropdownItem as={Link} onClick={handleOperatorLogin}>Operator Login</DropdownItem>

              </DropdownButton>

            )}
            <div className="search">
              <input type="text" name="search" id="search" placeholder='Search for the coupons , deals and  offers' />
              <button><FaSearch /></button>
            </div>

          </Navbar.Collapse>
        </div>
      </Navbar>

      <Modal show={showModal} onHide={handleClose}>
        {modalContent}
      </Modal>

    </>
  )
}

export default Header