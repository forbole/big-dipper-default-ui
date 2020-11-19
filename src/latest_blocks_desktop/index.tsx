import React from 'react';
import {
  Table, TableBody, TableCell, TableHead, TableRow,
} from '@material-ui/core';
import { LatestBlocksDesktopProps } from './types';

const LatestBlocksDesktop = (props:LatestBlocksDesktopProps) => {
  const { data } = props;
  console.log(data, 'my data');
  return (
    <div>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{data.time.label}</TableCell>
            <TableCell align="right">{data.hash.label}</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LatestBlocksDesktop;
