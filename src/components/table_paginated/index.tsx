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
} from '@material-ui/core';
import { TablePaginationActions } from '../..';
import { TablePaginatedProps } from './types';
import { useTablePaginatedHook } from './hooks';
import {
  dummyLabels, dummyData,
} from './utils';
import { useGetStyles } from './styles';

const TablePaginated = () => {
  const props:TablePaginatedProps = {
    className: '',
    data: dummyData,
    labels: dummyLabels,
  };

  const {
    data,
    labels,
    className,
  } = props;

  const {
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    rowsPerPage,
  } = useTablePaginatedHook();

  const { classes } = useGetStyles();

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'table-paginated')}>
      <TableContainer>
        <Table className={classnames('table')}>
          <TableHead>
            <TableRow>
              {
                labels.map((x) => {
                  return (
                    <TableCell
                      key={x.label}
                      className={classnames(`label__${x.label}`, 'table__label')}
                      align={x.align}
                    >
                      {x.display}
                    </TableCell>
                  );
                })
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => {
              return (
                <TableRow
                  key={`row-${i}`}
                  className={classnames('table__row')}
                >
                  {labels.map(({ label }) => {
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
                rowsPerPage={rowsPerPage}
                page={page}
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
