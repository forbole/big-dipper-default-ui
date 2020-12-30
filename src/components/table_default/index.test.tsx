import React from 'react';
import { mount } from 'enzyme';
import {
  TableSortLabel,
  TableRow,
} from '@material-ui/core';
import { TablePaginationActions } from '../..';
import TableDefault from '.';

const spies = {
  onClick() {
    console.log('does something');
  },
};

describe('TableDefault', () => {
  it('Works', () => {
    expect(TableDefault).toBeTruthy();
    const onClickSpy = jest.spyOn(spies, 'onClick');
    const wrap = mount(
      <TableDefault
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
        onRowClick={spies.onClick}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('.table-default')).toHaveLength(1);
    expect(wrap.find(TableSortLabel)).toHaveLength(1);
    wrap.find(TableRow).last().simulate('click');
    expect(onClickSpy).toHaveBeenCalledTimes(1);
    expect(wrap.find(TablePaginationActions)).toHaveLength(0);
  });
});
