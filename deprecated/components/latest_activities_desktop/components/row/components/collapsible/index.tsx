import React from 'react';
import classnames from 'classnames';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { CollapsibleProps } from './types';

const Collapsible = (props:CollapsibleProps) => {
  const { data } = props;
  return (
    <div className={classnames('padding')}>
      <Table className={classnames('content')} size="small">
        <TableBody>
          {data.map((x) => {
            return (
              <TableRow key={x.label} className={classnames('row')}>
                <TableCell className={classnames(x.label, 'label')}>{x.label}</TableCell>
                <TableCell className={classnames(x.label, 'value')}>{x.value}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Collapsible;
