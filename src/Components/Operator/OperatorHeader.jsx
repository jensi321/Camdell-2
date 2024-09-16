import { Avatar } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { Container, Dropdown, DropdownItem, Modal, Nav, Navbar } from 'react-bootstrap';
import { FaRegBell, FaSearch, FaUserAlt } from 'react-icons/fa';
import { IoLogOut } from 'react-icons/io5';
import { MdOutlineQrCodeScanner } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { ImageUrl } from '../BaseURL/BaseUrl';
import { ProfileContext } from '../Context/UserContext';
import Notification from '../User/Notification';

const OperatorHeader = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const { token, profileImage,setProfileImage, loyaltyPoint,setLoyaltyPoint,  setUserData } = useContext(ProfileContext);

    useEffect(() => {
        if (token) {
          const userData = JSON.parse(token);
          setUserData(userData);
          setProfileImage(userData.profileImage); // Add this line
          setLoyaltyPoint(userData.loyaltyPoint); // Add this line
        }
      }, [token,setLoyaltyPoint,setProfileImage,setUserData]);

    const naveigate = useNavigate();

    const handleClose = () => setShowModal(false);


    const handlenotificition = () => {
        setModalContent(<Notification onClose={handleClose} />)
        setShowModal(true);
    }

    const handleLogout = () => {
        sessionStorage.removeItem('operatorData');
        console.log("navigate")
        naveigate('/opertorlogin')
    }
    return (
        <>
            <Navbar expand="lg" className="merchantheader">
                <div className="top">
                    <Container>
                        <div className="header-inner row">


                            <div className="logo col-2">
                                <div className="img-content">
                                    <img src="assets/Image/logo.png" alt="Header Logo" />

                                </div>
                            </div>
                            <div className="info col-8">
                                <div className="search">
                                    <input type="text" name="search" id="search" placeholder='Search for the coupons , deals and  offers' />
                                    <button><FaSearch /></button>
                                </div>
                                <Link to={'/operatorloyaltypoints'} className="points">
                                    <img src="assets/Image/Coins.png" alt="Coins Logo" />
                                    <p>{loyaltyPoint}</p>
                                </Link>






                                <div className="subscribe">
                                    <Link onClick={handlenotificition}><FaRegBell />
                                    </Link>
                                </div>

                                <div className="scanner">
                                    <Link to={'/scanneroption'}><MdOutlineQrCodeScanner /></Link>
                                </div>

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
                                            <DropdownItem as={Link} to="" onClick={handleLogout}><IoLogOut /> Logout</DropdownItem>

                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="bottom">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                        <Nav className="">
                            <Nav.Link as={Link} to="/operatordesktop">All Item List</Nav.Link>
                            <Nav.Link as={Link} to="/operatornewdeal">Add Coupons</Nav.Link>
                            <Nav.Link as={Link} to="/operatorsubsription">Subscription</Nav.Link>
                            <Nav.Link as={Link} to="/operatoradspromotion">Ads Promotion</Nav.Link>
                            <Nav.Link as={Link} to="/operatordraftcupon">Draft coupons</Nav.Link>
                            <Nav.Link as={Link} to="/operatormycupons">My coupons</Nav.Link>
                        </Nav>
                        <div className="search">
                            <input type="text" name="search" id="search" placeholder='Search for the coupons , deals and  offers' />
                            <button><FaSearch /></button>
                        </div>

                    </Navbar.Collapse>
                </div>
            </Navbar >

            <Modal show={showModal} onHide={handleClose}>
                {modalContent}
            </Modal>
        </>
    )
}

export default OperatorHeader
