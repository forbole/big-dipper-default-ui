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
            <div className={classnames('yes', 'dataType')}>
              <div>
                <p className={classnames('dataName')}>
                  {data[0].title}
                  <span className={classnames('percentage')}>
                    (
                    {data[0].percentage}
                    )
                  </span>
                </p>
                <p className={classnames('dataDisplay')}>{data[0].amount}</p>
              </div>
            </div>

            <div className={classnames('veto', 'dataType')}>
              <div>
                <p className={classnames('dataName')}>
                  {data[3].title}
                  <span className={classnames('percentage')}>
                    (
                    {data[3].percentage}
                    )
                  </span>
                </p>
                <p className={classnames('dataDisplay')}>{data[3].amount}</p>
              </div>
            </div>
          </div>
          <div className={classnames('dataColumn')}>
            <div className={classnames('no', 'dataType')}>
              <div>
                <p className={classnames('dataName')}>
                  {data[2].title}
                  <span className={classnames('percentage')}>
                    (
                    {data[2].percentage}
                    )
                  </span>
                </p>
                <p className={classnames('dataDisplay')}>{data[2].amount}</p>
              </div>
            </div>

            <div className={classnames('abstain', 'dataType')}>
              <div>
                <p className={classnames('dataName')}>
                  {data[1].title}
                  <span className={classnames('percentage')}>
                    (
                    {data[1].percentage}
                    )
                  </span>
                </p>
                <p className={classnames('dataDisplay')}>{data[1].amount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
