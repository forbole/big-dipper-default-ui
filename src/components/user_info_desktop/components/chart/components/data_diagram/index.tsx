import React from 'react';
import classnames from 'classnames';
import { DataDiagramProps } from './types';

const DataDiagram = (prop: DataDiagramProps) => {
  const {
    className,
    data,
  } = prop;

  return (

    <div className={classnames(className, 'dataType')}>
      <div className={classnames('dataRow')}>
        <p className={classnames('dataName')}>{data.title}</p>
        <p className={classnames('dataAmount')}>{data.display}</p>
      </div>
    </div>
  );
};

export default DataDiagram;
