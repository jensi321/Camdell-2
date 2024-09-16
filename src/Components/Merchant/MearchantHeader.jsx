import { Avatar } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { Container, Dropdown, Modal, Nav, Navbar } from 'react-bootstrap';
import { FaRegBell, FaSearch, FaUserAlt } from 'react-icons/fa';
import { FaHouseUser } from 'react-icons/fa6';
// import { IoLogOut } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { ImageUrl } from '../BaseURL/BaseUrl';
import { ProfileContext } from '../Context/UserContext';
import Notification from '../User/Notification';
import WonLoyaltiyPoints from '../User/WonLoyaltiyPoints';

const MearchantHeader = () => {
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
    const handleClose = () => setShowModal(false);


    const handlenotificition = () => {
        setModalContent(<Notification onClose={handleClose} />)
        setShowModal(true);
    }


    const hyandleWonloyaltyPoints = () => {
        setModalContent(<WonLoyaltiyPoints onClose={handleClose} />)
        setShowModal(true);
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
                                <Link to={'/loyaltypoints'} className="points">
                                    <img src="assets/Image/Coins.png" alt="Coins Logo" />
                                    <p>{loyaltyPoint}</p>
                                </Link>





                                <div className="userhouse">
                                    <Link onClick={hyandleWonloyaltyPoints}><FaHouseUser />
                                    </Link>
                                </div>
                                <div className="subscribe">
                                    <Link onClick={handlenotificition}><FaRegBell />
                                    </Link>
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

                                        {/* <Dropdown.Menu>
                                            <DropdownItem as={Link} to="/dashbord"> <FaUser /> Dashboard</DropdownItem>
                                            <DropdownItem as={Link} to="/wishlist"><FaHeart /> Wishlist</DropdownItem>
                                            <DropdownItem as={Link} to="" ><IoLogOut />Logout</DropdownItem>
                                        </Dropdown.Menu> */}
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
                            <Nav.Link as={Link} to="/merchantdesktop">All Item List</Nav.Link>
                            <Nav.Link as={Link} to="/newdeals">Add Coupons</Nav.Link>
                            <Nav.Link as={Link} to="/adsprmotion">Ads Promotion</Nav.Link>
                            <Nav.Link as={Link} to="/draftcupon">Draft coupons</Nav.Link>
                            <Nav.Link as={Link} to="/yourcupon">My coupons</Nav.Link>
                            <Nav.Link as={Link} to="/mearchntsubscription">Subscription</Nav.Link>
                            <Nav.Link as={Link} to="/dashbord">User Dashboard</Nav.Link>
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

export default MearchantHeader
