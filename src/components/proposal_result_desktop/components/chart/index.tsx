import React from 'react';
import classnames from 'classnames';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
} from 'recharts';
import { DataDiagram } from './components';
import { ChartProps } from './types';

const Chart = (prop: ChartProps) => {
  const {
    title,
    data,
    amount,
    subTitle,
    colors,
    className,
  } = prop;

  return (
    <div className={classnames(className, 'chart')}>
      <div className={classnames('chartBox', 'box')}>
        <ResponsiveContainer height="100%">
          <PieChart>
            <Pie
              data={data}
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
                data.map((_x: any, index: any) => (
                  <Cell className={classnames(`pie-${index}`)} key={_x.value} fill={colors[index % colors.length]} />
                ))
              }
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className={classnames('mainContent')}>
        <p className={classnames('subTitle')}>
          {subTitle}
        </p>
        <h1>
          {title}
          <span className={classnames('amount')}>
            {amount}
          </span>
        </h1>
        <div className={classnames('dataContent')}>
          <div className={classnames('dataColumn')}>
            <DataDiagram
              className="yes"
              data={data[0]}
            />
            <DataDiagram
              className="veto"
              data={data[3]}
            />
          </div>
          <div className={classnames('dataColumn')}>
            <DataDiagram
              className="no"
              data={data[2]}
            />
            <DataDiagram
              className="abstain"
              data={data[1]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
