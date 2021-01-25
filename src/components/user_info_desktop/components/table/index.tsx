import React from 'react';
import classnames from 'classnames';
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
} from '@material-ui/core';
import TablePaginated from '../../../table_paginated';
import {
  TableProps,
  TabPanelProps,
} from './types';

function TabPanel(props: TabPanelProps) {
  const {
    children,
    value,
    index,
    ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const Table = (props: TableProps) => {
  const {
    tableDefaultProps, className, classNameTab, classNameIndicator, tabProps,
  } = props;

  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classnames(className, 'table', 'proposalDepositDesktop')}>
      <div className={className}>
        <AppBar
          position="static"
          color="default"
          className={classNameTab}
        >
          <Tabs
            className={classNameTab}
            value={value}
            onChange={handleChange}
            classes={{
              indicator: classNameIndicator,
            }}
            textColor="primary"
          >
            <Tab label={tabProps.delegations} {...a11yProps(0)} />
            <Tab label={tabProps.redelegations} {...a11yProps(1)} />
            <Tab label={tabProps.unbondings} {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <TablePaginated
            columns={tableDefaultProps.delegatdColumns}
            data={tableDefaultProps.delegatedData}
            initialActiveSort={tableDefaultProps.initialActiveSort}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TablePaginated
            columns={tableDefaultProps.redelegatedColumns}
            data={tableDefaultProps.redelegatedData}
            initialActiveSort={tableDefaultProps.initialActiveSort}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TablePaginated
            columns={tableDefaultProps.unbondingColumns}
            data={tableDefaultProps.unbondingData}
            initialActiveSort={tableDefaultProps.initialActiveSort}
          />
        </TabPanel>
      </div>
    </div>
  );
};

export default Table;
