import React, {  useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BaseUrl } from '../../BaseURL/BaseUrl'
import Operatorlogin from '../../Operator/Operatorlogin'

const OperatorLogin = () => {
    const [name, setname] = useState()
    const [nameError, setNameError] = useState()
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [operator, setOperator] = useState('');
    const [operatorError, setOperatorError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [show, setShow] = useState(false);

    const token = sessionStorage.getItem('token');
    console.log(token)
    const userId = token.id

    const handleName = (e) => {
        const inputValue = e.target.value;
        const onlycharacter = inputValue.replace(/[^a-zA-Z\s]/g, '');
        setname(onlycharacter);
        validName(onlycharacter);
    }
    const validName = (name) => {
        const nameregex = /^[a-zA-Z\s]{3,50}$/;
        if (!nameregex.test(name)) {
            setNameError('Please Enter Valid Name')
        }
        else {
            setNameError('')
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        validateEmail(e.target.value);
    };
    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const handleOperatorChange = (e) => {
        setOperator(e.target.value);
        validateOperator(e.target.value);
    };
    const validateOperator = (operator) => {
        if (operator === '') {
            setOperatorError('Please select an operator');
        } else {
            setOperatorError('');
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        validatePassword(e.target.value);
      };
      const validatePassword = (password) => {
        const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
        if (!passwordregex.test(password)) {
          setPasswordError('Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character:');
        } else {
          setPasswordError('');
        }
      };

      const handleValueSubmit = () => {
        setEmail('')
        setPassword('')
        setname('')
        setOperator('')
      }

      const handleSubmit = async (e) => {
        e.preventDefault();

       
        const formData = {
            name:name,
            email:email,
            password:password,
            operator_type:operator,
            user_id:userId
        }
        try {
            const response = await fetch(`${BaseUrl}/addoperator.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
            if (data.success) { // Check if the registration is successful
                handleValueSubmit()
                setShow(true) // Open the login modal
                alert('Registration successfully')
            } else {
                alert('Registration failed. Please try again.'); // Display an error message
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <div className="operator-login-outer">
                <div className="container">
                    <div className="operator-login-inner">
                        <form action="">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="inputgroup">
                                        <label htmlFor="">
                                            Name
                                        </label>
                                        <input type="text" id='name' name='name' placeholder='Enter the name' value={name} onChange={handleName} />
                                        {nameError && <div className="error">{nameError}</div>}
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="inputgroup">
                                        <label htmlFor="">
                                            Email
                                        </label>
                                        <input type="emial" id='email' name='email' placeholder='Username@explain.com' value={email} onChange={handleEmailChange} />
                                        {emailError && <div className="error">{emailError}</div>}
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="inputgroup">
                                        <label htmlFor="">
                                            Select the operator
                                        </label>
                                        <select id='operator' name='operator' value={operator} onChange={handleOperatorChange}>
                                            <option value="" selected disabled>Select the operator</option>
                                            <option value="Manager"  >Operator Manager</option>
                                            <option value="Shop enter man"  >Operator Shop enter man</option>
                                        </select>
                                        {operatorError && <div className="error">{operatorError}</div> }
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="inputgroup">
                                        <label htmlFor="">
                                            Password
                                        </label>
                                        <input type="password" id='password' name='password' placeholder='********' value={password} onChange={handlePasswordChange}/>
                                        {passwordError && <div className="error">{passwordError}</div> }
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="submit-button">
                                        <Link className="button" onClick={handleSubmit}>Submit</Link>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={() => setShow(false)}>
                <Operatorlogin onClose={() => setShow(false)}/>
            </Modal>
        </>
    )
}

export default OperatorLogin
