import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import { getData } from './utils';
import { ToolTipProps } from './types';

/**
 * Custom tool tips for validator blocks
 */
const ToolTip = (props:ToolTipProps) => {
  const {
    active,
    payload,
    labels,
    className,
  } = props;
  const { classes } = useGetStyles();

  if (payload && active) {
    const { payload: data } = payload?.[0];
    const formattedData = getData(labels, data);
    return (
      <div className={classnames(classes.root, className, 'big-dipper', 'tool-tip')}>
        {formattedData.map((x) => {
          return (
            <div className="tool-top__single" key={x.label}>
              <p className="single__label">{x.label}</p>
              {typeof x.value === 'string'
                ? <p className="single__value">{x.value}</p>
                : x.value}
            </div>
          );
        })}
      </div>
    );
  }

  return null;
};

export default ToolTip;
