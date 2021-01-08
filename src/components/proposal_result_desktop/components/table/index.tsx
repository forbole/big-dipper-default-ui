import React from 'react';
import classnames from 'classnames';
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
} from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';
import { useTableHook } from './hooks';
import { useGetStyles } from './styles';
import { Row } from './components';
import { getColumns } from './utils';
import TableDefault from '../../../table_default';
import {
  TableProps,
  TabPanelProps,
} from './types';

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

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

  const { classes } = useGetStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  const indi = '#FD3B4C';

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
              // textColor: classNameTab,
            }}
            textColor="primary"
            // variant="fullWidth"
            aria-label="full width tabs example"
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
          <TableDefault
            {...tableDefaultProps}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </div>

      {/* <Table className={classnames('table')}>
        <TableHead className={classnames('tableHead')}>
          <TableRow>
            <TableCell className={classnames('label', 'voter')}>
              {label.voter}
            </TableCell>
            <TableCell className={classnames('label', 'votingPower')} align="right">
              {label.votingPower}
            </TableCell>
            <TableCell className={classnames('label', 'votingPowerPercentage')} align="right">
              {label.votingPowerPercentage}
            </TableCell>
            <TableCell className={classnames('label', 'votingPowerOverride')} align="right">
              {label.votingPowerOverride}
            </TableCell>
            <TableCell className={classnames('label', 'answer')} align="right">
              {label.answer}
            </TableCell>
          </TableRow>

          <TableRow className={classnames('tableHead', 'table__row')}>
            {columns.map((column: any) => {
              if (column.sort) {
                return (
                  <TableCell
                    className={classnames('headTitle')}
                    key={column.id}
                    align={column.align as any}
                  >
                    <TableSortLabel
                      active={state.activeSort === column.id}
                      direction={state.activeSort === column.id ? state.sortDirection : 'asc'}
                      onClick={handleSort(column.id)}
                      IconComponent={ArrowDropDown}
                    >
                      {column.label}
                    </TableSortLabel>
                  </TableCell>
                );
              }
              return (
                <TableCell
                  key={column.id}
                  align={column.align as any}
                >
                  {column.label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any, i) => {
            return (
              <Row
                key={i}
                voter={row.voter}
                votingPower={row.votingPower}
                votingPowerPercentage={row.votingPowerPercentage}
                votingPowerOverride={row.votingPowerOverride}
                answer={row.answer}
              />
            );
          })}
        </TableBody>
      </Table> */}
    </div>
  );
};

export default ProposalTable;
