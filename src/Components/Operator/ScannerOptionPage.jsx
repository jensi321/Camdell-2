import React, { useState } from 'react'
import PageBanner from '../PageBanner'
import OperatorHeader from './OperatorHeader'
import { BsQrCodeScan } from "react-icons/bs";
import { FaIdCard } from 'react-icons/fa6';
import { BiSolidDiscount } from "react-icons/bi";
import { Tabs } from 'antd';
import { Modal } from 'react-bootstrap';
import CuponCodeEnter from '../ComponentItems/OnlineCoupons/CuponCodeEnter';
import EnterPurchasingAmount from '../ComponentItems/OnlineCoupons/EnterPurchasingAmount';
import SuccessfulModal from "../ComponentItems/Scanner/SuccessfulModal";
import Scanner from '../ComponentItems/Scanner/Scanner';
import UsedCupon from '../ComponentItems/UsedCupon/UsedCupon';
import UserCuponOnline from '../ComponentItems/OnlineCoupons/UserCuponOnline';

const ScannerOptionPage = () => {
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
            <OperatorHeader />
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
                        children: <Scanner/>,
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

export default ScannerOptionPage
