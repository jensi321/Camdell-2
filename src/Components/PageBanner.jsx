import React from 'react'

const PageBanner = (props) => {
    return (
        <><div className="page-banner">
            <div className="conatiner">
                <div className="page-inner">
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div></>
    )
}

export default PageBanner