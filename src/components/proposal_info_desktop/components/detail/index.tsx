import React from 'react';
import classnames from 'classnames';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { DetailProps } from './types';

const Detail = (props: DetailProps) => {
  const {
    data, label,
  } = props;
  return (
    <Table className={classnames('detail')}>
      <TableBody>
        <TableRow>
          <TableCell className={classnames('label', 'type')}>
            {label.type}
          </TableCell>
          <TableCell className={classnames('cell', 'type')}>
            {data.type}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={classnames('label', 'detail')}>
            {label.description}
          </TableCell>
          <TableCell className={classnames('cell', 'detail')}>
            {data.description}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Detail;
