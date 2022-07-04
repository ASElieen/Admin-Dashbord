import React, { Fragment } from 'react'
import ReactEcharts from 'echarts-for-react'



const Stacked = ({width,height,data,color}) => {
  let options = {
    color:color,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: data.dataX,
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Budget',
        type: 'bar',
        barWidth: '60%',
        //具有相同stack值的柱状图会进行堆叠
        stack: 'total',
        data: data.dataY
      },
      {
        name: 'Expense',
        type: 'bar',
        barWidth: '60%',
        stack: 'total',
        data: data.dataY
      }
    ]
  };

  return (
    <Fragment>
      <div style={{width:width,height:height}}>
      <ReactEcharts  option={options} style={{width:'100%',height:'100%'}} />
    </div>
    </Fragment>
  )
}

export default Stacked