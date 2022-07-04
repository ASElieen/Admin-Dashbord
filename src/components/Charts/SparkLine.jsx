// import { SparklineAreaDataEcharts } from "../../data/dummy";
import React from "react";
import ReactEcharts from 'echarts-for-react'



const SparkLine = ({height,width,lineWidth,color,data,type,currentColor}) => {
  let option = {
    xAxis: {
      type: "category",
      data: data.dataX,
      show:false
    },
    yAxis: {
      type: "value",
      splitLine:{show:false},
      show:false
    },
    series: [
      {
        data: data.dataY,
        type: type,
        symbol:'circle',
        symbolSize:7,
        lineStyle:{
            width:lineWidth,
            color:color
        },
        label:{
          show:true
        }
      },
    ],
  };
  return (
    <div style={{width:width,height:height}}>
      <ReactEcharts option={option} style={{width:'100%',height:'100%'}}></ReactEcharts>
    </div>
  )
};

export default SparkLine;
