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
import { ValidatorStakingDesktopProps } from './types';
import { useGetStyles } from './styles';
import { validatorStakingHook } from './hooks';
import { TablePaginationActions } from '../..';
import { getRows } from './utils';

const ValidatorStakingDesktop = (props: ValidatorStakingDesktopProps) => {
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
  } = validatorStakingHook();
  const rows = getRows(labels);
  const { classes } = useGetStyles();
  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'validator-staking-desktop')}>
      <TableContainer>
        <Table className={classnames('table')}>
          <TableHead>
            <TableRow>
              {
                rows.map((row) => {
                  return (
                    <TableCell
                      key={row.className}
                      className={classnames(`label__${row.className}`, 'label')}
                      align={row.align}
                    >
                      {row.display}
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
                  key={`validator-staking-row-${i}`}
                  className={classnames('single-row')}
                >
                  <TableCell className={classnames('cell', 'address')}>
                    {row.address}
                  </TableCell>
                  {!!row.redelegate && (
                    <>
                      <TableCell className={classnames('cell', 'from')}>
                        {row.redelegate.from}
                      </TableCell>
                      <TableCell className={classnames('cell', 'redelegate-to')}>
                        {row.redelegate.to}
                      </TableCell>
                    </>
                  )}
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
                rowsPerPageOptions={[]}
                colSpan={6}
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

export default ValidatorStakingDesktop;
