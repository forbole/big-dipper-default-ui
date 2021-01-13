import React from 'react';
import classnames from 'classnames';
import { TablePagination } from '@material-ui/core';
import { PaginatedContainerProps } from './types';
import { useTablePaginationHook } from './hooks ';
import { Container } from './components';
import { TablePaginationActions } from '../../../../../..';

const PaginatedContainer = (props: PaginatedContainerProps) => {
  const {
    data,
    overrideLabel,
  } = props;

  const {
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    rowsPerPage,
  } = useTablePaginationHook();

  return (
    <div className={classnames('mainContainer')}>
      {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any, i) => {
        return (
          <Container
            key={i}
            data={row}
            overrideLabel={overrideLabel}
          />
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
        ActionsComponent={(subProps: any) => <TablePaginationActions {...subProps} />}
      />
    </div>
  );
};

export default PaginatedContainer;
