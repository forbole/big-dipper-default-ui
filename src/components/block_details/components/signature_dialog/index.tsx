import React from 'react';
import classnames from 'classnames';
import {
  Dialog,
  IconButton,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableSortLabel,
} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import {
  ArrowDropDown,
  Close,
} from '@material-ui/icons';
import { getColumns } from './utils';
import { useSignatureHook } from './hooks';
import {
  DialogProps,
  DialogTitleProps,
} from './types';
import { Data } from './types';

const SignatureDialog = (props: DialogProps) => {
  const {
    handleClose,
    open,
    data,
    labels,
    title,
    className,
  } = props;

  const columns = getColumns(labels);

  const {
    state,
    handleSort,
  } = useSignatureHook(data);

  const DialogTitle = (titleProps: DialogTitleProps) => {
    const {
      children,
      onClose,
    } = titleProps;

    return (
      <MuiDialogTitle
        className={classnames('dialogTitle')}
        disableTypography
      >
        <Typography className={classnames('dialogTitle')} variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            className={classnames('closeIcon')}
          >
            <Close />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  };

  return (
    <Dialog maxWidth="lg" fullWidth className={classnames(className, 'dialog')} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle onClose={handleClose}>
        {title}
      </DialogTitle>
      <Table className={classnames('signatureTable')} stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow className={classnames('tableHead', 'table__row')}>
            {columns.map((column: any) => {
              if (column.sort) {
                return (
                  <TableCell
                    className={classnames('headTitle')}
                    key={column.id}
                    align={column.align as any}
                  >
                    <TableSortLabel
                      active={state.activeSort === column.id}
                      direction={state.activeSort === column.id ? state.sortDirection : 'asc'}
                      onClick={handleSort(column.id)}
                      IconComponent={ArrowDropDown}
                    >
                      {column.label}
                    </TableSortLabel>
                  </TableCell>
                );
              }
              return (
                <TableCell
                  key={column.id}
                  align={column.align as any}
                >
                  {column.label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {state.data.map((x: Data) => {
            return (
              <TableRow className={classnames('tableRow')}>
                <TableCell className={classnames('display', 'validator')}>
                  {x.validator.display}
                </TableCell>
                <TableCell align="right" className={classnames('value', 'votingPower')}>
                  {x.votingPower.display}
                </TableCell>
                <TableCell align="right" className={classnames('value', 'votingPowerPercentage')}>
                  {x.votingPowerPercentage.display}
                </TableCell>
                <TableCell className={classnames('value', 'signStatus')}>
                  {x.signStatus.display}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Dialog>
  );
};

export default SignatureDialog;
