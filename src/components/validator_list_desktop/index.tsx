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
import {
  useValidatorListDesktopHook, useTableHook,
} from './hooks';
import { getActiveColumns } from './utils';

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
  const activeTable = useTableHook(active);
  const activeColumns = getActiveColumns(labels);

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
          <Table className={classnames('data-container__table')}>
            <TableHead>
              <TableRow>
                {activeColumns.map((column) => {
                  if (column.sort) {
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align as any}
                      >
                        <TableSortLabel
                          active={activeTable.state.activeSort === column.id}
                          direction={activeTable.state.activeSort === column.id ? activeTable.state.sortDirection : 'asc'}
                          onClick={activeTable.handleSort(column.id)}
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
              {active.map((row, i) => {
                return (
                  <TableRow key={i}>
                    {activeColumns.map((column, index) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={index}
                          align={column.align as any}
                        >
                          {value?.display ?? value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
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
        <div className={classnames('validator-list-desktop_data-container')}>
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
