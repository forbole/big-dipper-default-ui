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
    onChangePage,
  } = props;

  return (
    <div className={classnames(classes.root)}>
      <IconButton
        disableRipple
        onClick={(e) => onChangePage(e, 0)}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPage /> : <FirstPage />}
      </IconButton>
      <IconButton
        disableRipple
        onClick={(e) => onChangePage(e, 0)}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <p>
        {page}
      </p>
      <IconButton
        disableRipple
        onClick={(e) => onChangePage(e, 0)}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        disableRipple
        onClick={(e) => onChangePage(e, 0)}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPage /> : <LastPage />}
      </IconButton>
    </div>
  );
};

export default TablePaginationActions;
