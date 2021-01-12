import React from 'react';
import classnames from 'classnames';
import { CustomToolTipProps } from './types';
import { useGetStyles } from './styles';

/**
 * Custom tool tips for rechart graphs
 */
const CustomToolTip = (props:CustomToolTipProps) => {
  const {
    active,
    payload,
    label,
    formatter,
    className,
  } = props;

  const { classes } = useGetStyles();

  if (active) {
    let { value } = payload?.[0];
    if (formatter) {
      value = formatter(value);
    }
    return (
      <div className={classnames(classes.root, className, 'big-dipper', 'custom-tool-tip')}>
        <p className="custom-tool-tip__label">{label}</p>
        <p className="custom-tool-tip__value">{value}</p>
      </div>
    );
  }

  return null;
};

export default CustomToolTip;