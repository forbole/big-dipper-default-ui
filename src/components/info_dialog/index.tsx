import React, { useState } from 'react';
import {
  Dialog,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { Share, Apps, } from '@material-ui/icons/';
import classnames from 'classnames';
import { Close } from '@material-ui/icons';
import { useGetStyles } from './styles';
import {
  InfoDialogProps,
  DialogTitleProps,
} from './types';
import { useInfoDialogHook } from './hooks';

const InfoDialog = (props: InfoDialogProps) => {
  const {
    title,
    className,
    qrCode,
    socialMedia,
    buttonDisplay,
    address,
  } = props;

  const {
    handleClose,
    handleClickOpen,
    open,
  } = useInfoDialogHook();

  const { classes } = useGetStyles();

  const [copySuccess, setCopySuccess] = useState(buttonDisplay);
  const copyToClipBoard = async (copyMe: string) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(buttonDisplay), 1500);
    } catch (err) {
      setCopySuccess('Failed to copy!');
      setTimeout(() => setCopySuccess(buttonDisplay), 1500);
    }
  };

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
    <span
      role="button"
      className={classes.root}
    >
      <Share fontSize="small" className="share-icon icon" onClick={handleClickOpen} />
      <Dialog maxWidth="lg" fullWidth className={classnames(classes.root, className, 'dialog')} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle onClose={handleClose}>
          {title}
        </DialogTitle>
        <div className={classnames('qr-code')}>
          {qrCode || <Apps className={classnames('place-holder')} />}
        </div>
        <div className={classnames('socialMedia')}>
          {socialMedia}
        </div>
        <button type="button" className={classnames('button')} onClick={() => copyToClipBoard(address)}>
          {copySuccess}
        </button>
      </Dialog>
    </span>
  );
};

export default InfoDialog;
