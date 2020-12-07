import React from 'react';
import {
  Tab,
  Tabs,
  InputAdornment,
  OutlinedInput,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  TextField,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import classnames from 'classnames';
import { getAllyProps } from '../../utils';
import { TabPanel } from '../..';
import { useGetStyles } from './styles';
import { ValidatorListDesktopProps } from './types';
import { useValidatorListDesktopHook } from './hooks';
import {
  getActiveColumns, getInactiveColumns,
} from './utils';
import { ValidatorTable } from './components';

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
  const { handleSearchSubmit } = useValidatorListDesktopHook(search.onSearchCallback);
  const activeColumns = getActiveColumns(labels);
  const inactiveColumns = getInactiveColumns(labels);

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
        <form onSubmit={handleSearchSubmit}>
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
        <div className={classnames('validator-list-desktop__data-container')}>
          <ValidatorTable
            columns={activeColumns}
            data={active}
            onRowClick={onClick}
          />
        </div>
      </TabPanel>
      {/* =================================== */}
      {/* inactive */}
      {/* =================================== */}
      <TabPanel value={tabs.value} index={1}>
        <div className={classnames('validator-list-desktop_data-container')}>
          inactive
          <ValidatorTable
            columns={inactiveColumns}
            data={inactive}
            onRowClick={onClick}
          />
        </div>
      </TabPanel>
    </div>
  );
};

export default ValidatorListDesktop;
