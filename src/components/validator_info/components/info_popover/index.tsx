import React from 'react';
import {
  Popover, Paper,
} from '@material-ui/core';
import { HelpOutline } from '@material-ui/icons';
import classnames from 'classnames';
import { useInfoPopoverHook } from './hooks';
import { useGetStyles } from './styles';
import { InfoPopoverProps } from './types';

const InfoPopover = (props: InfoPopoverProps) => {
  const {
    detail,
    className,
  } = props;

  const {
    handlePopoverOpen,
    handlePopoverClose,
    anchorEl,
    open,
  } = useInfoPopoverHook();
  const { classes } = useGetStyles();

  return (
    <span
      aria-owns={open ? 'mouse-over-popover' : undefined}
      aria-haspopup="true"
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      <HelpOutline fontSize="small" className="question-icon icon" />
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Paper
          elevation={0}
          className={classnames('popover__container', className)}
        >
          {detail}
        </Paper>
      </Popover>
    </span>
  );
};

export default InfoPopover;
