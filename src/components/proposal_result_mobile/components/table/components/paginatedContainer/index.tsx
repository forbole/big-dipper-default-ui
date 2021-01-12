import React from 'react';
import classnames from 'classnames';
import { PaginatedContainerProps } from './types';
import { Container } from './components';

const PaginatedContainer = (props: PaginatedContainerProps) => {
  const {
    className,
    data,
    overrideLabel,
  } = props;

  return (
    <div className={classnames('mainContainer')}>
      {data.map((row: any, i) => {
        return (
          <Container
            data={row}
            overrideLabel={overrideLabel}
            // key={i}
            // validator={row.validator.display}
            // votingPower={row.votingPower.display}
            // answer={row.answer.display}
            // votingPowerPercentage={row.votingPowerPercentage.display}
            // votingPowerOverride={row.votingPowerOverride.display}
          />
        );
      })}
      {/* <div className={classnames('line')} />
      <div className={classnames('container')}>
        <div className={classnames('depositor')}>
          {validator}
        </div>
        <div className={classnames('amount')}>
          {answer}
        </div>
      </div>
      <div className={classnames('container')}>
        <div className={classnames('votingPower')}>
          {votingPower}
          <span className={classnames('votingPowerPercentage')}>
            {votingPowerPercentage}
          </span>
        </div>
        <div className={classnames('votingPowerOverride')}>
          {votingPowerOverride}
        </div>
      </div> */}
    </div>
  );
};

export default PaginatedContainer;
