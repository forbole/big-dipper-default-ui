import React from 'react';
import {
  TableCell,
  TableRow,
} from '@material-ui/core';

const Row = (props: any) => {
  const {
    data,
    columns,
    index,
  } = props;

  return (
    <TableRow
      hover
      role="checkbox"
      tabIndex={-1}
      key={data.user}
    >
      {columns.map((column, i) => {
        const value = data[column.id];
        return (
          <TableCell
            key={i}
            align={column.align}
          >
            {value?.display ?? value}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default Row;
