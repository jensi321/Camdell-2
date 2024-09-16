import { Avatar } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { Container, Dropdown, DropdownItem, Modal, Navbar } from 'react-bootstrap'
import { FaRegBell, FaSearch, FaUserAlt } from 'react-icons/fa';
import { IoLogOut } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { ImageUrl } from '../BaseURL/BaseUrl';
import { ProfileContext } from '../Context/UserContext';
import Notification from '../User/Notification';

const ShoperHeader = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const handleClose = () => setShowModal(false);
   
    const { token, profileImage,setProfileImage,  setUserData } = useContext(ProfileContext);

    useEffect(() => {
        if (token) {
          const userData = JSON.parse(token);
          setUserData(userData);
          setProfileImage(userData.profileImage); // Add this line
        }
      }, [token,setProfileImage,setUserData]);


    const handlenotificition = () => {
        setModalContent(<Notification onClose={handleClose} />)
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
                            <div className="info col-6">
                                <div className="search">
                                    <input type="text" name="search" id="search" placeholder='Search for the coupons , deals and  offers' />
                                    <button><FaSearch /></button>
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

                                        <Dropdown.Menu>
                                            <DropdownItem as={Link} to=""><IoLogOut /> Logout</DropdownItem>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </Navbar >

            <Modal show={showModal} onHide={handleClose}>
                {modalContent}
            </Modal>
        </>
    )
}

export default ShoperHeader