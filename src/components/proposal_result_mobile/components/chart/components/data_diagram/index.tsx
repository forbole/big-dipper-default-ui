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
      <div className={classnames('dataRow')}>
        <p className={classnames('dataName')}>{data.title}</p>
        <p className={classnames('dataPercentage')}>{data.percentage}</p>
      </div>
    </div>
  );
};

export default DataDiagram;
