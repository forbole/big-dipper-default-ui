import React from 'react';
import classnames from 'classnames';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  TableFooter,
  TableContainer,
  TableSortLabel,
} from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';
import { TablePaginationActions } from '../..';
import { TableDefaultProps } from './types';
import { useTableDefaultHook } from './hooks';
import { useGetStyles } from './styles';

/**
 * Simple Table with striped rows
 */
const TableDefault = (props: TableDefaultProps) => {
  const {
    data,
    columns,
    className,
    onRowClick,
    initialActiveSort,
    pagination,
  } = props;

  const {
    handleChangePage,
    handleChangeRowsPerPage,
    handleRowClick,
    handleSort,
    state,
  } = useTableDefaultHook({
    rowsPerPageCount: pagination?.rowsPerPage,
    onRowClick,
    initialActiveSort,
    data,
  });

  const { classes } = useGetStyles();

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'table-default')}>
      <TableContainer>
        <Table className={classnames('table')}>
          <TableHead>
            <TableRow>
              {
                columns.map((column) => {
                  if (column.sort) {
                    return (
                      <TableCell
                        key={column.label}
                        align={column.align as any}
                      >
                        <TableSortLabel
                          className={classnames(`label__${column.label}`, 'table__label')}
                          active={state.activeSort === column.label}
                          direction={state.activeSort === column.label ? state.sortDirection : 'asc'}
                          onClick={handleSort(column.label)}
                          IconComponent={ArrowDropDown}
                        >
                          {column.display}
                        </TableSortLabel>
                      </TableCell>
                    );
                  }

                  return (
                    <TableCell
                      key={column.label}
                      className={classnames(`label__${column.label}`, 'table__label')}
                      align={column.align as any}
                    >
                      {column.display}
                    </TableCell>
                  );
                })
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(
              state.page * state.rowsPerPage,
              state.page * state.rowsPerPage + state.rowsPerPage,
            ).map((row, i) => {
              return (
                <TableRow
                  key={`row-${i}`}
                  className={classnames('table__row')}
                  onClick={() => handleRowClick(row)}
                >
                  {columns.map(({
                    label, align,
                  }) => {
                    const cellData = row[label];

                    if (cellData) {
                      return (
                        <TableCell
                          key={`${label}-${i}`}
                          align={align as any}
                          className={classnames(cellData.className, 'table__cell')}
                        >
                          {cellData.display}
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell className={classnames('table__cell')} />
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
          {!!pagination && (
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[]}
                  count={data.length}
                  rowsPerPage={state.rowsPerPage}
                  page={state.page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={(subProps:any) => <TablePaginationActions {...subProps} />}
                />
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableDefault;
