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
  } = props;
  const {
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    rowsPerPage,
  } = useTablePaginationHook(data);

  const { classes } = useGetStyles();
  return (
    <div
      className={classnames(classes.root, className, 'big-dipper', 'validator-staking-mobile')}
    >
      {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => {
        return (
          <div
            key={`validator-staking-mobile-row-${i}`}
            className={classnames('staking', 'flex')}
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
              <div>

                {row.from && row.redelegateTo ? (
                  <div
                    className={classnames('validator-staking-redelegate-message', 'flex')}
                  >
                    From
                    {' '}
                    {row.from}
                    {' '}
                    redelegate to
                    {' '}
                    {row.redelegateTo}

                  </div>
                ) : null}
              </div>

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
