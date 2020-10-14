import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function CustomTooltip({ payload, active }) {
    if (active) {
      return (
        <div className="custom-tooltip" style={{border: 'solid 1px #8884d8', padding: '1em', fontSize: 'xx-small'}}>
          {`${payload[0].value} New ${payload[0].payload.name}`}
        </div>
      );
    }
    return null;
}

const Chart = ({userType}) => {
    
    const data = [
        {name: userType, uv: 3, pv: 3, amt: 4},
        {name: userType, uv: 4, pv: 2, amt: 3},
        {name: userType, uv: 5, pv: 5, amt: 6},
        {name: userType, uv: 6, pv: 7, amt: 6},
        {name: userType, uv: 10, pv: 9, amt: 10},
        {name: userType, uv: 11, pv: 12, amt: 11},
        {name: userType, uv: 12, pv: 12, amt: 12},
  ];

    return ( 
        <LineChart 
            width={500} height={150} 
            data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            
            <XAxis />
            
            <YAxis />
            
            <Tooltip content={<CustomTooltip />}/>
        
        </LineChart>
    );
}
 
export default Chart;