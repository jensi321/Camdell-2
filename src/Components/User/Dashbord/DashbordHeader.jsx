import { Tabs } from 'antd'
import React, { useContext, useState } from 'react'
import Profile from './Profile'
import MyCupon from './MyCupon'
import SubscriptionPlan from '../SubscriptionPlan'
import Wallet from './Wallet'
import SubscriptionHistory from './SubscriptionHistory'
import LoyaltyPoints from './LoyaltyPoints'
import ReferralID from './ReferralID'
import UsertermsCondition from './UsertermsCondition'
import ChangePassword from './ChangePassword'
import { Modal } from 'react-bootstrap'
import DeleteAccount from '../DeleteAccount'
import { ProfileContext } from '../../Context/UserContext'

const DashbordHeader = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const { activeTab,setActiveTab } = useContext(ProfileContext);

    const handleClose = () => {
        setShowModal(false);
        setActiveTab('8'); // Update the active tab when the modal is closed
    };
    const handleShowTerms = () => {
        setModalContent(<UsertermsCondition close={handleClose} />)
        setShowModal(true)
    }
    const handleshowchangePassword = () => {
        setModalContent(<ChangePassword close={handleClose} />)
        setShowModal(true)
    }
    const handledeleteAccount = () => {
        setModalContent(<DeleteAccount onClose={handleClose} />)
        setShowModal(true);
    }
    const handleTabChange = (key) => {
        if
        (key=== '11'){
            handledeleteAccount()
        }

        else if (key === '10') {
            handleshowchangePassword();
        } else if (key === '9') {
            handleShowTerms(true);
        } else {
            setActiveTab(key);
        }
    };
    return (
        <>

            <Tabs
                className='dashbordheader'
                centered
                defaultActiveKey="1"
                activeKey={activeTab}
                onTabClick={(key) => {
                    setActiveTab(key);
                }}
                onChange={handleTabChange}
                items={[
                    {
                        label: 'Profile',
                        key: '1',
                        children: <Profile />,
                        icon: activeTab === '1' 
                        ? <img src='assets/Image/healthicons_ui-user-profile_white.png' alt='' /> 
                        : <img src='assets/Image/healthicons_ui-user-profile.png' alt='' />

                    },
                    {
                        label: 'My Coupons',
                        key: '2',
                        children: <MyCupon />,
                        icon: activeTab === '2' 
                        ? <img src='assets/Image/fluent_people-add-16-filled_white.png' alt='' /> 
                        : <img src='assets/Image/fluent_people-add-16-filled.png' alt='' />


                    },
                    {
                        label: 'Used Coupons',
                        key: '3',
                        children: <MyCupon />,
                        icon: activeTab === '3' 
                        ? <img src='assets/Image/discount 2_white.png' alt='' /> 
                        : <img src='assets/Image/discount 2.png' alt='' />

                    },
                    {
                        label: 'Wallet',
                        key: '4',
                        children: <Wallet />,
                        icon: activeTab === '4' 
                        ? <img src='assets/Image/game-icons_wallet_white.png' alt='' /> 
                        : <img src='assets/Image/game-icons_wallet.png' alt='' />

                    },
                    {
                        label: 'Subscription Plan',
                        key: '5',
                        children: <SubscriptionPlan />,
                        icon: activeTab === '5' 
                        ? <img src='assets/Image/mdi_gift_white.png' alt='' /> 
                        : <img src='assets/Image/mdi_gift.png' alt='' />

                    },
                    {
                        label: 'Subscription History',
                        key: '6',
                        children: <SubscriptionHistory />,
                        icon: activeTab === '6' 
                        ? <img src='assets/Image/material-symbols_work-history_white.png' alt='' /> 
                        : <img src='assets/Image/material-symbols_work-history.png' alt='' />

                    },
                    {
                        label: 'Loyalty Points',
                        key: '7',
                        children: <LoyaltyPoints />,
                        icon: activeTab === '7' 
                        ? <img src='assets/Image/Loylty_point_white.png' alt='' /> 
                        : <img src='assets/Image/Loylty_point.png' alt='' />

                    },
                    {
                        label: 'Referral ID',
                        key: '8',
                        children: <ReferralID />,
                        icon: activeTab === '8' 
                            ? <img src='assets/Image/mdi_people-group_white.png' alt='' /> 
                            : <img src='assets/Image/mdi_people-group.png' alt='' />

                    },
                    {
                        label: 'Terms & Condition',
                        key: '9',
                        children: <ReferralID />,
                        icon: activeTab === '9' 
                        ? <img src='assets/Image/typcn_th-list_white.png' alt='' /> 
                        : <img src='assets/Image/typcn_th-list.png' alt='' />

                    },
                    {
                        label: 'Change Password',
                        key: '10',
                        children: <ReferralID />,
                        icon: activeTab === '10' 
                        ? <img src='assets/Image/teenyicons_password-solid_white.png' alt='' /> 
                        : <img src='assets/Image/teenyicons_password-solid.png' alt='' />

                    },
                    {
                        label: 'Delete Account',
                        key: '11',
                        children:<ReferralID/>,
                        icon: activeTab === '11' 
                        ? <img src='assets/Image/majesticons_logout-half-circle_white.png' alt='' /> 
                        : <img src='assets/Image/majesticons_logout-half-circle.png' alt='' />

                    },
                ]}
            />



            {showModal && (
                <Modal show={showModal} onHide={handleClose}>
                    {modalContent}
                </Modal>

            )}
        </>
    )
}

export default DashbordHeader