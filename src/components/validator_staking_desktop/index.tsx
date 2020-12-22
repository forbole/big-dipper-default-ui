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
import { TablePaginationActions } from './table_pagination_actions';

const ValidatorStakingDesktop = (props: ValidatorStakingDesktopProps) => {
  const {
    data, labels, className,
  } = props;
  const {
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    rowsPerPage,
  } = validatorStakingHook();

  const { classes } = useGetStyles();
  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'validator-staking-desktop')}>
      <TableContainer>
        <Table className={classnames('table')}>
          <TableHead>
            <TableRow>
              <TableCell className={classnames('label', 'address')}>{labels.address}</TableCell>
              {labels.from
                ? <TableCell align="left" className={classnames('label', 'from')}>{labels.from}</TableCell> : null }
              {labels.redelegateTo
                ? <TableCell align="left" className={classnames('label', 'redelegateTo')}>{labels.redelegateTo}</TableCell> : null }

              <TableCell align="right" className={classnames('label', 'amount')}>{labels.amount}</TableCell>
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
                  {row.from
                    ? (
                      <TableCell align="left" className={classnames('cell', 'from')}>
                        {row.from}
                      </TableCell>
                    ) : null}
                  {row.redelegateTo
                    ? (
                      <TableCell align="left" className={classnames('cell', 'redelegateTo')}>
                        {row.redelegateTo}
                      </TableCell>
                    ) : null }
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
                colSpan={6}
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
      </TableContainer>

    </div>
  );
};

export default ValidatorStakingDesktop;
