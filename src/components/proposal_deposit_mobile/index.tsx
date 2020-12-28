import React from 'react';
import classnames from 'classnames';
import { ProposalDepositMobileProps } from './types';
import { useGetStyles } from './styles';

const ProposalDepositMobile = (props: ProposalDepositMobileProps) => {
  const {
    title,
    data,
    className,
  } = props;

  const { classes } = useGetStyles();

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'proposalDepositDesktop')}>
      <h1>
        {title}
      </h1>
      {data.map((row: any) => {
        return (
          <div className={classnames('mainContainer')}>
            <div className={classnames('line')} />
            <div className={classnames('container')}>
              <div>
                {row.proposer}
              </div>
              <div className={classnames('amount')}>
                {row.amount}
              </div>
            </div>
            <div>
              {row.time}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProposalDepositMobile;
