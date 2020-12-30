import React from 'react';
import { mount } from 'enzyme';
import {
  TableDefault, TablePaginationActions,
} from '../..';
import TablePaginated from '.';

describe('TablePaginated', () => {
  it('Works', () => {
    expect(TablePaginated).toBeTruthy();
    const wrap = mount(
      <TablePaginated
        data={[
          {
            validator: {
              rawValue: 'aforbole',
              display: 'Forbole 1',
            },
            delegatedAmount: {
              rawValue: 1000,
              display: '1,000 ATOM',
            },
            ratio: {
              rawValue: 77,
              display: '0.77%',
            },
            reward: {
              rawValue: 77,
              display: '0.77%',
            },
            commission: {
              rawValue: 77,
              display: '0.77%',
            },
            vpRatio: {
              rawValue: 77,
              display: '0.77%',
            },
            condition: {
              rawValue: 77,
              display: '0.77%',
            },
          },
        ]}
        columns={[
          {
            label: 'validator',
            display: 'Validator',
            sort: true,
          },
          {
            label: 'delegatedAmount',
            display: 'Delegated Amount',
          },
          {
            label: 'ratio',
            display: 'Amt Ratio',
          },
          {
            label: 'reward',
            display: 'Reward',
          },
          {
            label: 'commission',
            display: 'Commission',
          },
          {
            label: 'vpRatio',
            display: 'VP Ratio',
          },
          {
            label: 'condition',
            display: 'Condition',
          },
        ]}
        initialActiveSort="validator"
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('.table-default')).toHaveLength(1);
    expect(wrap.find('.table-paginated')).not.toBeNull();
    expect(wrap.find(TableDefault)).toHaveLength(1);
    expect(wrap.find(TablePaginationActions)).toHaveLength(1);
  });
});
