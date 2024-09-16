import React from 'react'
import ChartProgress from '../Statics/ChartProgress'
import CircularProgressBar from '../Statics/CircularProgressBar'

const Statistics = () => {

    return (
        <>

            <div className="statics-outer">
                <div className="container">
                    <div className="static-main-inner">
                        <div className="heading"><h3>Statistics</h3></div>
                        <div className="statics-inner">
                            <div className="circularprogress-outer">
                                <CircularProgressBar />
                            </div>
                            <div className="chart-progress">
                                <ChartProgress />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Statistics
