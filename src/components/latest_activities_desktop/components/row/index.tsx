import React from 'react';
import classnames from 'classnames';
import {
  Collapse,
  TableCell,
  TableRow,
} from '@material-ui/core';
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  CheckCircle,
  Cancel,
} from '@material-ui/icons';
import { RowProps } from './types';
import { useGetStyles } from './styles';
import { useRowHooks } from './hooks';
import { rowUtils } from './utils';
import { Collapsible } from './components';

const Row = (props:RowProps) => {
  const {
    data,
    labels,
    onClick,
  } = props;

  const {
    open, toggleOpen,
  } = useRowHooks();
  const { classes } = useGetStyles();
  const {
    getCollapsibleTableData, handleClick,
  } = rowUtils(onClick);
  const collapsibleTableData = data?.collapsibleData && labels
    ? getCollapsibleTableData(data, labels)
    : [];

  return (
    <>
      <TableRow
        className={classnames(classes.root, classes.table, 'single-activity', {
          active: open,
        })}
        onClick={() => handleClick(data)}
      >
        <TableCell>{data.time}</TableCell>
        <TableCell>
          <span className={classnames(data.type.className, 'type')}>
            {data.type.display}
          </span>
        </TableCell>
        <TableCell className={classnames('content')}>
          {data.content}
        </TableCell>
        <TableCell className={classnames('status')} align="right">
          {data.success
            ? (
              <CheckCircle
                className={classnames('icon', 'success', {
                  hide: open,
                })}
              />
            )
            : (
              <Cancel
                className={classnames('icon', 'fail', {
                  hide: open,
                })}
              />
            )}
        </TableCell>
        {data.collapsibleData && (
          <TableCell align="right" className={classnames('collapsible')}>
            <span onClick={toggleOpen} role="button">
              {
                open
                  ? <KeyboardArrowUp className={classnames('icon', 'arrow-up')} />
                  : <KeyboardArrowDown className={classnames('icon', 'arrow-down')} />
              }
            </span>
          </TableCell>
        )}
      </TableRow>
      {/* ============================================ */}
      {/* Collapsible Row */}
      {/* ============================================ */}
      {data.collapsibleData && (
        <TableRow className={classnames(classes.collapsible, classes.table, 'collapsible-table-row')}>
          <TableCell
            className={classnames('collapsible-cell')}
            colSpan={6}
          >
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Collapsible data={collapsibleTableData} />
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

export default Row;
