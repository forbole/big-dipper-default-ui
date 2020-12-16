import React from 'react';
import classnames from 'classnames';
import { ArrowForward } from '@material-ui/icons';
import { useGetStyles } from './styles';
import { PowerEventsProps } from './types';

const PowerEvents = (props:PowerEventsProps) => {
  const {
    className,
    desktop,
    data,
  } = props;

  const { classes } = useGetStyles(desktop);

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'power-events')}>
      {data.map((x) => {
        const {
          blockHeight,
          date,
          previousValue,
          currentValue,
          valueDifference,
          user,
          value,
          type,
          redelegate,
        } = x;
        return (
          <div key={date} className={classnames('event')}>
            <div className={classnames('event__header')}>
              <span className={classnames('header__block-height')}>
                {blockHeight}
              </span>
              <p className={classnames('header__date')}>{date}</p>
            </div>
            <div className={classnames('event__body-container')}>
              <div className={classnames('body-container__change')}>
                <div className={classnames('change__difference')}>
                  <p className={classnames('difference__previous-value', 'difference__value')}>{previousValue}</p>
                  <ArrowForward className={classnames('arrow', 'difference__arrow')} />
                  <p className={classnames('difference__current-value', 'difference__value')}>{currentValue}</p>
                </div>
                <p className={classnames('change__value', valueDifference.className)}>
                  {valueDifference.display}
                </p>
              </div>
              <div className={classnames('body-container__info')}>
                <span className={classnames('info__user')}>
                  {user}
                </span>
                <div className={classnames('info__footer')}>
                  <p className={classnames('footer__type', type.className)}>{type.display}</p>
                  <p className={classnames('footer__value')}>{value}</p>
                </div>
                {!!redelegate && (
                  <div className={classnames('info__redelegate')}>
                    <span className={classnames('redelegate__from')}>{redelegate.from}</span>
                    <ArrowForward className={classnames('arrow', 'redelegate__arrow')} />
                    <span className={classnames('redelegate__to')}>{redelegate.to}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PowerEvents;
