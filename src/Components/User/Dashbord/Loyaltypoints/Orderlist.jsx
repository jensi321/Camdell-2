import React, {  useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap';
import { FaX } from 'react-icons/fa6';
import { BaseUrl } from '../../../BaseURL/BaseUrl';

const Orderlist = () => {


    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [orderItems, setOrderItems] = useState([])

    const [msg, setMsg] = useState('Your Order')


    const handleClose = () => {
        setShowModal(false);
        setSelectedItem(null);
    };
    const handleShow = (item) => {
        setShowModal(true);
        setSelectedItem(item);
    };

    const token= JSON.parse(sessionStorage.getItem('token'));
    const userId = (token.id)
    console.log(userId);
    useEffect(() => {

    


        const formData = {
            user_id: userId
        }

        console.log(formData)
        fetch(`${BaseUrl}/myorder.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData)
        })

            .then(response => response.json())

            .then(data => {
                if (data.success) {
                    setOrderItems(data.data); // assuming the API returns an array of order items in the "data" property
                    console.log(data);
                } else {
                    console.error('API error:', data.data); // display the error message to the console
                    setMsg(data.data.error)
                }
            })

            .catch(error => {

                console.error('API error:', error);

            });

    }, [userId]);



    return (
        <>
            <div className="order-list-outer">
                <div className="container">
                    <div className="order-list-inner">
                        <div className="heading">
                            <h3>{msg}</h3>
                        </div>

                        <div className="order-list-items row">
                            {
                                orderItems && orderItems.map((i) => {
                                    return (<>
                                        <div className="item col-12  col-xl-3 col-lg-4 col-md-6">
                                            <div className="item-inner">
                                                <div className="order-id-track">
                                                    <div className="order-id">
                                                        Order ID : {i.orderid}
                                                    </div>
                                                    <Link to='' onClick={() => handleShow(i)}>Track</Link>
                                                </div>

                                                <div className="content">
                                                    <div className="img-content">
                                                        <img src={i.img} alt="" />
                                                    </div>
                                                    <div className="text-content">
                                                        <h2>{i.name}</h2>
                                                        <p>Use <img src="assets/Image/Coins.png" alt="" /> {i.coins}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {selectedItem && (
                                            <Modal show={showModal} onHide={handleClose}>

                                                <div className="trackmodal-outer">
                                                    <div className="trackmodal-inner">
                                                        <div className="item">
                                                            <div className="item-inner">
                                                                <div className="order-id-track">
                                                                    <div className="order-id">
                                                                        Order ID : {selectedItem.orderid}
                                                                    </div>
                                                                    <Link to='' onClick={handleClose}><FaX /></Link>
                                                                </div>

                                                                <div className="content">
                                                                    <div className="img-content">
                                                                        <img src={selectedItem.img} alt="" />
                                                                    </div>
                                                                    <div className="text-content">
                                                                        <h2>{selectedItem.name}</h2>
                                                                        <p>Use <img src="assets/Image/Coins.png" alt="" /> {selectedItem.coins}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-tracker">
                                                            <ul>
                                                                <li>
                                                                    <span>
                                                                        <b>Order confirmed in</b> 27nd Apr 24
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span>
                                                                        <b>Delivery on</b> 27nd Apr 24
                                                                    </span>
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                </div>

                                            </Modal>
                                        )}
                                    </>

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

export default Orderlist