import React from 'react';
import classnames from 'classnames';
import {
  Table,
  TableBody,
} from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';
import { useBlockDetailsHook } from './hooks';
import { BlockDetailsProps } from './types';
import { useGetStyles } from './styles';
import {
  Dialog,
  Row,
} from './components';

const BlockDetails = (props: BlockDetailsProps) => {
  const {
    desktop,
    title,
    hash,
    time,
    noTransactions,
    proposer,
    signatures,
    signedVotingPower,
    className,
  } = props;

  const {
    open,
    handleClickOpen,
    handleClickClose,
  } = useBlockDetailsHook();

  const { classes } = useGetStyles();
  const responsiveClass = desktop ? classes.desktop : classes.mobile;

  return (
    <div className={classnames(classes.root, responsiveClass, className, 'big-dipper', 'blockDetails')}>
      <Table className={classnames('table')}>
        <TableBody>
          <Row display={<h1>{title}</h1>} className="title" />
          <Row display={hash.display} value={hash.value} className="hash" />
          <Row display={time.display} value={time.value} className="time" />
          <Row display={noTransactions.display} value={noTransactions.value} className="noTransactions" />
          <Row display={proposer.display} value={proposer.value} className="proposer" />
          <Row display={signedVotingPower.display} value={signedVotingPower.value} className="signedVotingPower" />
          <Row
            handleClickOpen={handleClickOpen}
            display={signatures.display}
            value={(
              <span
                className={classnames('signatureValue')}
              >
                {signatures.value}
                <span
                  className={classnames('signatureContent')}
                >
                  <KeyboardArrowRight className={classnames('arrowRight')} />
                </span>
              </span>
            )}
            className="signatures"
          />
        </TableBody>
      </Table>
      <Dialog
        open={open}
        handleClose={handleClickClose}
        labels={signatures.labels}
        data={signatures.data}
        desktop={desktop}
        title={signatures.display}
        className={classnames(classes.root, className)}
      />
    </div>
  );
};

export default BlockDetails;
