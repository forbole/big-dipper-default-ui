import React from 'react';
import {
  Dialog,
  Typography,
  IconButton,
} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import classnames from 'classnames';
import { Close } from '@material-ui/icons';
import { useGetStyles } from './styles';
import {
  InfoDialogProps,
  DialogTitleProps,
} from './types';

const InfoDialog = (props: InfoDialogProps) => {
  const {
    handleClose,
    title,
    open,
    className,
  } = props;

  const { classes } = useGetStyles();

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
    <Dialog maxWidth="lg" className={classnames(classes.root, className, 'dialog')} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle onClose={handleClose}>
        {title}
      </DialogTitle>
      <p>
        Scan for address
      </p>

    </Dialog>
  );
};

export default InfoDialog;
