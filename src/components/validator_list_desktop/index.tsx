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
import { ArrowDropDown } from '@material-ui/icons';
import { useGetStyles } from './styles';
import { ValidatorListDesktopProps } from './types';
import {
  getActiveColumns, getInactiveColumns,
} from './utils';
import { useTableHook } from './hooks';
import { Data } from './types';
import { Row } from './components';

const ValidatorListDesktop = (props: ValidatorListDesktopProps) => {
  const {
    labels,
    className,
    onClick,
    data,
    inactive,
  } = props;

  const {
    state,
    handleSort,
    onRowClick,
  } = useTableHook(data, onClick);

  const { classes } = useGetStyles();
  const columns = inactive ? getInactiveColumns(labels) : getActiveColumns(labels);

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'validator-list-desktop')}>
      <Table className={classnames('data-container__table', 'table')}>
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
                      IconComponent={ArrowDropDown}
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
                onClick={onRowClick}
                key={row.operatorAddress}
                data={row}
                columns={columns}
                index={i}
              />
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ValidatorListDesktop;
