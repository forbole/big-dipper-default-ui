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
import { TablePaginatedProps } from './types';
import { useTablePaginatedHook } from './hooks';
import {
  dummyLabels, dummyData,
} from './utils';
import { useGetStyles } from './styles';

/**
 * Simple Table with pagination and striped rows
 */
const TablePaginated = () => {
  const props:TablePaginatedProps = {
    className: '',
    data: dummyData,
    columns: dummyLabels,
    initialActiveSort: 'validator',
  };

  const {
    data,
    columns,
    className,
    rowsPerPage: rowsPerPageCount,
    onRowClick,
    initialActiveSort,
  } = props;

  const {
    handleChangePage,
    handleChangeRowsPerPage,
    handleSort,
    state,
  } = useTablePaginatedHook({
    rowsPerPageCount,
    onRowClick,
    initialActiveSort,
    data,
  });

  const { classes } = useGetStyles();

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'table-paginated')}>
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
                        align={column.align}
                      >
                        <TableSortLabel
                          active={state.activeSort === column.label}
                          direction={state.activeSort === column.label ? state.sortDirection : 'asc'}
                          onClick={handleSort(column.label)}
                          IconComponent={ArrowDropDown}
                        >
                          {column.label}
                        </TableSortLabel>
                      </TableCell>
                    );
                  }

                  return (
                    <TableCell
                      key={column.label}
                      className={classnames(`label__${column.label}`, 'table__label')}
                      align={column.align}
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
                >
                  {columns.map(({ label }) => {
                    const cellData = row[label];

                    if (cellData) {
                      return (
                        <TableCell
                          key={`${label}-${i}`}
                          align={cellData.align}
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
        </Table>
      </TableContainer>
    </div>
  );
};

export default TablePaginated;
