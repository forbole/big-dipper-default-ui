import React from 'react';
import {
  TableCell,
  TableRow,
} from '@material-ui/core';
import classnames from 'classnames';
import { formatRow } from './utils';

const Row = (props: any) => {
  const {
    data,
    columns,
    index,
    onClick,
  } = props;
  const formatData = formatRow(data, index);

  return (
    <TableRow onClick={() => onClick(data)} className={classnames('table__row')}>
      {columns.map((column:any) => {
        const value = formatData[column.id];

        return (
          <TableCell
            key={column.id}
            align={column.align}
          >
            <span
              className={classnames({
                [data.status.className]: column.id === 'status',
                status: column.id === 'status',
              })}
            >
              {value}
            </span>
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default Row;
