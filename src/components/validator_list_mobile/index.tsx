import React from 'react';
import {
  Tab, Tabs,
} from '@material-ui/core';
import classnames from 'classnames';
import { getAllyProps } from '../../utils';
import { useTabsHook } from '../../hooks';
import { TabPanel } from '../..';
import { SingleValidator } from './components';
import { useGetStyles } from './styles';
import { ValidatorListMobileProps } from './types';

const ValidatorListMobile = (props: ValidatorListMobileProps) => {
  const {
    active,
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
    <div className={classnames(classes.root, className, 'big-dipper', 'validator-list-mobile')}>
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
        <Tab disableRipple label={active.tab} {...getAllyProps(0)} />
        <Tab disableRipple label="Item Two" {...getAllyProps(1)} />
      </Tabs>
      {/* =================================== */}
      {/* active */}
      {/* =================================== */}
      <TabPanel value={value} index={0}>
        <div className={classnames('validator-list-mobile__data-container')}>
          {active.data.map((x) => {
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
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </div>
  );
};

export default ValidatorListMobile;
