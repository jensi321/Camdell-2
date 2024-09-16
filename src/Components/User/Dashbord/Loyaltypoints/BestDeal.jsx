import React, { useContext, useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { FiPackage } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { BaseUrl, ImageUrl } from '../../../BaseURL/BaseUrl';
import { ProfileContext } from '../../../Context/UserContext';
import Addressing from './Addressing';

const BestDeal = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [showAddressingComponent, setShowAddressingComponent] = useState(false);
    const {loyaltyPoint} = useContext(ProfileContext)
    const [items, setItems] = useState([]);
    const handleClose = () => {
        setShowModal(false);
        setSelectedItem(null);
    };
    const handleShow = (item) => {
        setShowModal(true);
        setSelectedItem(item);
    };
    const {  userId } = useContext(ProfileContext);

    const handleAddressingComponent = () => {

        const formData = {
          user_id: userId,
          point: selectedItem.point,
          product_id: selectedItem.id
        }

        console.log("formData :" , formData)
      
        fetch(`${BaseUrl}/usepoint.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
              },
            body: JSON.stringify(formData)
          })
          .then(response => {
            if (!response.ok) {
              throw new Error(`API error: ${response.status}`);
            }
            return response.json();
          })
        .then(data => {
          console.log(data);
          setShowAddressingComponent(true);
        })
        .catch(error => {
          console.error('API error:', error);
        });
      }

    useEffect(() => {


        const formData = {
            user_id: userId
        }

        console.log(formData)
        fetch(`${BaseUrl}/getproduct.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                  },
                body: JSON.stringify(formData)
            })

            .then(response => response.json())

            .then(data => {

                setItems(data.data);
                console.log(data.data);

            })

            .catch(error => {

                console.error('API error:', error);

            });

    }, [userId]);

    return (
        <>

            {
                showAddressingComponent ? (
                    <Addressing setShowOrderList={props.setShowOrderList} />
                ) : (<div className="loyalty-points-outer">
                    <div className="container">
                        <div className="loyalty-points-inner">
                            <div className="top">
                                <div className="current-coins">
                                    <div className="text-content"><h3>Loyalty point</h3>
                                        <p>Current Points</p>
                                        <div className="coins-ruppes">
                                            <div className="coin-img">
                                                <img src="assets/Image/Coins.png" alt="" />
                                            </div>
                                            <div className="coins-point">
                                                {loyaltyPoint}
                                            </div>
                                        </div>

                                    </div>
                                    <div className="img-content">
                                        <img src="assets/Image/loyaltypoint.png" alt="" />
                                    </div>

                                </div>

                                <div className="oreder-now">
                                    <Link to='' onClick={props.setShowOrderList}> <span className='icon'><FiPackage />
                                    </span> Your Order</Link>

                                </div>
                            </div>
                            <div className="bottom">
                                <div className="heading">
                                    <h3>Best Deals</h3>
                                </div>
                                <div className="bestdeal-outer">
                                    {items &&
                                        items.map((i,index) => {
                                            return (<>

                                                <div className="item" key={index}>
                                                    <div className="item-inner">
                                                        <div className="img-content">
                                                            <img src={`${ImageUrl}/${i.image}`} alt="" />
                                                        </div>
                                                        <div className="text-content">
                                                            <h4>{i.name}</h4>

                                                            <Link to='' onClick={() => handleShow(i)}>Use <img src='assets/Image/Coins.png' alt='' /> {i.point}</Link>


                                                        </div>
                                                    </div>
                                                </div>
                                                {selectedItem && (
                                                    <Modal show={showModal} onHide={handleClose}>
                                                        <div className="loyalty-point-modal">
                                                            <div className="loyalty-point-modal-inner">
                                                                <div className="img-text">
                                                                    <div className="img-content">
                                                                    <img src={`${ImageUrl}/${selectedItem.image}`} alt="" />
                                                                    </div>
                                                                    <div className="text-content">
                                                                        <p>{selectedItem.name}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="description">
                                                                    <h5>Description</h5>
                                                                    <p>This is part of a redesign for a bank account opening solution. This project had some really interesting constraints</p>
                                                                </div>
                                                                <div className="modal-button">
                                                                    <Link to='' onClick={handleAddressingComponent} className='button'>Use <img src='assets/Image/Coins.png' alt='' /> {selectedItem.point}</Link>
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
                </div>)
            }

        </>
    )
}

export default BestDeal