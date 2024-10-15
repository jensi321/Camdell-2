import React, {  useState } from 'react'
import { Link } from 'react-router-dom';
import { BaseUrl } from '../../BaseURL/BaseUrl';

const ChangePassword = ({ show, close }) => {
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const token= JSON.parse(sessionStorage.getItem('token'));
    const userId = (token.id)
    console.log(userId);
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        validatePassword(e.target.value);
    };

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        validateConfirmPassword(e.target.value);
    }

    const validatePassword = (password) => {
        const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;
        if (!passwordregex.test(password)) {
            setPasswordError('Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:');
        } else {
            setPasswordError('');
        }
    };

    const validateConfirmPassword = (confirmPassword) => {
        if (password !== confirmPassword) {
            setConfirmPasswordError('Confirm password does not match password');
        } else {
            setConfirmPasswordError('');
        }

    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (passwordError || confirmPasswordError) {
            return;
        }
        if (!userId) {
            setErrorMessage('User ID not found in session storage');
            return;
        }


        const formData = {
            user_id: userId,
            password: password,
            cpassword: confirmPassword,
        };


        fetch(`${BaseUrl}/changepassword.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
              },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setSuccessMessage('Password changed successfully!');
                    close();
                    alert('Password changed successfully!')
                    console.log(data)
                } else {
                    setErrorMessage('Error changing password', data);
                }
            })

            .catch((error) => {
                console.error(error);
            });

    };

    return (
        <>


            <div className="change-password-outer">
                <div className="container">
                    <div className="cahnge-password-inner">
                        <div className="change-password row">
                            <div className="col-12 col-sm-6 left">
                                <div className="img-content">
                                    <img src='assets/Image/changepassword.png' alt="" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 right">
                                <div className="inner">

                                    <div className="heading">
                                        <h3>Change password</h3>
                                    </div>
                                    <form method="post" onSubmit={handleSubmit}>
                                        <div className="input-group">
                                            <label htmlFor="">Create Password</label>
                                            <input type="password" name='newpassword' id='newpassword' placeholder='Enter your password' value={password} onChange={handlePasswordChange} />
                                            {passwordError && <div className="error">{passwordError}</div>}
                                        </div>

                                        <div className="input-group">
                                            <label htmlFor="">Confirm Password</label>
                                            <input type="password" name='cpassword' id='cpassword' value={confirmPassword} onChange={handleConfirmPassword} placeholder='Enter your password' />
                                            {confirmPasswordError && <div className='error'>{confirmPasswordError}</div>}
                                        </div>


                                        <Link to='' onClick={handleSubmit} className='button'>Save</Link>

                                    </form>
                                    {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
                                    {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ChangePassword