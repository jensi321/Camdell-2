import React from 'react'
import { Link } from 'react-router-dom'

const ApprovalPandding = ({ onClose, onClick }) => {
    return (
        <>
            <div className="approval-outer">
                <div className="approval-inner">
                    <div className="heading">
                        <h3>
                            Approval pending
                        </h3>
                    </div>
                    <p>Once Approved you can access the Merchant features</p>
                    <Link className="button" onClick={() => {

                        onClose(); // Close the current modal

                        onClick(); // Call the onBackClick function prop

                    }}>Back</Link>                </div>
            </div>
        </>
    )
}

export default ApprovalPandding
