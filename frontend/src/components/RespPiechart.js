
import React from 'react';
import Plot from 'react-plotly.js';

class RespPiechart extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            values: [267, 1127],

            labels: ['Unaddressed', 'Addressed'],
    
            type: 'pie'
          },
        ]}
        layout={ 
          {
            height: 375,

            width: 475,
    
            title: "Addressed vs Unaddressed (daily)"
        } }
      />
    );
  }
}

export default RespPiechart;