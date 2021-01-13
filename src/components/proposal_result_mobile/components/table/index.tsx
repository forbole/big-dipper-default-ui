import React, {
  useState,
  ChangeEvent,
} from 'react';
import classnames from 'classnames';
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
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

  const [value, setValue] = useState(0);
  const handleChange = (_event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
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
          <PaginatedContainer
            data={allData}
            overrideLabel={tableDefaultProps.overrideLabel}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PaginatedContainer
            data={mapData.yes}
            overrideLabel={tableDefaultProps.overrideLabel}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <PaginatedContainer
            data={mapData.no}
            overrideLabel={tableDefaultProps.overrideLabel}
          />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <PaginatedContainer
            data={mapData.veto}
            overrideLabel={tableDefaultProps.overrideLabel}
          />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <PaginatedContainer
            data={mapData.abstain}
            overrideLabel={tableDefaultProps.overrideLabel}
          />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <PaginatedContainer
            data={mapData.absence}
            overrideLabel={tableDefaultProps.overrideLabel}
          />
        </TabPanel>
      </div>
    </div>
  );
};

export default ProposalTable;
