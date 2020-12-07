import React from 'react';
import {
  Tab, Tabs,
} from '@material-ui/core';
import classnames from 'classnames';
import { getAllyProps } from '../../utils';
import { TabPanel } from '../..';
import { SingleValidator } from './components';
import { useGetStyles } from './styles';
import { ValidatorListMobileProps } from './types';

const ValidatorListMobile = (props: ValidatorListMobileProps) => {
  const {
    active = [],
    inactive = [],
    labels,
    className,
    onClick,
    tabs,
  } = props;

  const { classes } = useGetStyles();

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'validator-list-mobile')}>
      {/* =================================== */}
      {/* tabs */}
      {/* =================================== */}
      <Tabs
        value={tabs.value}
        onChange={tabs.handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        scrollButtons="auto"
        aria-label="validator list tabs"
      >
        <Tab disableRipple label={labels.active} {...getAllyProps(0)} />
        <Tab disableRipple label={labels.inactive} {...getAllyProps(1)} />
      </Tabs>
      {/* =================================== */}
      {/* active */}
      {/* =================================== */}
      <TabPanel value={tabs.value} index={0}>
        <div className={classnames('validator-list-mobile__data-container')}>
          {active.map((x) => {
            return (
              <SingleValidator
                data={x}
                key={x.operatorAddress}
                labels={labels}
                onClick={onClick}
              />
            );
          })}
        </div>
      </TabPanel>
      {/* =================================== */}
      {/* inactive */}
      {/* =================================== */}
      <TabPanel value={tabs.value} index={1}>
        <div className={classnames('validator-list-mobile__data-container')}>
          {inactive.map((x) => {
            return (
              <SingleValidator
                data={x}
                key={x.operatorAddress}
                labels={labels}
                onClick={onClick}
              />
            );
          })}
        </div>
      </TabPanel>
    </div>
  );
};

export default ValidatorListMobile;
