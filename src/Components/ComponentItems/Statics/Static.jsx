import React from 'react'
import ChartProgress from './ChartProgress'
import CircularProgressBar from './CircularProgressBar'

const Static = () => {
  return (
    <>
            <div className="staticpage-outer">
                <div className="container">
                    <div className="staticpage-inner">
                            <CircularProgressBar/>
                            <ChartProgress/>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Static
