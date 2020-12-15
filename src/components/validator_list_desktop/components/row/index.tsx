import React from 'react';
import {
  TableCell,
  TableRow,
} from '@material-ui/core';
import classnames from 'classnames';
import { formatRow } from './utils';
import { RowProps } from './types';

const Row = (props: RowProps) => {
  const {
    data,
    columns,
    index,
    onClick,
  } = props;
  const formatData = formatRow(data, index);

  return (
    <TableRow onClick={() => onClick(data)} className={classnames('table__row')}>
      {columns.map((column: any) => {
        const value = formatData[column.id];

        return (
          <TableCell
            key={column.id}
            align={column.align}
          >
            <div
              className={classnames({
                [data.status.className]: column.id === 'status',
                status: column.id === 'status',
                rank: column.id === 'rank',
                condition: column.id === 'condition',
                [data.condition.className]: column.id === 'condition',
              })}
            >
              {value}
            </div>
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default Row;
