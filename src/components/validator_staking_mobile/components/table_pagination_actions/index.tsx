import React from 'react';
import classnames from 'classnames';
import { IconButton } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import {
  FirstPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LastPage,
} from '@material-ui/icons';
import { TablePaginationActionsMobileProps } from './types';
import { useGetStyles } from './styles';
import { useTablePaginationActionsHooks } from './hooks';

/**
 * custom pagination buttons
 * @param props
 */
const TablePaginationActions = (props: TablePaginationActionsMobileProps) => {
  const { classes } = useGetStyles();
  const theme = useTheme();
  const {
    count,
    page,
    rowsPerPage,
  } = props;

  const {
    handleFirstPage,
    handleNextPage,
    handlePreviousPage,
    handleLastPage,
  } = useTablePaginationActionsHooks(props);

  const disablePrevious = page === 0;
  const disableNext = page >= Math.ceil(count / rowsPerPage) - 1;

  return (
    <div className={classnames(classes.root, 'pagination-actions')}>
      <IconButton
        disableRipple
        onClick={handleFirstPage}
        disabled={disablePrevious}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPage /> : <FirstPage />}
      </IconButton>
      <IconButton
        disableRipple
        onClick={handlePreviousPage}
        disabled={disablePrevious}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <p className={classnames('pagination-actions__page')}>
        {page}
      </p>
      <IconButton
        disableRipple
        onClick={handleNextPage}
        disabled={disableNext}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        disableRipple
        onClick={handleLastPage}
        disabled={disableNext}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPage /> : <LastPage />}
      </IconButton>
    </div>
  );
};

export default TablePaginationActions;
