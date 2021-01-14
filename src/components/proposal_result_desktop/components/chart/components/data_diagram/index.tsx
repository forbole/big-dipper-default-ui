import React from 'react';
import classnames from 'classnames';
import { ChartProps } from './types';

const DataDiagram = (prop: ChartProps) => {
  const {
    className,
    data,
  } = prop;

  return (

    <div className={classnames(className, 'dataType')}>
      <div>
        <p className={classnames('dataName')}>
          {data.title}
          <span className={classnames('percentage')}>
            (
            {data.percentage}
            )
          </span>
        </p>
        <p className={classnames('dataDisplay')}>{data.amount}</p>
      </div>
    </div>
  );
};

export default DataDiagram;
