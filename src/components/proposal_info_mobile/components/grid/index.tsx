import React from 'react';
import classnames from 'classnames';
import { Grid } from '@material-ui/core';
import { Status } from './components';
import { GridProps } from './types';

const GridDisplay = (props: GridProps) => {
  const {
    label, data,
  } = props;

  return (
    <Grid container spacing={3}>
      <Grid item xs={6} className={classnames('label')}>
        {label.id}
      </Grid>
      <Grid item xs={6} className={classnames('displayContent')}>
        #
        {data.id}
      </Grid>
      <hr />
      <Grid item xs={6} className={classnames('label')}>
        {label.proposer}
      </Grid>
      <Grid item xs={6} className={classnames('displayContent')}>
        <div className={classnames('proposer')}>
          {data.proposer}
        </div>
      </Grid>
      <hr />
      <Grid item xs={6} className={classnames('label')}>
        {label.type}
      </Grid>
      <Grid item xs={6} className={classnames('displayContent')}>
        {data.type}
      </Grid>
      <hr />
      <Grid item xs={12} className={classnames('label')}>
        {label.description}
      </Grid>
      <Grid item xs={12} className={classnames('descriptionDisplay')}>
        {data.description}
      </Grid>
      <hr />
      <Grid item xs={6} className={classnames('label')}>
        {label.deposit}
      </Grid>
      <Grid item xs={6} className={classnames('displayContent')}>
        {data.deposit}
      </Grid>
      <hr />
      <Grid item xs={6} className={classnames('label', 'statusRow')}>
        {label.status}
      </Grid>
      <Grid item xs={6} className={classnames('displayContent', 'statusRow')}>
        <Status display={data.status.display} />
      </Grid>
      <hr />
      <Grid item xs={6} className={classnames('label')}>
        {label.submittedTime}
      </Grid>
      <Grid item xs={6} className={classnames('displayContent')}>
        {data.submittedTime}
      </Grid>
      <hr />
      <Grid item xs={6} className={classnames('label')}>
        {label.depositEndTime}
      </Grid>
      <Grid item xs={6} className={classnames('displayContent')}>
        {data.depositEndTime}
      </Grid>
      <hr />
      <Grid item xs={6} className={classnames('label')}>
        {label.votingStartTime}
      </Grid>
      <Grid item xs={6} className={classnames('displayContent')}>
        {data.votingStartTime}
      </Grid>
      <hr />
      <Grid item xs={6} className={classnames('label')}>
        {label.votingEndTime}
      </Grid>
      <Grid item xs={6} className={classnames('displayContent')}>
        {data.votingEndTime}
        <div className={classnames('days')}>
          {data.duration}
        </div>
      </Grid>
      <hr />
    </Grid>
  );
};

export default GridDisplay;
