import React from 'react';
import classnames from 'classnames';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
} from 'recharts';
import { ChartProps } from './types';
import { DataDiagram } from './components';

const Chart = (prop: ChartProps) => {
  const {
    chart,
    className,
  } = prop;

  const baseData = [{
    value: 100,
  }];

  const isNotEmpty = chart.data.some((x) => x.value);

  return (
    <div className={classnames(className, 'chart')}>
      <div className={classnames('mainContent')}>
        <div className={classnames('chartBox', 'box')}>
          <ResponsiveContainer height="100%">
            <PieChart>
              {isNotEmpty ? (
                <Pie
                  data={chart.data}
                  startAngle={30}
                  endAngle={-330}
                  isAnimationActive={false}
                  innerRadius="85%"
                  outerRadius="100%"
                  dataKey="value"
                  labelLine={false}
                  stroke="none"
                  paddingAngle={3}
                >
                  {
                  chart.data.map((_x: any, index: any) => (
                    <Cell className={classnames(`pie-${index}`)} key={_x.value} fill={chart.colors[index % chart.colors.length]} />
                  ))
                }
                </Pie>
              ) : (
                <Pie
                  data={baseData}
                  startAngle={30}
                  endAngle={-330}
                  isAnimationActive={false}
                  innerRadius="85%"
                  outerRadius="100%"
                  dataKey="value"
                  labelLine={false}
                  stroke="none"
                >
                  <Cell className={classnames('pie-empty')} fill={chart.baseColor ?? 'rgba(248, 248, 248, 1)'} />
                </Pie>
              )}

            </PieChart>
          </ResponsiveContainer>
        </div>
        {/* // mobile */}
        <div className={classnames('total')}>
          <div className={classnames('totalAmount')}>
            <h3>{chart.total.title}</h3>
            <h4>{chart.total.subTitle}</h4>
          </div>
          <div className={classnames('totalDollar')}>
            <h1>{chart.totalDollar.title}</h1>
            <h2>{chart.totalDollar.subTitle}</h2>
          </div>
        </div>
      </div>
      <div className={classnames('dataContent')}>
        <DataDiagram
          className="available"
          data={chart.data[0]}
        />
        <DataDiagram
          className="delegate"
          data={chart.data[1]}
        />
        <DataDiagram
          className="unbonding"
          data={chart.data[2]}
        />
        <DataDiagram
          className="reward"
          data={chart.data[3]}
        />
        <DataDiagram
          className="commision"
          data={chart.data[4]}
        />
      </div>
      {/* desktop */}
      <div className={classnames('total__desktop')}>
        <div className={classnames('totalAmount')}>
          <h3>{chart.total.title}</h3>
          <h4>{chart.total.subTitle}</h4>
        </div>
        <div className={classnames('totalDollar')}>
          <h1>{chart.totalDollar.title}</h1>
          <h2>{chart.totalDollar.subTitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default Chart;
