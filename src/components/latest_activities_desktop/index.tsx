import React from 'react';
import classnames from 'classnames';
import {
  Table,
  TableBody,
  Paper,
} from '@material-ui/core';
import { Row } from './components';
import { LatestActivitiesDesktopProps } from './types';
import { useGetStyles } from './styles';

const LatestActivitiesDesktop = (props:LatestActivitiesDesktopProps) => {
  const {
    data,
    className,
    collapsibleLabels,
    onClick,
  } = props;
  const { classes } = useGetStyles();
  return (
    <Paper
      elevation={0}
      className={classnames(classes.root, className, 'big-dipper', 'latest-activities-desktop')}
    >
      <Table className={classnames('table')}>
        <TableBody>
          {data.map((x:any, i) => (
            <Row
              data={x}
              key={`${x.time}-${i}`}
              labels={collapsibleLabels}
              onClick={onClick}
            />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default LatestActivitiesDesktop;
