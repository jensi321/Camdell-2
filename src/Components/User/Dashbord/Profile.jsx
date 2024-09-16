import React, { useContext, useEffect, useState } from 'react'
import DatePicker from 'react-datepicker';
import { MdEditSquare } from 'react-icons/md'
import { Link } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";
import { ProfileContext } from '../../Context/UserContext';
import { BaseUrl, ImageUrl } from '../../BaseURL/BaseUrl';

const Profile = () => {
    const [username, setUserName] = useState('');
    const [usernameerror, setUserNameError] = useState('');
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('');
    const [date, setDate] = useState(new Date().getDate().toString().padStart(2, '0'));
    const [month, setMonth] = useState((new Date().getMonth() + 1).toString().padStart(2, '0'));
    const [year, setYear] = useState(new Date().getFullYear());
    const [dateError, setDateError] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [location, setLocation] = useState('')
    const [locationError, setLocationError] = useState('')
    const [gender, setGender] = useState('');
    const [imageError, setImageError] = useState('');
    const [imageName, setImageName] = useState('');
    const { setProfileImage, setLocation: setContextLocation } = useContext(ProfileContext);


    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token !== null && token !== '') {
            try {
                const userData = JSON.parse(token);
                setUserName(userData.name);
                setEmail(userData.email);
                setMobileNumber(userData.mobile);
                setDate(userData.dob.split('-')[2]);
                setMonth(userData.dob.split('-')[1]);
                setYear(userData.dob.split('-')[0]);
                setLocation(userData.location);
                setGender(userData.gender === 1 ? 'Male' : 'Female');
                setImageName(userData.profile_image); // Set the profile image from session storage
            } catch (error) {
                console.error('Error parsing token:', error.message);
            }
        }

    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageName(file);
        const reader = new FileReader();
        reader.onload = () => {
            const base64 = reader.result;
            console.log("base64 url", base64);

            // Make API call to upload image
            fetch(`${BaseUrl}/uploadimage.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ base64: base64 })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {

                        const imageName = data.data.replace(/^images\//, ''); // Remove the "images/" part
                        setImageName(imageName); // Store the updated image name
                        console.log(`Image uploaded successfully: ${imageName}`);

                        setImageError('');

                    } else {

                        throw new Error('Image upload failed');

                    }
                })
                .catch(error => {

                    console.error(`Error uploading image: ${error.message}`);

                    setImageError(error.message);

                });
        };
        reader.readAsDataURL(file);
    };

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
        validUserName(e.target.value)
    }
    const validUserName = () => {
        const usernameregex = /^[a-zA-Z0-9_]{3,16}$/

        if (!usernameregex.test(username)) {
            setUserNameError('Please Enter Valid User Name');
        }
        else {
            setUserNameError('')
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        validEmail(e.target.value)
    }
    const validEmail = () => {
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        if (!emailRegex.test(email)) {
            setEmailError('Please Enter Valid Email')
        }
        else {
            setEmailError('')
        }
    }


    const handleDateChange = (date) => {
        setDate(date.getDate());
        setMonth(date.getMonth() + 1); // months are 0-based, so add 1
        setYear(date.getFullYear());
    };
    const valiDateBirth = () => {
        const dateRegex = /^(0?[1-9]\d{0}|[12][0-9]\d{0}|3[0-1]\d{0})$/;
        const monthRegex = /^(0?[1-9]\d{0}|1[0-2]\d{0})$/;
        const yearRegex = /^(19|20)\d{2}$/;

        if (!dateRegex.test(date) || !monthRegex.test(month) || !yearRegex.test(year)) {
            setDateError('Please Enter Valid Date of Birth');
            return;
        }

        const isValidDate = validateDate(date, month, year);

        if (!isValidDate) {
            setDateError('Please Enter Valid Date of Birth');
        } else {
            setDateError('');
        }

    };
    const validateDate = (day, month, year) => {
        const date = new Date(`${year}-${month}-${day}`);
        return date.getDate() === parseInt(day) && date.getMonth() + 1 === parseInt(month) && date.getFullYear() === parseInt(year);
    };


    const handleMobileChange = (e) => {
        const inputValue = e.target.value;
        const onlyNumbers = inputValue.replace(/[^0-9]/, '');
        setMobileNumber(onlyNumbers);
        validateMobile(onlyNumbers);
    };
    const validateMobile = (mobilenumber) => {
        const mobileRegex = /^[789]\d{9}$/; // assuming 10-digit mobile number
        if (!mobileRegex.test(mobilenumber)) {
            setMobileError('Please Enter Valid Mobile Number');
        } else {
            setMobileError('');
        }
    };

    const handleLocation = (e) => {
        const locationValue = e.target.value;
        setLocation(locationValue);
        validLocation(locationValue);
    }
    const validLocation = (location) => {
        const locationreg = /^[\w\s,.-]{3,50}$/

        if (!locationreg.test(location)) {
            setLocationError('Location is Required');
        }
        else {
            setLocationError('');
        }
    }

    const handleGenderChange = (e) => {

        setGender(e.target.value);

    };

    const handleSubmit = (e) => {
        e.preventDefault();



        if (emailError !== '' && usernameerror !== '' && mobileError !== '' && dateError !== '' && locationError !== '') {
            validEmail(e.target.value)
            validUserName(e.target.value)
            validateMobile(e.target.value)
            valiDateBirth(e.target.value)
            validLocation(e.target.value)

        }
        const token = sessionStorage.getItem('token');

        if (token !== null && token !== '') {
            try {
                const userData = JSON.parse(token);
                const userId = userData.id;
                setUserName(userData.name);
                console.log('User ID:', userId);
                console.log('Token:', token);

                const formdata = {
                    user_id: userId,
                    mobile: mobilenumber,
                    email: email,
                    name: username,
                    dob: `${year}-${month}-${date}`,
                    location: location,
                    gender: gender === 'Male' ? 1 : 2,
                    profile_image: imageName, // Add the profile image to the form data
                }

                console.log(formdata)

                fetch(`${BaseUrl}/updateuserprofile.php`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify(formdata),
                })
                    .then((response) => {
                        console.log('Response data:', response); // Log the response data to the console 
                        return response.json();
                    })
                    .then((data) => {
                        const newUserData = {
                            id: userId,
                            name: username,
                            email: email,
                            mobile: mobilenumber,
                            dob: `${year}-${month}-${date}`,
                            location: location,
                            gender: gender === 'Male' ? 1 : 2,
                            profile_image: imageName,
                        };
                        console.log('API Response Data:', data);
                        const newToken = JSON.stringify(newUserData);
                        setProfileImage(imageName);

                        setContextLocation(location);
                        sessionStorage.setItem('token', newToken);

                        // Update the username state with the new value from session storage
                        setUserName(newUserData.name);

                        alert("Your Profile updated")
                    })
                    .catch((error) => {
                        console.error(error.message);
                    });
            } catch (error) {
                console.error('Error parsing token:', error.message);
            }
        } else {
            console.log('Token is null or empty');
        }
    }

    return (
        <>
            <div className="profile-outer">
                <div className="container">
                    <div className="profile-inner">

                        <div className="row">
                            <div className="col-md-3 col-12 img-content">
                                <div className="edit-icon">
                                    <input type="file" accept="image/*" name="" id="" onChange={handleImageChange} />
                                    <MdEditSquare />

                                </div>
                                <div className="profile-img">

                                    <img src={`${ImageUrl}/${imageName}`} alt="" />
                                </div>

                                {imageError && <div className="error">{imageError}</div>}
                                <div className="user-name">
                                    {/* <h2>{username}</h2> */}
                                </div>
                            </div>
                            <div className="col-md-9 col-12 text-content">
                                <form method='Post' className='row' onSubmit={handleSubmit}>
                                    <div className="col-sm-6 col-12 inputgroup">
                                        <label htmlFor="">User Name</label>
                                        <input type="text" id='username' name='username' placeholder='Enter your name' value={username} onChange={handleUserNameChange} />
                                        {usernameerror && <div className="error"> {usernameerror}</div>}
                                    </div>
                                    <div className="col-sm-6 col-12 inputgroup">
                                        <label htmlFor="">E-mail ID</label>
                                        <input type="email" id='email' name='email' placeholder='Enter E-mail id' value={email} onChange={handleEmailChange} />
                                        {emailError && <div className='error'>{emailError}</div>}
                                    </div>
                                    <div className="col-sm-6 col-12 inputgroup">
                                        <label htmlFor="">Date of birth</label>

                                        <div className="birth-date">

                                            <input
                                                type="text"
                                                id="date"
                                                value={date}
                                                readOnly
                                                placeholder='DD'
                                            />
                                            <input
                                                type="text"
                                                id="month"
                                                value={month}
                                                readOnly
                                                placeholder='MM'
                                            />

                                            <input
                                                type="text"
                                                id="year"
                                                value={year}
                                                readOnly
                                                placeholder='YYYY'
                                            />
                                            <DatePicker
                                                selected={new Date(year, month - 1, date)} // subtract 1 from month because months are 0-based
                                                onChange={handleDateChange}
                                                placeholderText="Select a date"

                                            />
                                        </div>
                                        {dateError && <div className='error'>{dateError}</div>}
                                    </div>

                                    <div className="col-sm-6 col-12 gender inputgroup">
                                        <label htmlFor="">Gender </label>
                                        <span><input type="radio" id='male' name='gender' value='Male' checked={gender === 'Male'}

                                            onChange={handleGenderChange} /> Male</span>
                                        <span>
                                            <input type="radio" id='female' name='gender' value='Female' checked={gender === 'Female'}

                                                onChange={handleGenderChange} /> Female
                                        </span>

                                    </div>
                                    <div className="col-sm-6 col-12 inputgroup">
                                        <label htmlFor="">Mobile number</label>
                                        <input
                                            type="tel"
                                            name='mobilenumber'
                                            id='mobilenumber'
                                            placeholder='Mobile number'
                                            minLength={10}
                                            maxLength={10}
                                            value={mobilenumber}
                                            onChange={handleMobileChange}
                                        />
                                        {mobileError && <div className="error">{mobileError}</div>}
                                    </div>
                                    <div className="col-sm-6 col-12 inputgroup">
                                        <label htmlFor="">Location</label>
                                        <input type="text" id='loction' name='location' placeholder='Enter your Location' value={location} onChange={handleLocation} />
                                        {locationError && <div className="error">{locationError}</div>}

                                    </div>
                                    <div className="col-12 submit-form">
                                        <Link className='button' onClick={handleSubmit}>Save</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile