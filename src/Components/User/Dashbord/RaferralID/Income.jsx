import React, { useCallback,  useEffect, useState } from 'react'
import { LuAlertCircle } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { BaseUrl, ImageUrl } from '../../../BaseURL/BaseUrl';
import WhatNext from './WhatNext';

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


    // const User = [
    //     {
    //         id:'1',
    //         img: 'assets/Image/user1.png',
    //         name: "Dinesh kumar",
    //         date: '05/06/2024',
    //         referralid: "#485625",
    //         coins: '500'
    //     },
    //     {
    //         id:'2',
    //         img: 'assets/Image/user1.png',
    //         name: "Dinesh kumar",
    //         date: '05/06/2024',
    //         referralid: "#485625",
    //         coins: '500'
    //     },
    //     {
    //         id:'3',
    //         img: 'assets/Image/user1.png',
    //         name: "Dinesh kumar",
    //         date: '05/06/2024',
    //         referralid: "#485625",
    //         coins: '500'
    //     },
    //     {
    //         id:'4',
    //         img: 'assets/Image/user3.png',
    //         name: "Sanjay kumar",
    //         date: '05/06/2024',
    //         referralid: "#485625",
    //         coins: '500'
    //     },
    //     {
    //         id:'5',
    //         img: 'assets/Image/user3.png',
    //         name: "Sanjay kumar",
    //         date: '05/06/2024',
    //         referralid: "#485625",
    //         coins: '500'
    //     },
    //     {
    //         id:'6',
    //         img: 'assets/Image/user3.png',
    //         name: "Sanjay kumar",
    //         date: '05/06/2024',
    //         referralid: "#485625",
    //         coins: '500'
    //     },
    //     {
    //         id:'7',
    //         img: 'assets/Image/user2.png',
    //         name: "Kavin",
    //         date: '05/06/2024',
    //         referralid: "#485625",
    //         coins: '500'
    //     },
    //     {
    //         id:'8',
    //         img: 'assets/Image/user2.png',
    //         name: "Kavin",
    //         date: '05/06/2024',
    //         referralid: "#485625",
    //         coins: '500'
    //     },
    //     {
    //         id:'9',
    //         img: 'assets/Image/user2.png',
    //         name: "Kavin",
    //         date: '05/06/2024',
    //         referralid: "#485625",
    //         coins: '500'
    //     },
    //     {
    //         id:'10',
    //         img: 'assets/Image/user4.png',
    //         name: "Kaviya Anjali",
    //         date: '05/06/2024',
    //         referralid: "#485625",
    //         coins: '500'
    //     },
    //     {
    //         id:'11',
    //         img: 'assets/Image/user4.png',
    //         name: "Kaviya Anjali",
    //         date: '05/06/2024',
    //         referralid: "#485625",
    //         coins: '500'
    //     },
    //     {
    //         id:'12',
    //         img: 'assets/Image/user4.png',
    //         name: "Kaviya Anjali",
    //         date: '05/06/2024',
    //         referralid: "#485625",
    //         coins: '500'
    //     },
    //     {
    //         id:'13',
    //         img: 'assets/Image/user5.png',
    //         name: "Dhanush",
    //         date: '05/06/2024',
    //         referralid: "#485625",
    //         coins: '500'
    //     },
    //     {
    //         id:'14',
    //         img: 'assets/Image/user5.png',
    //         name: "Dhanush",
    //         date: '05/06/2024',
    //         referralid: "#485625",
    //         coins: '500'
    //     },
    //     {
    //         id:'15',
    //         img: 'assets/Image/user5.png',
    //         name: "Dhanush",
    //         date: '05/06/2024',
    //         referralid: "#485625",
    //         coins: '500'
    //     },
    // ]
    const token= JSON.parse(sessionStorage.getItem('token'));
    const userId = (token.id)
    console.log(userId);

    
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
                    <div className="income-inner row">
                        {error ? (
                            <div className="col-12">
                                <p style={{ textAlign: 'center' }}>{error}</p>
                            </div>
                        ) : (user && user.map((i, index) => {
                            return (
                                
                                <>
                                    <div className="col-12 col-md-6 col-lg-4" key={index}>
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
                                    </div>
                                </>
                            )
                        }))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Income