import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = () => {

    const progress =[
        {
            persntage :'83',
            color:'#038667',
            title:'Usage of offers'
        },
        {
            persntage :'66',
            color:'#B39B5D',
            title:'Offline purchase offers'
        },
        {
            persntage :'40',
            color:'#EE9612',
            title:'Online purchase offers'
        },
    ]

    return (
        <>
        <div className="static-progress-bar">
        {
            progress.map((i) =>{
                return(
                    <>
                    <div className='progress-outer'>
                        <div className="progress-inner">
                        <CircularProgressbar value={i.persntage} text={`${i.persntage}%`} strokeWidth={'20'} 
                        styles={{path: {
                            stroke: i.color
                        }}}/> 

                        <div className="text-content">
                            
                            <p>{i.title}</p></div>                 
                        </div>
                    </div>
                    </>
                )
            })
        }

        </div>
        
        </>
    )

}

export default CircularProgressBar
