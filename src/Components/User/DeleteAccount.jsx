import React from 'react'
import { Link } from 'react-router-dom'

const DeleteAccount = ({onClose}) => {
    return (
        <>
            <div className="delete-account-outer">
                <div className="dlete-account-inner">
                    <div className="heading">
                        <h3>Terms & Condition</h3>
                    </div>

                    <p>Are you sure you want to delete your account . Once confirmed we will verify and delete the account within 4 days. If your mind changed afterwards, you can access the app by registering again.</p>
                    <Link onClick={onClose} >Submit</Link>
                </div>
            </div>
        </>
    )
}

export default DeleteAccount
