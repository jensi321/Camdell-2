import React, { useContext, useEffect } from 'react'
import { BaseUrl } from '../BaseURL/BaseUrl';
import { ProfileContext } from '../Context/UserContext';

const Notification = () => {
    const newnotification = [
        {
            img: 'assets/Image/notification1.png',
            sale: '50% OFF',
            noinfo: " in ultraboost all terrain LTD Shoes!!"
        },
        {
            img: 'assets/Image/notification2.png',
            sale: '',
            noinfo: "One step ahead with stylish colection every week"
        },
    ]
    const earlynotification = [
        {
            img: 'assets/Image/notification3.png',
            sale: 'FLASH Sale',
            noinfo: "starting tomorrow Don’t forget to check it out"
        },
        {
            img: 'assets/Image/notification4.png',
            sale: 'Promo code B88FSECC8#',
            noinfo: " Don’t forget to use"
        },
        {
            img: 'assets/Image/notification5.png',
            sale: 'FLASH Sale',
            noinfo: "starting tomorrow Don’t forget to check it out"
        },
        {
            img: 'assets/Image/notification2.png',
            sale: '',
            noinfo: "One step ahead with stylish colection every week"
        },
    ]

    const {  userId } = useContext(ProfileContext);

    useEffect(() => {
        fetch(`${BaseUrl}/getnotification.php`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({ user_id: userId }),
        })
        .then(response => {

            console.log('Response Status:', response.status);
    
            console.log('Response Headers:', response.headers);
    
            console.log('Response:', response);
    
            return response.json();
    
          })
          .then(data => {

            console.log('API Response Data:', data);
    
            if (data.success) {
    
              console.log('Notifications:', data.data);
    
            } else {
    
              console.log('Error:', data.message);
    
              // Handle error scenario
    
              if (data.error === 'Notification not found') {
    
                console.log('Notification not found for user ID:', userId);
    
                // Provide a user-friendly error message
    
              }
    
            }
    
          })
          .catch(error => {
            console.log(error.message);
          });
      }, [userId]);
    return (
        <>
            <div className="notification-outer">
                <div className="notification-inner">
                    <div className="heading">
                        <h3>Notification</h3>
                    </div>

                    <div className="new-noptification">
                        <p>New <span>{newnotification.length}</span></p>

                        <div className="new">
                            {
                                newnotification.map((i) => {
                                    return (
                                        <div className="item">
                                            <div className="item-inner">
                                                <div className="img-content">
                                                    <img src={i.img} alt="" />
                                                </div>
                                                <div className="text-content">
                                                    <span className="slae">{i.sale}</span> {i.noinfo}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className="early-noptification">
                        <p>New <span>{earlynotification.length}</span></p>

                        <div className="new">
                            {
                                earlynotification.map((i) => {
                                    return (
                                        <div className="item">
                                            <div className="item-inner">
                                                <div className="img-content">
                                                    <img src={i.img} alt="" />
                                                </div>
                                                <div className="text-content">
                                                    <span className="slae">{i.sale}</span> {i.noinfo}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notification