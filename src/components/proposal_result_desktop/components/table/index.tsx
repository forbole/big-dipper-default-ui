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

const ProposalTable = (props: TableProps) => {
  const {
    tableDefaultProps, className, classNameTab, classNameIndicator, tabProps,
  } = props;

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    const a = event;
    console.log(a);
  };
  const allData = tableDefaultProps.data.filter((x) => x.answer.rawValue !== 'absence');
  const mapData: any = [];

  tableDefaultProps.data.forEach((x: any) => {
    if (mapData[x.answer.rawValue]) {
      mapData[x.answer.rawValue].push(x);
    } else {
      mapData[x.answer.rawValue] = [x];
    }
  });

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
            <Tab label={tabProps.all} {...a11yProps(0)} />
            <Tab label={tabProps.yes} {...a11yProps(1)} />
            <Tab label={tabProps.no} {...a11yProps(2)} />
            <Tab label={tabProps.veto} {...a11yProps(3)} />
            <Tab label={tabProps.abstain} {...a11yProps(4)} />
            <Tab label={tabProps.absence} {...a11yProps(5)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <TablePaginated
            columns={tableDefaultProps.columns}
            data={allData}
            initialActiveSort={tableDefaultProps.initialActiveSort}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TablePaginated
            columns={tableDefaultProps.columns}
            data={mapData.yes}
            initialActiveSort={tableDefaultProps.initialActiveSort}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TablePaginated
            columns={tableDefaultProps.columns}
            data={mapData.no}
            initialActiveSort={tableDefaultProps.initialActiveSort}
          />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <TablePaginated
            columns={tableDefaultProps.columns}
            data={mapData.veto}
            initialActiveSort={tableDefaultProps.initialActiveSort}
          />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <TablePaginated
            columns={tableDefaultProps.columns}
            data={mapData.abstain}
            initialActiveSort={tableDefaultProps.initialActiveSort}
          />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <TablePaginated
            columns={tableDefaultProps.absenceColumns}
            data={mapData.absence}
            initialActiveSort={tableDefaultProps.initialActiveSort}
          />
        </TabPanel>
      </div>
    </div>
  );
};

export default ProposalTable;
