import React from 'react';
import {
  TableCell,
  TableRow,
} from '@material-ui/core';
import { formatRow } from './utils';

const Row = (props: any) => {
  const {
    data,
    columns,
    index,
  } = props;
  const formatData = formatRow(data, index);

  return (
    <TableRow>
      {columns.map((column:any) => {
        const value = formatData[column.id];
        return (
          <TableCell
            key={column.id}
            align={column.align}
          >
            {value}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default Row;
