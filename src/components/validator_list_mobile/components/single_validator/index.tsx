import React from 'react';
import classnames from 'classnames';
import { SingleValidatorProps } from './types';
import { useGetStyles } from './styles';
import { useSingleValidatorHook } from './hooks';

const SingleValidator = (props: SingleValidatorProps) => {
  const {
    data, labels, onClick,
  } = props;
  const { classes } = useGetStyles();
  const { handleOnClick } = useSingleValidatorHook(onClick, data);

  return (
    <div
      className={classnames(classes.root, 'single-validator-mobile')}
      onClick={handleOnClick}
      role="button"
    >
      {data.moniker.avatar}
      <div className={classnames('single-validator-mobile__content', 'content')}>
        <div className={classnames('content__top-container', 'flex-content', 'top-container')}>
          <p>{data.moniker.display}</p>
          <p className={classnames('top-container__voting-power')}>{data.votingPower.display}</p>
        </div>
        <div className={classnames('content__bottom-container', 'bottom-container', 'flex-content')}>
          {
            data.commission ? (
              <p className={classnames('bottom-container__commission')}>
                {labels.commission}
                :&nbsp;
                {data.commission.display}
              </p>
            ) : (
              <p className={classnames('bottom-container__status', data?.status?.className)}>
                {data.status.display}
              </p>
            )
          }
          <p>{data.votingPower.percentDisplay}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleValidator;
