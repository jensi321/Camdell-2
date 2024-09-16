import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BaseUrl } from '../../BaseURL/BaseUrl'
import { ProfileContext } from '../../Context/UserContext'

const Promostion = () => {
    // const items = [
    //     {
    //         img: 'assets/Image/swiggy.png',
    //         name: 'Swiggy',
    //         amount: '500',
    //         mode: 'Online',
    //         Plan: 'Gold',
    //         Duration: '1 Month',
    //         Started: '08-feb-2024',
    //         Ended: '30-feb-2024',
    //         Cat: 'Dinners',
    //         Sub: 'Food  & Drinks'
    //     },
    //     {
    //         img: 'assets/Image/dominoz.png',
    //         name: 'MC Dominos',
    //         amount: '500',
    //         mode: 'Offline',
    //         Plan: 'Gold',
    //         Duration: '1 Month',
    //         Started: '08-feb-2024',
    //         Ended: '30-feb-2024',
    //         Cat: 'Dinners',
    //         Sub: 'Food  & Drinks'
    //     },
    //     {
    //         img: 'assets/Image/dominoz.png',
    //         name: 'MC Dominos',
    //         amount: '500',
    //         mode: 'Offline',
    //         Plan: 'Gold',
    //         Duration: '1 Month',
    //         Started: '08-feb-2024',
    //         Ended: '30-feb-2024',
    //         Cat: 'Dinners',
    //         Sub: 'Food  & Drinks'
    //     },
    //     {
    //         img: 'assets/Image/swiggy.png',
    //         name: 'Swiggy',
    //         amount: '500',
    //         mode: 'Online',
    //         Plan: 'Gold',
    //         Duration: '1 Month',
    //         Started: '08-feb-2024',
    //         Ended: '30-feb-2024',
    //         Cat: 'Dinners',
    //         Sub: 'Food  & Drinks'
    //     },
    //     {
    //         img: 'assets/Image/dominoz.png',
    //         name: 'MC Dominos',
    //         amount: '500',
    //         mode: 'Offline',
    //         Plan: 'Gold',
    //         Duration: '1 Month',
    //         Started: '08-feb-2024',
    //         Ended: '30-feb-2024',
    //         Cat: 'Dinners',
    //         Sub: 'Food  & Drinks'
    //     },
    //     {
    //         img: 'assets/Image/dominoz.png',
    //         name: 'MC Dominos',
    //         amount: '500',
    //         mode: 'Offline',
    //         Plan: 'Gold',
    //         Duration: '1 Month',
    //         Started: '08-feb-2024',
    //         Ended: '30-feb-2024',
    //         Cat: 'Dinners',
    //         Sub: 'Food  & Drinks'
    //     },
    //     {
    //         img: 'assets/Image/swiggy.png',
    //         name: 'Swiggy',
    //         amount: '500',
    //         mode: 'Online',
    //         Plan: 'Gold',
    //         Duration: '1 Month',
    //         Started: '08-feb-2024',
    //         Ended: '30-feb-2024',
    //         Cat: 'Dinners',
    //         Sub: 'Food  & Drinks'
    //     },
    // ]

    const [promostion, setPromostion] = useState([])
    const [error, setError] = useState('')
    const {  userId } = useContext(ProfileContext);

    useEffect(() => {

        const fetchData = async () => {

            const formData = {
                user_id: userId
            }
            console.log(formData)
            try {
                const response = await fetch(`${BaseUrl}/mypramotion.php`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                const data = await response.json();
                if (data.data.error) {
                    setError(data.data.error)
                    console.log(data.data)
                }
                else {
                    setPromostion(data.data);
                    setError('')
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
            <div className="promostion-outer">
                <div className="container">
                    <div className="promosition-inner cupon-row">

                        <div className="row">
                            {
                                error ? (
                                    <div className="col-12">
                                        <p style={{ textAlign: 'center' }}>{error}</p>
                                    </div>
                                ) :
                                    (promostion && promostion.map((i, index) => {
                                        return (
                                            <>

                                                <div className="item col-12 col-md-6 col-xl-4" key={index}>
                                                    <div className="item-inner">
                                                        <div className="top">
                                                            <div className="img-content">


                                                                <img src={i.img} alt="" />
                                                                <h2>{i.name}</h2>
                                                                <span className="cupon-mode">{i.mode}</span>

                                                            </div>
                                                            <div className="add-new"><Link>View All</Link>
                                                            </div>
                                                        </div>
                                                        <div className="bottom row">
                                                            <div className="col-6">Subscription Plan : {i.Plan}</div>
                                                            <div className="col-6">Duration   : {i.Duration}</div>
                                                            <div className="col-6">Started : {i.Started}</div>
                                                            <div className="col-6">Ended : {i.Ended}</div>
                                                            <div className="col-6">Sub - Cat : {i.Sub}</div>
                                                            <div className="col-6">Cat : {i.Cat}</div>
                                                            <div className="col-6"><div className="ruppes"><span className="ruppes-icon">₹ </span>{i.amount}</div></div>
                                                            <div className="col-6"><Link to={'/mearchntstatics'}>View Statistics</Link></div>
                                                        </div>

                                                    </div>
                                                </div></>
                                        )
                                    }))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Promostion
