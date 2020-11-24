import React from 'react';
import { mount } from 'enzyme';
import { CheckCircle } from '@material-ui/icons';
import {
  Table,
  TableBody,
} from '@material-ui/core';
import Row from '.';

describe('Row', () => {
  it('Works', () => {
    expect(Row).toBeTruthy();
    const wrap = mount(
      <Table>
        <TableBody>
          <Row
            labels={{
              hash: 'hash',
              height: 'height',
              fee: 'fee',
              gas: 'Gas (used/ wanted)',
              status: 'Status',
              memo: 'Memo',
            }}
            data={{
              type: {
                display: 'Delegate',
                className: 'delegate',
              },
              time: '1 hour',
              success: true,
              content: <div>custom content</div>,
              collapsibleData: {
                hash: '12344566',
                height: <div>height</div>,
                fee: '123 uatm',
                gas: '1,234 / 20, 999',
                memo: 'baby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooobaby shark doo doodo dooo',
              },
            }}
          />
        </TableBody>
      </Table>,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.single-activity')).toHaveLength(3);
    expect(wrap.find(CheckCircle)).toHaveLength(1);
    expect(wrap.find('.collapsible')).toHaveLength(3);
    expect(wrap.find('.collapsible-table-row')).toHaveLength(3);
  });

  it('Works with collapsible', () => {
    expect(Row).toBeTruthy();
    const wrap = mount(
      <Table>
        <TableBody>
          <Row
            labels={undefined}
            data={{
              type: {
                display: 'Delegate',
                className: 'delegate',
              },
              time: '1 hour',
              success: true,
              content: <div>custom content</div>,
            }}
          />
        </TableBody>
      </Table>,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('.collapsible-table-row')).toHaveLength(0);
  });
});
