import React from 'react';
import classnames from 'classnames';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@material-ui/core';
import { Row } from './components';
import { Data } from '../../types';

const ValidatorTable = (props:any) => {
  const {
    columns,
    state,
    handleSort,
  } = props;

  return (
    <Table className={classnames('data-container__table')}>
      <TableHead>
        <TableRow>
          {columns.map((column: any) => {
            if (column.sort) {
              return (
                <TableCell
                  key={column.id}
                  align={column.align as any}
                >
                  <TableSortLabel
                    active={state.activeSort === column.id}
                    direction={state.activeSort === column.id ? state.sortDirection : 'asc'}
                    onClick={handleSort(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              );
            }
            return (
              <TableCell
                key={column.id}
                align={column.align as any}
              >
                {column.label}
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {state.data.map((row: Data, i: number) => {
          return (
            <Row
              key={row.displayName}
              data={row}
              columns={columns}
              index={i}
            />
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ValidatorTable;
