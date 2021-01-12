import React from 'react';
import classnames from 'classnames';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
} from 'recharts';
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
          <div className={classnames('yes', 'dataType')}>
            <div className={classnames('dataRow')}>
              <p className={classnames('dataName')}>{data[0].title}</p>
              <p className={classnames('dataPercentage')}>{data[0].percentage}</p>
            </div>
          </div>
          <div className={classnames('no', 'dataType')}>
            <div className={classnames('dataRow')}>
              <p className={classnames('dataName')}>{data[2].title}</p>
              <p className={classnames('dataPercentage')}>{data[2].percentage}</p>
            </div>
          </div>
          <div className={classnames('veto', 'dataType')}>
            <div className={classnames('dataRow')}>
              <p className={classnames('dataName')}>{data[3].title}</p>
              <p className={classnames('dataPercentage')}>{data[3].percentage}</p>
            </div>
          </div>
          <div className={classnames('abstain', 'dataType')}>
            <div className={classnames('dataRow')}>
              <p className={classnames('dataName')}>{data[1].title}</p>
              <p className={classnames('dataPercentage')}>{data[1].percentage}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
