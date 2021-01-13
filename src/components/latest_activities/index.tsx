import React from 'react';
import classnames from 'classnames';
import {
  CheckCircle,
  Cancel,
} from '@material-ui/icons';
import { useGetStyles } from './styles';
import { useLatestActivitiesHook } from './hooks';
import { LatestActivitiesProps } from './types';

const LatestActivities = (props: LatestActivitiesProps) => {
  const { classes } = useGetStyles();
  const {
    className,
    transactions,
    onClick,
  } = props;

  const { handleOnClick } = useLatestActivitiesHook(onClick);

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'activities-list')}>
      {
        transactions.map((transaction, index) => {
          return (
            <div
              className={classnames('single-transaction__wrapper')}
              key={`${transaction.hash}-${index}`}
              onClick={() => handleOnClick(transaction.hash.value)}
              role="button"
            >
              <div className={classnames('single-transaction__header')}>
                <div>{transaction.hash.display}</div>
                <div className={classnames('header__right-content')}>
                  <div className={classnames('header__timestamp')}>{transaction.timestamp}</div>
                  {transaction.success
                    ? <CheckCircle className={classnames('header__icon', 'success')} />
                    : <Cancel className={classnames('header__icon', 'fail')} />}
                </div>
              </div>
              <div className={classnames('single-transaction__content')}>
                {transaction?.messages?.map((message, i) => {
                  return (
                    <React.Fragment key={`${transaction.hash}-${index}-${i}`}>
                      {message}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default LatestActivities;
