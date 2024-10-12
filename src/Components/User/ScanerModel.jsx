import React, { useContext } from 'react'
import { FaRegEyeSlash } from 'react-icons/fa6';
import Slider from 'react-slick';
import { ProfileContext } from '../Context/UserContext';


const ScanerModel = () => {
    const {  userName } = useContext(ProfileContext);

    return (
        <>
            <div className="scaner-outer">
                <div className="scaner-inner">
                    <div className="logo-content">
                        <img src='assets/Image/logo.png' alt="" />
                    </div>
                    <Slider className='owl-theme' margin={10} items={1} nav={false} dots>
                        <div className="item">
                            <div className="item-inner">

                                <div className="img-content">
                                    <img src='assets/Image/QR-Code.png' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-inner">
                                <div className="content-outer row">
                                    <div className="content">
                                        <div className="code">
                                            <span><FaRegEyeSlash />
                                            </span>
                                            <p>4000  1234  5647  9102</p>
                                        </div>
                                        <div className="date-id">
                                            <div className="expiration">
                                                <span>Expiration</span>
                                                <h4>04/07/2024</h4>
                                            </div>
                                            <div className="referelid">
                                                <span>Referral ID</span>
                                                <h4>#12A45A</h4>
                                            </div>

                                        </div>
                                        <div className="custoumer-name">
                                            <h3>{userName}</h3>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default ScanerModel