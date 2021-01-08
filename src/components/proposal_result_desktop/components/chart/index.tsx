import React from 'react';
import classnames from 'classnames';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
} from 'recharts';
import { Props } from './types';

const Chart = (prop: Props) => {
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
                <p className={classnames('dataName')}>{data[0].title}</p>
                <p className={classnames('dataDisplay')}>{data[0].display}</p>
              </div>
            </div>

            <div className={classnames('veto', 'dataType')}>
              <div>
                <p className={classnames('dataName')}>{data[3].title}</p>
                <p className={classnames('dataDisplay')}>{data[3].display}</p>
              </div>
            </div>
          </div>
          <div className={classnames('dataColumn')}>
            <div className={classnames('no', 'dataType')}>
              <div>
                <p className={classnames('dataName')}>{data[2].title}</p>
                <p className={classnames('dataDisplay')}>{data[2].display}</p>
              </div>
            </div>

            <div className={classnames('abstain', 'dataType')}>
              <div>
                <p className={classnames('dataName')}>{data[1].title}</p>
                <p className={classnames('dataDisplay')}>{data[1].display}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
