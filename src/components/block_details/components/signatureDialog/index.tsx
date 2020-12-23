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
} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import {
  UnfoldMoreSharp,
  Close,
} from '@material-ui/icons';
import { useSignatureHook } from './hooks';
import {
  DialogProps,
  DialogTitleProps,
} from './types';
import { useGetStyles } from './styles';

const SignatureDialog = (props: DialogProps) => {
  const {
    handleClose,
    open,
    data,
    tableHead,
    title,
    desktop,
  } = props;

  const { classes } = useGetStyles();

  const {
    isAsc,
    handleChange,
  } = useSignatureHook();

  const responsiveClass = desktop ? classes.desktop : classes.mobile;

  const sortedData = data.sort((a, b) => a.signStatus - b.signStatus);

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
    <Dialog maxWidth="lg" fullWidth fullScreen={!desktop} className={classnames(classes.root, responsiveClass, 'dialog')} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle onClose={handleClose}>
        {title}
      </DialogTitle>
      <Table className={classnames('signatureTable')}>
        <TableHead>
          <TableRow className={classnames('tableHead', 'table__row')}>
            <TableCell className={classnames('headTitle')}>{tableHead.validator}</TableCell>
            <TableCell className={classnames('headTitle')} align="right">{tableHead.votingPower}</TableCell>
            <TableCell className={classnames('headTitle')} align="right">{tableHead.votingPowerPercentage}</TableCell>
            <TableCell className={classnames('headTitle')} sortDirection="asc" onClick={handleChange}>
              {tableHead.signStatus}
              <UnfoldMoreSharp className={classnames('arrowIcon')} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(isAsc ? sortedData : Array.from(sortedData).reverse()).map((x) => {
            return (
              <TableRow className={classnames('tableRow')}>
                <TableCell className={classnames('display', 'validator')}>
                  {x.validator}
                </TableCell>
                <TableCell align="right" className={classnames('value', 'votingPower')}>
                  {x.votingPower}
                </TableCell>
                <TableCell align="right" className={classnames('value', 'votingPowerPercentage')}>
                  {x.votingPowerPercentage}
                </TableCell>
                <TableCell className={classnames('value', 'signStatus')}>
                  {x.signStatus}
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
