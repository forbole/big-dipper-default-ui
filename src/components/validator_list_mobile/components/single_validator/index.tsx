import React from 'react';
import classnames from 'classnames';
import { SingleValidatorProps } from './types';
import { useGetStyles } from './styles';
import { Avatar } from '../../../..';
import { useSingleValidatorHook } from './hooks';

const SingleValidator = (props: SingleValidatorProps) => {
  const {
    data, labels, onClick,
  } = props;
  const { classes } = useGetStyles();
  const { handleOnClick } = useSingleValidatorHook(onClick, data);

  return (
    <div
      className={classnames(classes.root, 'validator-list-mobile')}
      onClick={handleOnClick}
      role="button"
    >
      <Avatar imageUrl={data.imageUrl} alt={data.displayName} width={40} height={40} />
      <div className={classnames('validator-list-mobile__content', 'content')}>
        <div className={classnames('content__top-container', 'flex-content')}>
          <p>{data.displayName}</p>
          <p>{data.votingPower.display}</p>
        </div>
        <div className={classnames('content__bottom-container', 'bottom-container', 'flex-content')}>
          <p className={classnames('bottom-container__commission')}>
            {labels.commission}
            :&nbsp;
            {data.commission}
          </p>
          <p>{data.votingPower.percentDisplay}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleValidator;
