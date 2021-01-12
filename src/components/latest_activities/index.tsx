import React from 'react';
import classnames from 'classnames';
import {
  CheckCircle,
  Cancel,
} from '@material-ui/icons';
import { useGetStyles } from './styles';

const LatestActivities = () => {
  const { classes } = useGetStyles();
  const props = {
    className: '',
    transactions: [
      {
        hash: {
          value: 123456,
          display: '#123adfds...456',
        },
        timestamp: '10 Dec 2019 18:12',
        success: true,
        messages: [
          <div>one message</div>,
          <div>two message</div>,
        ],
      },
      {
        hash: {
          value: 123456,
          display: '#123adfds...456',
        },
        timestamp: '10 Dec 2019 18:12',
        success: false,
        messages: [
          <div>one message</div>,
          <div>two message</div>,
        ],
      },
    ],
    onClick: (hash:any) => console.log(hash),
  };

  const {
    className,
    transactions,
  } = props;

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'activities-list')}>
      {
        transactions.map((transaction, index) => {
          return (
            <div
              className={classnames('single-transaction__wrapper')}
              key={`${transaction.hash}-${index}`}
            >
              <div className={classnames('single-transaction__header')}>
                <div>{transaction.hash.display}</div>
                <div className={classnames('header__right-content')}>
                  <div>{transaction.timestamp}</div>
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
