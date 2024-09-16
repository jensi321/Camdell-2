import React from 'react'
import Income from './RaferralID/Income'
import { Tabs } from 'antd'
import Connect from './RaferralID/Connect'

const ReferralID = () => {
    return (
        <>
            <div className="referral-outer">
                <div className="container">
                    <div className="referral-inner">
                        <Tabs
                            centered
                            defaultActiveKey="1"
                            items={[
                                {
                                    label: 'Income',
                                    key: '1',
                                    children: <Income />,
                                },

                                {
                                    label: 'Connect',
                                    key: '2',
                                    children: <Connect />,
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReferralID