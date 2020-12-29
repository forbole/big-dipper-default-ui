import React from 'react';
import classnames from 'classnames';
import { ProposalDepositMobileProps } from './types';
import { useGetStyles } from './styles';
import { Container } from './components';

const ProposalDepositMobile = (props: ProposalDepositMobileProps) => {
  const {
    title,
    data,
    className,
  } = props;

  const { classes } = useGetStyles();

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'proposalDepositMobile')}>
      <h1>
        {title}
      </h1>
      {data.map((row: any) => {
        return (
          <Container depositor={row.depositor} amount={row.amount} time={row.time} />
        );
      })}
    </div>
  );
};

export default ProposalDepositMobile;
