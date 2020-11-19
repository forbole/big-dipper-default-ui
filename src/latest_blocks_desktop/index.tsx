import React from 'react';
import classnames from 'classnames';
import {
  Table, TableBody, TableCell, TableHead, TableRow,
} from '@material-ui/core';
import { LatestBlocksDesktopProps } from './types';
import { useGetStyles } from './styles';

const LatestBlocksDesktop = (props:LatestBlocksDesktopProps) => {
  const {
    data, labels, className,
  } = props;
  const { classes } = useGetStyles();

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'latest-blocks-desktop')}>
      <Table className={classnames('table')} size="small">
        <TableHead>
          <TableRow>
            <TableCell className={classnames('label', 'time')}>{labels.time}</TableCell>
            <TableCell className={classnames('label', 'hash')}>{labels.hash}</TableCell>
            <TableCell className={classnames('label', 'proposer')}>{labels.proposer}</TableCell>
            <TableCell align="right" className={classnames('label', 'tx')}>{labels.tx}</TableCell>
            <TableCell align="right" className={classnames('label', 'height')}>{labels.height}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
            return (
              <TableRow key={row.time} className={classnames('single-row')}>
                <TableCell className={classnames('cell', 'time')}>
                  {row.time}
                </TableCell>
                <TableCell className={classnames('cell', 'hash')}>
                  {row.hash}
                </TableCell>
                <TableCell className={classnames('cell', 'proposer')}>
                  <row.proposer />
                </TableCell>
                <TableCell align="right" className={classnames('cell', 'tx')}>{row.tx}</TableCell>
                <TableCell align="right" className={classnames('cell', 'height')}>
                  <row.height />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default LatestBlocksDesktop;
