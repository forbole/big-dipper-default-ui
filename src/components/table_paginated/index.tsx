import React from 'react';
import classnames from 'classnames';
import { TableDefault } from '../..';
import { TablePaginatedProps } from './types';

/**
 * Simple Table with pagination and striped rows
 */
const TablePaginated = (props: TablePaginatedProps) => {
  const {
    data,
    columns,
    className,
    rowsPerPage: rowsPerPageCount,
    onRowClick,
    initialActiveSort,
  } = props;

  return (
    <TableDefault
      className={classnames(className, 'table-paginated')}
      data={data}
      columns={columns}
      pagination={{
        rowsPerPage: rowsPerPageCount,
      }}
      initialActiveSort={initialActiveSort}
      onRowClick={onRowClick}
    />
  );
};

export default TablePaginated;
