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
// import { getRows } from './utils';

const UserStakingDesktop = () => {
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
    <div>staking desktop</div>
  );
};

export default UserStakingDesktop;
