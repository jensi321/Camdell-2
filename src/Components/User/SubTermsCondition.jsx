import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CategoryApi } from '../BaseURL/BaseUrl';


const SubTermsCondition = ({close}) => {
    
    
const [terms, setTerms] = useState([]);

const selectedId = 2;

useEffect(() => {
    axios.get(`${CategoryApi}/getconfig`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
    })

        .then(function (response) {
            console.log(response.data.data);
            setTerms(response.data.data);
        })

        .catch(function (error) {
            console.error('There was an error making the request:', error);
        });
}, []);

const foundTerm = terms.find(term => term.id === selectedId);


    return (
        <>
            {foundTerm &&
                (<div className="sub-terms-outer">
                    <div className="sub-terms-inner">
                        <div className="heading">
                            <h3>{foundTerm.name}</h3>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: foundTerm.value }} />
                        <Link className='button' onClick={close} >OK</Link>
                    </div>
                </div>
                )}
        </>
    )
}

export default SubTermsCondition