import React from 'react';
import { mount } from 'enzyme';
import { Table } from '@material-ui/core';
import ValidatorTable from '.';

describe('ValidatorTable', () => {
  it('Works', () => {
    expect(ValidatorTable).toBeTruthy();
    const wrap = mount(
      <ValidatorTable
        data={[{
          operatorAddress: 'forbole12345',
          moniker: {
            rawValue: 'forbole',
            display: <div>forbole</div>,
          },
          self: {
            rawValue: 100,
            display: '100%',
          },
          status: {
            className: 'jailed',
            rawValue: 'jailed',
            display: 'jailed',
          },
          commission: {
            rawValue: 100,
            display: '100',
          },
          votingPower: {
            rawValue: 100,
            display: '100',
            percentDisplay: '100%',
          },
        }]}
        columns={[
          {
            id: 'rank',
            label: 'rank',
          },
          {
            id: 'moniker',
            label: 'moniker',
            sort: true,
          },
          {
            id: 'votingPower',
            label: 'votingPower',
            sort: true,
          },
          {
            id: 'self',
            label: 'self',
            sort: true,
            align: 'right',
          },
          {
            id: 'commission',
            label: 'commission',
            sort: true,
            align: 'right',
          },
          {
            id: 'status',
            label: 'status',
          },
        ]}
        onRowClick={() => {}}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(Table)).toHaveLength(1);
  });
});
