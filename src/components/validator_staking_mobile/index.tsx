import React from 'react';
import classnames from 'classnames';
import { TablePagination } from '@material-ui/core';
import { ValidatorStakingMobileProps } from './types';
import { useGetStyles } from './styles';
import { useTablePaginationHook } from './hooks';
import { TablePaginationActions } from './components';

const ValidatorStakingMobile = (props: ValidatorStakingMobileProps) => {
  const {
    data,
    className,
    labels,
  } = props;

  const {
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    rowsPerPage,
  } = useTablePaginationHook();

  const { classes } = useGetStyles();
  return (
    <div
      className={classnames(classes.root, className, 'big-dipper', 'validator-staking-mobile')}
    >
      {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => {
        return (
          <div
            key={`validator-staking-mobile-row-${i}`}
            className={classnames('staking')}
          >
            <div className={classnames('validator-staking-container')}>

              <div className={classnames('validator-staking-content')}>
                <div className={classnames('validator-staking-address')}>
                  {row.address}
                </div>
                <div className={classnames('validator-staking-amount', 'overflow')}>
                  {row.amount}
                </div>

              </div>
              {
                !!row.redelegate && !!labels && (
                  <div className={classnames('staking__redelegate')}>
                    {labels.from}
                    &nbsp;
                    {row.redelegate.from}
                    &nbsp;
                    {labels.redelegateTo.toLowerCase()}
                    &nbsp;
                    {row.redelegate.to}
                  </div>
                )
              }
            </div>
          </div>
        );
      })}
      <TablePagination
        className="validator-staking__pagination"
        rowsPerPageOptions={[]}
        labelRowsPerPage=""
        colSpan={6}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        ActionsComponent={(subProps:any) => <TablePaginationActions {...subProps} />}
      />
    </div>
  );
};

export default ValidatorStakingMobile;
