import React from 'react'

const UsedCupon = () => {

    const cupon = [
        {
            name:'Kavin Kumar',
            img:'assets/Image/user6.jpeg',
            componyimg :'assets/Image/swiggy.png',
            compony:'Swiggy',
            Cat : 'Food  & Drinks',
            Started : '08-feb-2024',
            Sub : 'Dinners',
            Ended : '30-feb-2024',
            Deals :  'Discount',
            Type : 'Online',
            Date : '06/07/2024',
            Time : '12 : 00 PM',
            amount : 'Rs 1,500'
        },
        {
            name:'Kavin Kumar',
            img:'assets/Image/user6.jpeg',
            componyimg :'assets/Image/swiggy.png',
            compony:'Swiggy',
            Cat : 'Food  & Drinks',
            Started : '08-feb-2024',
            Sub : 'Dinners',
            Ended : '30-feb-2024',
            Deals :  'Discount',
            Type : 'Online',
            Date : '06/07/2024',
            Time : '12 : 00 PM',
            amount : 'Rs 1,500'
        },
        {
            name:'Kavin Kumar',
            img:'assets/Image/user6.jpeg',
            componyimg :'assets/Image/swiggy.png',
            compony:'Swiggy',
            Cat : 'Food  & Drinks',
            Started : '08-feb-2024',
            Sub : 'Dinners',
            Ended : '30-feb-2024',
            Deals :  'Discount',
            Type : 'Online',
            Date : '06/07/2024',
            Time : '12 : 00 PM',
            amount : 'Rs 1,500'
        },
        {
            name:'Kalai',
            img:'assets/Image/user7.jpeg',
            componyimg :'assets/Image/swiggy.png',
            compony:'Swiggy',
            Cat : 'Food  & Drinks',
            Started : '08-feb-2024',
            Sub : 'Dinners',
            Ended : '30-feb-2024',
            Deals :  'Discount',
            Type : 'Online',
            Date : '06/07/2024',
            Time : '12 : 00 PM',
            amount : 'Rs 1,500'
        },
        {
            name:'Kalai',
            img:'assets/Image/user7.jpeg',
            componyimg :'assets/Image/swiggy.png',
            compony:'Swiggy',
            Cat : 'Food  & Drinks',
            Started : '08-feb-2024',
            Sub : 'Dinners',
            Ended : '30-feb-2024',
            Deals :  'Discount',
            Type : 'Online',
            Date : '06/07/2024',
            Time : '12 : 00 PM',
            amount : 'Rs 1,500'
        },
        {
            name:'Kalai',
            img:'assets/Image/user7.jpeg',
            componyimg :'assets/Image/swiggy.png',
            compony:'Swiggy',
            Cat : 'Food  & Drinks',
            Started : '08-feb-2024',
            Sub : 'Dinners',
            Ended : '30-feb-2024',
            Deals :  'Discount',
            Type : 'Online',
            Date : '06/07/2024',
            Time : '12 : 00 PM',
            amount : 'Rs 1,500'
        },
        {
            name:'Kavin Kumar',
            img:'assets/Image/user6.jpeg',
            componyimg :'assets/Image/swiggy.png',
            compony:'Swiggy',
            Cat : 'Food  & Drinks',
            Started : '08-feb-2024',
            Sub : 'Dinners',
            Ended : '30-feb-2024',
            Deals :  'Discount',
            Type : 'Online',
            Date : '06/07/2024',
            Time : '12 : 00 PM',
            amount : 'Rs 1,500'
        },
        {
            name:'Kavin Kumar',
            img:'assets/Image/user6.jpeg',
            compony:'Swiggy',
            componyimg :'assets/Image/swiggy.png',
            Cat : 'Food  & Drinks',
            Started : '08-feb-2024',
            Sub : 'Dinners',
            Ended : '30-feb-2024',
            Deals :  'Discount',
            Type : 'Online',
            Date : '06/07/2024',
            Time : '12 : 00 PM',
            amount : 'Rs 1,500'
        },
        {
            name:'Kavin Kumar',
            img:'assets/Image/user6.jpeg',
            compony:'Swiggy',
            componyimg :'assets/Image/swiggy.png',
            Cat : 'Food  & Drinks',
            Started : '08-feb-2024',
            Sub : 'Dinners',
            Ended : '30-feb-2024',
            Deals :  'Discount',
            Type : 'Online',
            Date : '06/07/2024',
            Time : '12 : 00 PM',
            amount : 'Rs 1,500'
        },

    ]


    return (
        <>
            <div className="used-cupon-outer">
                <div className="container">
                    <div className="used-cupon-inner">
                        <div className="row">
                            <div className="col-3">
                                <div className="heading">
                                    <h3>Filter</h3>
                                </div>

                                <div className="filter-option">
                                    <div className="input-group">
                                        <select name="categories" id="categories">
                                            <option value="Select categories" selected disabled>Select categories</option>
                                            <option value="categories-1"  > Categories-1</option>
                                            <option value="categories-2"  > Categories-2</option>
                                            <option value="categories-3"  > Categories-3</option>
                                            <option value="categories-4"  > Categories-4</option>
                                        </select>
                                    </div>
                                    <div className="input-group">
                                        <select name="subcategories" id="subcategories">
                                            <option value="Select Sub - categories" selected disabled>Select Sub - categories</option>
                                            <option value="subcategories-1"  > Categories-1</option>
                                            <option value="subcategories-2"  > Categories-2</option>
                                            <option value="subcategories-3"  > Categories-3</option>
                                            <option value="subcategories-4"  > Categories-4</option>
                                        </select>
                                    </div>
                                    <div className="input-group">
                                        <select name="date" id="date">
                                            <option value="Select Date" selected disabled>Select Date</option>
                                            <option value="Date-1"  > Date-1</option>
                                            <option value="Date-2"  > Date-2</option>
                                            <option value="Date-3"  > Date-3</option>
                                            <option value="Date-4"  > Date-4</option>
                                        </select>
                                    </div>
                                    <div className="input-group">
                                        <select name="time" id="time">
                                            <option value="Select Time" selected disabled>Select Time</option>
                                            <option value="Time-1"  > Time-1</option>
                                            <option value="Time-2"  > Time-2</option>
                                            <option value="Time-3"  > Time-3</option>
                                            <option value="Time-4"  > Time-4</option>
                                        </select>
                                    </div>
                                    <div className="input-group">
                                        <select name="deals" id="deals">
                                            <option value="Select Deals" selected disabled>Select Deals</option>
                                            <option value="Deals-1"  > Deals-1</option>
                                            <option value="Deals-2"  > Deals-2</option>
                                            <option value="Deals-3"  > Deals-3</option>
                                            <option value="Deals-4"  > Deals-4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="heading">
                                    <h3>New</h3>
                                </div>
                                <div className="cupon-row">
                                    <div className="row">
                                        {
                                                cupon.map((i) =>{
                                                    return(
                                                        <div className="item col-12 col-md-6 col-xl-4">
                                                            <div className="item-inner">
                                                                <div className="img-content">
                                                                    <div className="user-info">
                                                                        <img src={i.img} alt="" />
                                                                        <div className="name">
                                                                            {i.name}
                                                                        </div>
                                                                    </div>
                                                                    <div className="compny-info">
                                                                        <img src={i.componyimg} alt="" />
                                                                        <div className="name">{i.compony}</div>
                                                                    </div>
                                                                </div>
                                                                <div className="text-content row">
                                                                        <div className="col-6">Cat : {i.Cat}</div>
                                                                        <div className="col-6">Started : {i.Started}</div>
                                                                        <div className="col-6">Sub - Cat : {i.Sub}</div>
                                                                        <div className="col-6">Ended : {i.Ended}</div>
                                                                        <div className="col-6">Deals :  {i.Deals}</div>
                                                                        <div className="col-6">Type : {i.Type}</div>
                                                                        <div className="col-6">Date : {i.Date}</div>
                                                                        <div className="col-6">Time : {i.Time}</div>
                                                                        <div className="col-12">Purchase amount : {i.amount}</div>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default UsedCupon