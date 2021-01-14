import React from 'react';
import classnames from 'classnames';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
} from 'recharts';
import { ChartProps } from './types';
import { DataDiagram } from './components';

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
      <h1 className={classnames('subTitle')}>
        {subTitle}
      </h1>
      <h2>
        {title}
      </h2>
      <p className={classnames('amount')}>
        {amount}
      </p>
      <div className={classnames('mainContent')}>
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
        <div className={classnames('dataContent')}>
          <DataDiagram
            className="yes"
            data={data[0]}
          />
          <DataDiagram
            className="no"
            data={data[2]}
          />
          <DataDiagram
            className="veto"
            data={data[3]}
          />
          <DataDiagram
            className="abstain"
            data={data[1]}
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
