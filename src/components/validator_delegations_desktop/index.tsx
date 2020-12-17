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
} from '@material-ui/core';
import { ValidatorDelegationsDesktopProps } from './types';
import { useGetStyles } from './styles';
import { validatorDelegationsDesktopUtils } from './utils';
import { validatorDelegationsHook } from './hooks';
import { TablePaginationActions } from './table_pagination_actions';

const ValidatorDelegationsDesktop = (props: ValidatorDelegationsDesktopProps) => {
  const {
    data, labels, className, onClick,
  } = props;
  const {
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    rowsPerPage,
  } = validatorDelegationsHook();

  const { classes } = useGetStyles();
  const { handleClick } = validatorDelegationsDesktopUtils(onClick);
  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'validator-delegations-desktop')}>
      <Table className={classnames('table')}>
        <TableHead>
          <TableRow>
            <TableCell className={classnames('label', 'address')}>{labels.address}</TableCell>
            <TableCell align="right" className={classnames('label', 'amount')}>{labels.amount}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
            return (
              <TableRow
                key={row.amount}
                className={classnames('single-row')}
                onClick={() => handleClick(row)}
              >
                <TableCell className={classnames('cell', 'address')}>
                  {row.address}
                </TableCell>
                <TableCell align="right" className={classnames('cell', 'amount')}>
                  {row.amount}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50, {
                label: 'All', value: -1,
              }]}
              colSpan={3}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}

            />
          </TableRow>
        </TableFooter>
      </Table>

    </div>
  );
};

export default ValidatorDelegationsDesktop;
