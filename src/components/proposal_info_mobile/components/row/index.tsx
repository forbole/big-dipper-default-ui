import React from 'react';
import classnames from 'classnames';
import {
  TableCell,
  TableRow,
} from '@material-ui/core';
import { RowProps } from './types';

const Row = (props: RowProps) => {
  const {
    label, className, display, isAlignRight, classNameLabel, classNameDisplay,
  } = props;

  const align = isAlignRight ? 'right' : 'inherit';

  return (
    <TableRow
      className={classnames(className, 'singleRow')}
    >
      <TableCell className={classnames(classNameLabel, 'cell', 'label')}>
        {label}
      </TableCell>
      <TableCell className={classnames('cell', 'displayContent', classNameDisplay)} align={align}>
        {display}
      </TableCell>
    </TableRow>
  );
};

export default Row;
