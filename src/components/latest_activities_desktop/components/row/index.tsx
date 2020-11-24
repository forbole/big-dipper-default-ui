import React from 'react';
import classnames from 'classnames';
import {
  Collapse,
  IconButton,
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

const Row = (props:RowProps) => {
  const { data } = props;
  const { classes } = useGetStyles();
  const {
    open, toggleOpen,
  } = useRowHooks();

  return (
    <>
      <TableRow className={classnames(classes.root, 'single-activity')}>
        <TableCell>{data.time}</TableCell>
        <TableCell className={classnames(data.type.className, 'type')}>
          {data.type.display}
        </TableCell>
        <TableCell className={classnames('content')}>
          {data.content}
        </TableCell>
        <TableCell className={classnames('status')} align="right">
          {
            data.success
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
              )
          }
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
      <TableRow>
        <TableCell
          style={{
            paddingBottom: 0, paddingTop: 0,
          }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div>fuck this shit</div>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default Row;