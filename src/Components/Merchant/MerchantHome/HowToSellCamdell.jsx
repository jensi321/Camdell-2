import React from 'react'

const HowToSellCamdell = () => {

    const step = [
        {
            id:'1',
            img:'assets/Image/register.png',
            name:'Register your account',
            des:'Register on camdell with GST/PAN Details and an active bank account'

        },
        {
            id:'2',
            img:'assets/Image/shipping.jpeg',
            name:'Choose strong & shipping',
            des:'Choose storage, packaging , and delivery option'

        },
        {
            id:'3',
            img:'assets/Image/product.jpeg',
            name:'List your products',
            des:'List your product by providing product and brand details'

        },
        {
            id:'4',
            img:'assets/Image/paid.png',
            name:'Completed order & get paid',
            des:'List your product by providing product and brand details'

        },
    ]

    return (
        <>
            <div className="sell-outer">
                <div className="container">
                    <div className="sell-inner">
                        <div className="heading">
                            <h3>How to sell on Camedell.in</h3>
                        </div>
                        <div className="step-outer row">
                            {step.map((i) =>{
                                return(
                                    <div className="item col-12 col-lg-6">
                                        <div className="item-inner">
                                            <div className="img-content">
                                                <img src={i.img} alt="" />
                                            </div>
                                            <div className="text-content">
                                                <h2>Step {i.id} : {i.name}</h2>
                                                <p>
                                                    {i.des}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowToSellCamdell
