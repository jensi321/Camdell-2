import React from 'react'
import { Accordion } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'

const Faq = () => {
    const faq = [
        {
            id: '1',
            title: 'How can create offers in merchant ?'
        },
        {
            id: '2',
            title: 'How can create offers in merchant ?'
        },
        {
            id: '3',
            title: 'How can create offers in merchant ?'
        },
        {
            id: '4',
            title: 'How can create offers in merchant ?'
        },
        {
            id: '5',
            title: 'How can create offers in merchant ?'
        },

    ]
    return (
        <>
            <div className="faq-outer">
                <div className="container">
                    <div className="faq-inner">
                        <div className="row">
                            <div className="col-12 col-lg-6 item">
                                <div className="item-inner">
                                    <div className="img-content">
                                        <img src="assets/Image/faq.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 item">
                                <div className="item-inner">
                                    <div className="heading">
                                        <h3>Frequently asked questions</h3>
                                    </div>

                                    <div className="search-box">
                                        <div className="input-box">
                                            <div className="icon"><FaSearch /></div>  <input type="text" placeholder='Describe your issue' /></div>
                                        <button className='button'>Search</button>
                                    </div>

                                    <div className="faq">
                                        <Accordion defaultActiveKey="1">
                                            {
                                                faq.map((i) => {
                                                    return (
                                                        <Accordion.Item eventKey={i.id} >
                                                            <Accordion.Header>{i.title}</Accordion.Header>
                                                            <Accordion.Body>
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    )
                                                })
                                            }

                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq