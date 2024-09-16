import { Tabs } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BankAccount from './WalletTabs/BankAccount'
import WithDrawal from './WalletTabs/WithDrawal'
import Expenses from './WalletTabs/Expenses'
import { DropdownButton, DropdownItem } from 'react-bootstrap'
import Income from './WalletTabs/Income'

const Wallet = () => {

    const [activeKey, setActiveKey] = useState('1');
    const [show, setshow] = useState(false)


    const handleClose = () => {
        setshow(false)

        setActiveKey('2');
    }

    const handleTabChange = (key) => {
        setActiveKey(key);
        if (key === '3') {
            setshow(true);
        } else {
            setshow(false);
        }
    };

    return (
        <>
            <div className="wallet-outer">
                <div className="container">
                    <div className="wallet-inner">

                        <div className="wallet-history">
                            <div className="heading">
                                <h3>Wallet History</h3>

                                {activeKey === '1' || activeKey === '2' ? (
                                   <DropdownButton id="dropdown-basic-button" className="list-view" title="List View">
                                        <DropdownItem as={Link} to="">User</DropdownItem>
                                        <DropdownItem as={Link} to="">Merchant</DropdownItem>
                                    </DropdownButton>
                                ) : (
                                    <span></span>
                                )}
                                {/* <DropdownButton id="dropdown-basic-button" className="list-view" title="List View">
                                    <DropdownItem as={Link} to='' >User</DropdownItem>
                                    <DropdownItem as={Link} to=''>Merchant</DropdownItem>
                                </DropdownButton> */}
                            </div>
                            <div className="wallet-tabs">
                                <Tabs
                                    centered
                                    defaultActiveKey="1"
                                    activeKey={activeKey}
                                    onChange={handleTabChange}
                                    items={[
                                        {
                                            label: 'Income',
                                            key: '1',
                                            children: <Income />,
                                        },
                                        {
                                            label: 'Expenses',
                                            key: '2',
                                            children: <Expenses />,
                                        },
                                        {
                                            label: 'Withdrawal Request',
                                            key: '3',
                                            children: <Expenses/>,
                                        },
                                        {
                                            label: 'Bank  Account',
                                            key: '4',
                                            children: <BankAccount />,
                                        },
                                    ]}
                                />
                            </div>
                            {show &&

                                <WithDrawal
                                    show={show}
                                    close={handleClose}
                                    onSubmit={() => setActiveKey('4')} />
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wallet