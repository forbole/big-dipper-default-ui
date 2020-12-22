import React from 'react';
import classnames from 'classnames';
import { TablePagination } from '@material-ui/core';
import { ValidatorStakingMobileProps } from './types';
import { useGetStyles } from './styles';
import { validatorStakingMobileHook } from './hooks';
import { TablePaginationActionsMobile } from './table_pagination_actions_mobile';

const ValidatorStakingMobile = (props: ValidatorStakingMobileProps) => {
  const {
    data, className,
  } = props;
  const {
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    rowsPerPage,
  } = validatorStakingMobileHook();

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
      <div className={classnames('table-pagination', 'flex')}>
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
          ActionsComponent={TablePaginationActionsMobile}
        />
      </div>
    </div>
  );
};

export default ValidatorStakingMobile;
