import React from 'react';
import classnames from 'classnames';
import {
  CheckCircle, Cancel,
} from '@material-ui/icons';
import { useGetStyles } from './styles';
import { LatestActivitiesMobileProps } from './types';

const LatestActivitiesMobile = (props:LatestActivitiesMobileProps) => {
  const { classes } = useGetStyles();
  const {
    data,
    className,
  } = props;

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'latest-activities-mobile')}>
      {data.map((x) => {
        return (
          <div className={classnames('activity', 'flex')}>
            <div className={classnames('avatar-container')}>
              {x.avatar}
            </div>
            <div className={classnames('content-container')}>
              <div className={classnames('content')}>
                {x.content}
              </div>
              <div className={classnames('content-footer', 'flex')}>
                <div className={classnames(x.type.className, 'type')}>
                  <div>
                    {x.type.display}
                  </div>
                </div>
                <div className={classnames('flex')}>
                  <p className={classnames('time')}>{x.time}</p>
                  {
                    x.success
                      ? <CheckCircle className={classnames('icon', 'success')} />
                      : <Cancel className={classnames('icon', 'fail')} />
                  }
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LatestActivitiesMobile;
