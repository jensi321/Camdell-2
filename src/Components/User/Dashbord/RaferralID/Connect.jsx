import React, {  useEffect, useState } from 'react'
import { BaseUrl, ImageUrl } from '../../../BaseURL/BaseUrl';

const Connect = () => {
    // const User = [
    //     {
    //         img: 'assets/Image/user1.png',
    //         name: "Dinesh kumar",
    //         referralid: "#485625",
    //     },
    //     {
    //         img: 'assets/Image/user1.png',
    //         name: "Dinesh kumar",
    //         referralid: "#485625",
    //     },
    //     {
    //         img: 'assets/Image/user1.png',
    //         name: "Dinesh kumar",
    //         referralid: "#485625",
    //     },
    //     {
    //         img: 'assets/Image/user3.png',
    //         name: "Sanjay kumar",
    //         referralid: "#485625",
    //     },
    //     {
    //         img: 'assets/Image/user3.png',
    //         name: "Sanjay kumar",
    //         referralid: "#485625",
    //     },
    //     {
    //         img: 'assets/Image/user3.png',
    //         name: "Sanjay kumar",
    //         referralid: "#485625",
    //     },
    //     {
    //         img: 'assets/Image/user2.png',
    //         name: "Kavin",
    //         referralid: "#485625",
    //     },
    //     {
    //         img: 'assets/Image/user2.png',
    //         name: "Kavin",
    //         referralid: "#485625",
    //     },
    //     {
    //         img: 'assets/Image/user2.png',
    //         name: "Kavin",
    //         referralid: "#485625",
    //     },
    //     {
    //         img: 'assets/Image/user4.png',
    //         name: "Kaviya Anjali",
    //         referralid: "#485625",
    //     },
    //     {
    //         img: 'assets/Image/user4.png',
    //         name: "Kaviya Anjali",
    //         referralid: "#485625",
    //     },
    //     {
    //         img: 'assets/Image/user5.png',
    //         name: "Dhanush",
    //         referralid: "#485625",
    //     },

    // ]
    const [error, setError] = useState(null);
    const [user, setUser] = useState([])

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

            <div className="connect-outer">
                <div className="container">
                    <div className="connect-inner">
                        
                           {error ? (
                            <div className="col-12">
                                <p style={{ textAlign: 'center' }}>{error}</p>
                            </div>
                        ) : ( user &&  user.map((i) => {
                                return (
                                    <div className="item">
                                        <div className="item-inner">
                                            <div className="img-content">
                                            <img src={`${ImageUrl}/${i.profile_image}`} alt="" />
                                            </div>
                                            <div className="text-content">
                                                <div className="user-name">
                                                    {i.name}
                                                </div>
                                                <div className="referral-id">
                                                    <span>Referral ID : </span>{i.id}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )

                            }))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Connect