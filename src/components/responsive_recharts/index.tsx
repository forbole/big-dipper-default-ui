import React from 'react';
import classnames from 'classnames';
import { ResponsiveContainer } from 'recharts';
import { useGetStyles } from './styles';
import { ResponsiveRechartsProps } from './types';

/**
 * Recharts helper to setup responsive and remove resizing lag
 */
const ResponsiveRecharts = (props:ResponsiveRechartsProps) => {
  const {
    children,
    aspect = 0,
  } = props;
  const { classes } = useGetStyles();
  return (
    <div
      className={classnames(classes.root, 'big-dipper', 'responsive-recharts')}
    >
      <ResponsiveContainer height="100%" width="99%" aspect={aspect}>
        {children}
      </ResponsiveContainer>
    </div>
  );
};

export default ResponsiveRecharts;
