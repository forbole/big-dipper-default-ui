import React from 'react';
import {
  Tab,
  Tabs,
  InputAdornment,
  OutlinedInput,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import classnames from 'classnames';
import { getAllyProps } from '../../utils';
import { TabPanel } from '../..';
import { useGetStyles } from './styles';
import { ValidatorListDesktopProps } from './types';
import { useValidatorListDesktopHook } from './hooks';

const ValidatorListDesktop = (props: ValidatorListDesktopProps) => {
  const {
    active = [],
    inactive = [],
    labels,
    className,
    onClick,
    tabs,
    search,
  } = props;

  const { classes } = useGetStyles();
  const { handleSubmit } = useValidatorListDesktopHook(search.onSearchCallback);
  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'validator-list-desktop')}>
      {/* =================================== */}
      {/* tabs */}
      {/* =================================== */}
      <div className={classnames('flex')}>
        <Tabs
          value={tabs.value}
          onChange={tabs.handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="validator list tabs"
        >
          <Tab disableRipple label={labels.active} {...getAllyProps(0)} />
          <Tab disableRipple label={labels.inactive} {...getAllyProps(1)} />
        </Tabs>
        <form onSubmit={handleSubmit}>
          <OutlinedInput
            value={search.value}
            onChange={search.handleChange}
            placeholder={search.placeholder}
            startAdornment={(
              <InputAdornment position="start">
                <Search fontSize="small" className="outline-input__icon" />
              </InputAdornment>
          )}
          />
        </form>
      </div>
      {/* =================================== */}
      {/* active */}
      {/* =================================== */}
      <TabPanel value={tabs.value} index={0}>
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
      <TabPanel value={tabs.value} index={1}>
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
