import { Masonry } from '@mui/lab'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { LuAlertCircle } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { BaseUrl, ImageUrl } from '../../../BaseURL/BaseUrl'
import { ProfileContext } from '../../../Context/UserContext'
import WhatNext from '../RaferralID/WhatNext'

const Income = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [error, setError] = useState(null);
    const [user, setUser] = useState([])

    const handleOpenModal = useCallback((item) => {

        setSelectedItem(item);

        setIsOpen(true);

    }, []);


    const handleCloseModal = useCallback(() => {

        setSelectedItem(null);

        setIsOpen(false);

    }, []);


    const {  userId } = useContext(ProfileContext);
    useEffect(() => {
        const fetchData = async () => {
            const formData = {
                user_id: userId
            }
            console.log(formData)
            try {
                const response = await fetch(`${BaseUrl}/getreferral.php`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                const data = await response.json();
                if (data.data.error) {
                    setError(data.data.error);
                    setUser([]);
                    console.log(data.data)
                  } else {
                    setUser(data.data);
                    setError(null);
                    console.log(data.data)
                  }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [userId])


    return (
        <>
            <div className="income-outer">
                <div className="container">
                    <div className="income-inner">
                        <Masonry columns={{  sm: 1, md: 2,lg : 3}} spacing={2}>

                        {error ? (
                            <div className="col-12">
                                <p style={{ textAlign: 'center' }}>{error}</p>
                            </div>
                        ) : (user && user.map((i, index) => {
                            return (
                                <>
                                   <div className="item user-profile">
                                            <div className="item-inner">
                                                <div className="img-content">
                                                    <img src={`${ImageUrl}/${i.profile_image}`} alt="" />
                                                </div>
                                                <div className="text-content">
                                                    <div className="user-name">
                                                        <h4>{i.name}</h4>
                                                        <Link to='' className="alert-icon" onClick={() => handleOpenModal(i)}>
                                                            <LuAlertCircle />
                                                        </Link>
                                                    </div>
                                                    {isOpen && selectedItem && selectedItem.id === i.id && (

                                                        <WhatNext isOpen={isOpen} onClose={handleCloseModal} />

                                                    )}

                                                    <div className="id-date">
                                                        <div className="rafferal-id">Referral ID : {i.id}</div>
                                                        <div className='date'>Date : {i.created_at}</div>
                                                    </div>
                                                    <div className="plan-commision">Plan commission : RS {i.coins}</div>
                                                </div>
                                            </div>
                                        </div>
                                </>
                            )
                        }))
                        }

                            {/* <div className="item compny-profile">
                                <div className="item-inner">
                                    <div className="top">
                                        <img src="assets/Image/justdial.png" alt="" />
                                        <div className="rating"><span className='star-icon'><FaStar /></span>4.5</div>
                                        <p>( Get amount : 150 cash back )</p>
                                        <div className="alert-icon">
                                            <LuAlertCircle />
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="img-content">
                                            <img src="assets/Image/car.png" alt="" />
                                        </div>
                                        <div className="text-content">
                                            <h5>Only Car Service</h5>
                                            <p className='getoff'>( Above Rs 5,000) <span>Get 50% Off</span></p>
                                            <p className='offer'>Offer till 15th Feb <Link className='button'>View</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item user-profile">
                                <div className="item-inner">
                                    <div className="img-content">
                                        <img src="assets/Image/user1.png" alt="" />
                                    </div>
                                    <div className="text-content">
                                        <div className="user-name">
                                            <h4>Dinesh kumar</h4>
                                            <div className="alert-icon">
                                                <LuAlertCircle />
                                            </div>
                                        </div>

                                        <div className="id-date">
                                            <div className="rafferal-id">Referral ID : #485625</div>
                                            <div className='date'>Date : 05/06/2024</div>
                                        </div>
                                        <div className="plan-commision">Plan commission : RS 500</div>
                                    </div>
                                </div>
                            </div>
                            <div className="item compny-profile">
                                <div className="item-inner">
                                    <div className="top">
                                        <img src="assets/Image/justdial.png" alt="" />
                                        <div className="rating"><span className='star-icon'><FaStar /></span>4.5</div>
                                        <p>( Get amount : 150 cash back )</p>
                                        <div className="alert-icon">
                                            <LuAlertCircle />
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="img-content">
                                            <img src="assets/Image/car.png" alt="" />
                                        </div>
                                        <div className="text-content">
                                            <h5>Only Car Service</h5>
                                            <p className='getoff'>( Above Rs 5,000) <span>Get 50% Off</span></p>
                                            <p className='offer'>Offer till 15th Feb <Link className='button'>View</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item compny-profile">
                                <div className="item-inner">
                                    <div className="top">
                                        <img src="assets/Image/justdial.png" alt="" />
                                        <div className="rating"><span className='star-icon'><FaStar /></span>4.5</div>
                                        <p>( Get amount : 150 cash back )</p>
                                        <div className="alert-icon">
                                            <LuAlertCircle />
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="img-content">
                                            <img src="assets/Image/car.png" alt="" />
                                        </div>
                                        <div className="text-content">
                                            <h5>Only Car Service</h5>
                                            <p className='getoff'>( Above Rs 5,000) <span>Get 50% Off</span></p>
                                            <p className='offer'>Offer till 15th Feb <Link className='button'>View</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item compny-profile">
                                <div className="item-inner">
                                    <div className="top">
                                        <img src="assets/Image/carDekho.png" alt="" />
                                        <div className="rating"><span className='star-icon'><FaStar /></span>4.5</div>
                                        <p>( Get amount : 150 cash back )</p>
                                        <div className="alert-icon">
                                            <LuAlertCircle />
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="img-content">
                                            <img src="assets/Image/Denting.png" alt="" />
                                        </div>
                                        <div className="text-content">
                                            <h5>Only Car Service</h5>
                                            <p className='getoff'>( Above Rs 5,000) <span>Get 50% Off</span></p>
                                            <p className='offer'>Offer till 15th Feb <Link className='button'>View</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item user-profile">
                                <div className="item-inner">
                                    <div className="img-content">
                                        <img src="assets/Image/user5.png" alt="" />
                                    </div>
                                    <div className="text-content">
                                        <div className="user-name">
                                            <h4>Dhanush</h4>
                                            <div className="alert-icon">
                                                <LuAlertCircle />
                                            </div>
                                        </div>

                                        <div className="id-date">
                                            <div className="rafferal-id">Referral ID : #485625</div>
                                            <div className='date'>Date : 05/06/2024</div>
                                        </div>
                                        <div className="plan-commision">Plan commission : RS 500</div>
                                    </div>
                                </div>
                            </div>
                            <div className="item compny-profile">
                                <div className="item-inner">
                                    <div className="top">
                                        <img src="assets/Image/carDekho.png" alt="" />
                                        <div className="rating"><span className='star-icon'><FaStar /></span>4.5</div>
                                        <p>( Get amount : 150 cash back )</p>
                                        <div className="alert-icon">
                                            <LuAlertCircle />
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="img-content">
                                            <img src="assets/Image/Denting.png" alt="" />
                                        </div>
                                        <div className="text-content">
                                            <h5>Only Car Service</h5>
                                            <p className='getoff'>( Above Rs 5,000) <span>Get 50% Off</span></p>
                                            <p className='offer'>Offer till 15th Feb <Link className='button'>View</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item user-profile">
                                <div className="item-inner">
                                    <div className="img-content">
                                        <img src="assets/Image/user1.png" alt="" />
                                    </div>
                                    <div className="text-content">
                                        <div className="user-name">
                                            <h4>Dinesh kumar</h4>
                                            <div className="alert-icon">
                                                <LuAlertCircle />
                                            </div>
                                        </div>

                                        <div className="id-date">
                                            <div className="rafferal-id">Referral ID : #485625</div>
                                            <div className='date'>Date : 05/06/2024</div>
                                        </div>
                                        <div className="plan-commision">Plan commission : RS 500</div>
                                    </div>
                                </div>
                            </div>
                            <div className="item user-profile">
                                <div className="item-inner">
                                    <div className="img-content">
                                        <img src="assets/Image/user2.png" alt="" />
                                    </div>
                                    <div className="text-content">
                                        <div className="user-name">
                                            <h4>Kavin</h4>
                                            <div className="alert-icon">
                                                <LuAlertCircle />
                                            </div>
                                        </div>

                                        <div className="id-date">
                                            <div className="rafferal-id">Referral ID : #485625</div>
                                            <div className='date'>Date : 05/06/2024</div>
                                        </div>
                                        <div className="plan-commision">Plan commission : RS 500</div>
                                    </div>
                                </div>
                            </div>
                            <div className="item compny-profile">
                                <div className="item-inner">
                                    <div className="top">
                                        <img src="assets/Image/carDekho.png" alt="" />
                                        <div className="rating"><span className='star-icon'><FaStar /></span>4.5</div>
                                        <p>( Get amount : 150 cash back )</p>
                                        <div className="alert-icon">
                                            <LuAlertCircle />
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="img-content">
                                            <img src="assets/Image/Denting.png" alt="" />
                                        </div>
                                        <div className="text-content">
                                            <h5>Only Car Service</h5>
                                            <p className='getoff'>( Above Rs 5,000) <span>Get 50% Off</span></p>
                                            <p className='offer'>Offer till 15th Feb <Link className='button'>View</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item user-profile">
                                <div className="item-inner">
                                    <div className="img-content">
                                        <img src="assets/Image/user3.png" alt="" />
                                    </div>
                                    <div className="text-content">
                                        <div className="user-name">
                                            <h4>Sanjay kumar</h4>
                                            <div className="alert-icon">
                                                <LuAlertCircle />
                                            </div>
                                        </div>

                                        <div className="id-date">
                                            <div className="rafferal-id">Referral ID : #485625</div>
                                            <div className='date'>Date : 05/06/2024</div>
                                        </div>
                                        <div className="plan-commision">Plan commission : RS 500</div>
                                    </div>
                                </div>
                            </div>
                            <div className="item user-profile">
                                <div className="item-inner">
                                    <div className="img-content">
                                        <img src="assets/Image/user4.png" alt="" />
                                    </div>
                                    <div className="text-content">
                                        <div className="user-name">
                                            <h4>Kaviya Anjali</h4>
                                            <div className="alert-icon">
                                                <LuAlertCircle />
                                            </div>
                                        </div>

                                        <div className="id-date">
                                            <div className="rafferal-id">Referral ID : #485625</div>
                                            <div className='date'>Date : 05/06/2024</div>
                                        </div>
                                        <div className="plan-commision">Plan commission : RS 500</div>
                                    </div>
                                </div>
                            </div> */}

                        </Masonry>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Income