import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import { formatData } from './utils';
import { ActivityDetailsProps } from './types';

const ActivityDetails = (props: ActivityDetailsProps) => {
  const { classes } = useGetStyles();
  const {
    className,
    desktop,
    labels,
    data,
  } = props;

  const responsiveClass = desktop ? classes.desktop : classes.mobile;
  const responsiveClassKey = desktop ? 'activity-details-desktop' : 'activity-details-mobile';
  const formattedData = formatData(data, labels);
  return (
    <div
      className={classnames(
        classes.root,
        responsiveClass,
        responsiveClassKey,
        className,
        'big-dipper',
        'activity-details',
      )}
    >
      <div>
        {formattedData.map((x) => {
          return (
            <div
              key={x.label}
              className={classnames('activity-details__content-wrapper', x.key)}
            >
              <p className={classnames('content-wrapper__label')}>{x.label}</p>
              <div className={classnames('content-wrapper__value')}>{x.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityDetails;
