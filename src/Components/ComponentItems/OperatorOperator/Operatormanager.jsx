import React, {  useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { BaseUrl } from '../../BaseURL/BaseUrl'

const Operatormanager = () => {
   

    const [manager , setManager] = useState([])
    const token = JSON.parse(sessionStorage.getItem('token'));
    console.log(token)
    const userId = token.id
    useEffect(() => {

        const fetchData = async () => {
            const formData = {
                user_id:userId
            }
            try {
                const response = await fetch(`${BaseUrl}/getoperator.php`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                const data = await response.json();
                setManager(data.data);

                console.log(data.data)
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [userId])


    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${BaseUrl}/deleteoperator.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: id })
            });
            const data = await response.json();
            if (data.success) {
                setManager(manager.filter((item) => item.id !== id));
                alert("Operator Deleted Successfully");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="operator-manager-outer create-operator-login ">
                <div className="container">
                    <div className="operator-manager-inner">
                        <div className="row">


                            {manager && manager.map((i,index) => {
                                return (
                                    <>
                                        <div className="item col-12 col-sm-6 col-md-4 col-xl-3" key={index}>
                                            <div className="item-inner">
                                                <div className="img-content">
                                                    <img src="assets/Image/manager.png" alt="" />
                                                    <div className="user-post">{i.operator_type}</div>
                                                    <div className="edit"><FaRegEdit /></div>
                                                </div>
                                                <div className="text-content">
                                                    <div className="name">Name : {i.name}</div>
                                                    <div className="email">E-mail ID : {i.email}</div>
                                                </div>
                                                <div className="button-groups">
                                                    <Link className="delete" onClick={() => handleDelete(i.id)}>Delete</Link>
                                                    <Link className="button">View</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Operatormanager
