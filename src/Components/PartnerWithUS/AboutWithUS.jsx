import React from 'react'
import Subscribe from '../User/Home/Subscribe'
import OurCllient from './OurCllient'

const AboutWithUS = () => {
    return (
        <>
            <div className="about-with-us">
                <div className="container">
                    <div className="about-with-inner">
                        <div className="about">
                            <div className="heading">
                                <h3>
                                    About us
                                </h3>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>

                        <OurCllient />
                        <Subscribe />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutWithUS