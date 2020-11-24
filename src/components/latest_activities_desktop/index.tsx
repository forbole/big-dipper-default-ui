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
  } = props;
  const { classes } = useGetStyles();
  return (
    <Paper
      elevation={0}
      className={classnames(classes.root, className, 'big-dipper', 'latest-activities-desktop')}
    >
      <Table className={classnames('table')} size="small">
        <TableBody>
          {data.map((x:any, i) => (
            <Row data={x} key={x.time} labels={collapsibleLabels} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default LatestActivitiesDesktop;
