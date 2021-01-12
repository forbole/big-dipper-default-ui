import React from 'react';
import classnames from 'classnames';
// import { Pagination } from '@material-ui/core';
import { PaginatedContainerProps } from './types';
import { useTableDefaultHook } from './hooks ';
import { Container } from './components';

const PaginatedContainer = (props: PaginatedContainerProps) => {
  const {
    className,
    data,
    overrideLabel,
  } = props;

  // const {
  //   handleChangePage,
  //   handleChangeRowsPerPage,
  //   handleRowClick,
  //   handleSort,
  //   state,
  // } = useTableDefaultHook({
  //   rowsPerPageCount: pagination?.rowsPerPage,
  //   onRowClick,
  //   initialActiveSort,
  //   data,
  // });

  return (
    <div className={classnames('mainContainer')}>
      <Pagination count={10} />
      {data.map((row: any, i) => {
        return (
          <Container
            data={row}
            overrideLabel={overrideLabel}
          />
        );
      })}
    </div>
  );
};

export default PaginatedContainer;
