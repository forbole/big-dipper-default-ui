import React from 'react';
import {
  Tab, Tabs,
} from '@material-ui/core';
import classnames from 'classnames';
import { getAllyProps } from '../../utils';
import { useTabsHook } from '../../hooks';
import { TabPanel } from '../..';
import { useGetStyles } from './styles';
import { ValidatorListDesktopProps } from './types';

const ValidatorListDesktop = (props: ValidatorListDesktopProps) => {
  const {
    active = [],
    inactive = [],
    labels,
    className,
    onClick,
  } = props;

  const {
    value,
    handleChange,
  } = useTabsHook();
  const { classes } = useGetStyles();

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'validator-list-desktop')}>
      {/* =================================== */}
      {/* tabs */}
      {/* =================================== */}
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab disableRipple label={labels.active} {...getAllyProps(0)} />
        <Tab disableRipple label={labels.inactive} {...getAllyProps(1)} />
      </Tabs>
      {/* =================================== */}
      {/* active */}
      {/* =================================== */}
      <TabPanel value={value} index={0}>
        <div className={classnames('validator-list-mobile__data-container')}>
          active
          {/* {active.map((x) => {
            return (
              <SingleValidator
                data={x}
                key={x.operatorAddress}
                labels={labels}
                onClick={onClick}
              />
            );
          })} */}
        </div>
      </TabPanel>
      {/* =================================== */}
      {/* inactive */}
      {/* =================================== */}
      <TabPanel value={value} index={1}>
        <div className={classnames('validator-list-mobile__data-container')}>
          inactive
          {/* {inactive.map((x) => {
            return (
              <SingleValidator
                data={x}
                key={x.operatorAddress}
                labels={labels}
                onClick={onClick}
              />
            );
          })} */}
        </div>
      </TabPanel>
    </div>
  );
};

export default ValidatorListDesktop;
