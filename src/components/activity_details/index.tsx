import React from 'react';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import {
  dummyProps, formatData,
} from './utils';

const ActivityDetails = (props: any) => {
  const { classes } = useGetStyles();
  const {
    className,
    desktop = true,
  } = props;
  const {
    labels, data,
  } = dummyProps;
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
      <div className={classnames('activity-details__message')}>
        {data.content}
      </div>
      <div className={classnames('activity-details__content-wrapper')}>
        {formattedData.map((x) => {
          return (
            <>
              <p className={classnames('content-wrapper__label')}>{x.label}</p>
              <div className={classnames('content-wrapper__value')}>{x.value}</div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityDetails;
