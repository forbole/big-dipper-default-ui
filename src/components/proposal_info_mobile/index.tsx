import React from 'react';
import classnames from 'classnames';
import { ProposalInfoProps } from './types';
import { useGetStyles } from './styles';
import {
  Button,
  Grid,
} from './components';

const ProposalInfoDesktop = (props: ProposalInfoProps) => {
  const {
    data, className, label,
  } = props;

  const { classes } = useGetStyles(data.status.current);
  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'proposalInfoMobile')}>

      <Grid
        data={data}
        label={label}
      />
      <Button display={data.status.display} />

    </div>
  );
};

export default ProposalInfoDesktop;
