import { Tabs } from 'antd';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { BiSolidDiscount } from 'react-icons/bi';
import { BsQrCodeScan } from 'react-icons/bs';
import { FaIdCard } from 'react-icons/fa6';
import PageBanner from '../PageBanner'
import CuponCodeEnter from './OnlineCoupons/CuponCodeEnter';
import EnterPurchasingAmount from './OnlineCoupons/EnterPurchasingAmount';
import UserCuponOnline from './OnlineCoupons/UserCuponOnline';
import Scanner from './Scanner/Scanner';
import SuccessfulModal from './Scanner/SuccessfulModal';
import ShoperHeader from './ShoperHeader'
import UsedCupon from './UsedCupon/UsedCupon';

const CashierScanner = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [activeTab, setActiveTab] = useState('1');

    const handleClose = () => {
        setShowModal(false);
        setActiveTab('1'); // Update the active tab when the modal is closed
    };

    const handleCuponCodeEnter = () => {
        setModalContent(<CuponCodeEnter onClose={handleClose} onOpenUserCupon={handleUserCupon} />)
        setShowModal(true)
    }

    const handleUserCupon = () => {

        setModalContent(<UserCuponOnline onClose={handleClose} onOpenPurchasing={handlePurchasing} />);
        setShowModal(true);
    };

    const handlePurchasing = () => {
        setModalContent(<EnterPurchasingAmount onClose={handleClose} onOpenSuccessfull={handleSuccessfull} />)
    }
    const handleSuccessfull = () => {
        setModalContent(<SuccessfulModal onClose={handleClose} />)
    }

    return (
        <>
            <ShoperHeader />
            <PageBanner title='Scanner Option' />
            <Tabs
                className='dashbordheader'
                centered
                activeKey={activeTab}
                onTabClick={(key) => {
                    setActiveTab(key);
                }}
                onChange={(key) => {
                    if (key === '3') {
                        handleCuponCodeEnter();
                    }
                }}
                items={[
                    {
                        label: 'Scanner',
                        key: '1',
                        children: <Scanner />,
                        icon: <BsQrCodeScan />
                    },
                    {
                        label: 'Used coupons',
                        key: '2',
                        children: <UsedCupon />,
                        icon: <FaIdCard />

                    },
                    {
                        label: 'Online Upload used coupons',
                        key: '3',
                        children: <Scanner />,
                        icon: <BiSolidDiscount />,
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

export default CashierScanner
