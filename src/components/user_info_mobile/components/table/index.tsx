import React, {
  useState,
  ChangeEvent,
} from 'react';
import classnames from 'classnames';
import {
  AppBar,
  Tabs,
  Tab,
  Box,
} from '@material-ui/core';
import {
  TableProps,
  TabPanelProps,
} from './types';
import { PaginatedContainer } from './components';

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
          <span>{children}</span>
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

  const [value, setValue] = useState(0);
  const handleChange = (_event: ChangeEvent<{}>, newValue: number) => {
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
          <PaginatedContainer
            data={tableDefaultProps.delegatedData}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PaginatedContainer
            data={tableDefaultProps.redelegatedData}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <PaginatedContainer
            data={tableDefaultProps.unbondingData}
          />
        </TabPanel>
      </div>
    </div>
  );
};

export default Table;
