import React from 'react';
import { VictoryArea, VictoryChart, VictoryAxis, VictoryStack } from 'victory';


const ChartProgress = () => {

    const progress = [
        {
            persntage: '83',
            color: '#038667',
            title: 'Usage of offers'
        },
        {
            persntage: '66',
            color: '#B39B5D',
            title: 'Offline purchase offers'
        },
        {
            persntage: '40',
            color: '#EE9612',
            title: 'Online purchase offers'
        },
    ]


    const calculateDataSize = (total, percentages) => {
        const totalPercentage = percentages.reduce((acc, cur) => acc + cur, 0);
        return percentages.map(percentage => (total * percentage) / totalPercentage);
    };

    // Dynamic percentages for the datasets
    const percentages = [88, 66, 40];

    // Sample data
    const totalDataSize = 100; // Total size of the data
    const dataSize = calculateDataSize(totalDataSize, percentages);

    // Generate sample data based on sizes
    const data = dataSize.map((size, index) => {
        const dataSet = [];
        for (let i = 1; i <= 25; i++) {
            // Generate random y values for demonstration
            dataSet.push({ x: i, y: Math.floor(Math.random() * 10) + 1 });
        }
        return dataSet;
    });

    return (
        <>
            <div className="chart-progress-outer">
                <div className="chart-progress-inner">
                    <div className="left">
                        <div className="text-inner">
                            {progress.map((i) => {
                                return(
                                    <div className='data-info'>
                                        <div className='persentage-text' style={{ backgroundColor: `${i.color}` }}>
                                            <span >{i.persntage}%</span>
                                        </div>
                                        <div className='offer-text'>{i.title}</div>
                                    </div>
                                    )
                            })}

                        </div>

                    </div>
                    <div className="right">
                        <div className='chart-table'>

                        <VictoryChart width={1200} height={450}>
                        <VictoryAxis style={{
                            axis: { stroke: "#7D7979", strokeDasharray: "5, 5" },
                            tickLabels: { fill: "none" },
                            grid: { stroke: "none" }
                        }} />
                        <VictoryAxis dependentAxis style={{
                            axis: { stroke: "#7D7979", strokeDasharray: "5, 5" },
                            tickLabels: { fill: "none" },
                            grid: { stroke: "#D1D1D1", strokeDasharray: "5, 5" }
                        }} />
                        <VictoryStack colorScale={ progress.map((i) => (i.color))}>
                            {data.map((dataSet, index) => (
                                <VictoryArea key={index} data={dataSet} interpolation="natural" />
                            ))}
                        </VictoryStack>
                    </VictoryChart>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChartProgress
