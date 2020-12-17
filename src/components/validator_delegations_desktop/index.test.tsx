import React from 'react';
import { mount } from 'enzyme';
import {
  Table,
  TableHead,
} from '@material-ui/core';
import ValidatorDelegationsDesktop from '.';

describe('ValidatorDelegationsDesktop', () => {
  it('Works', () => {
    expect(ValidatorDelegationsDesktop).toBeTruthy();
    const wrap = mount(
      <ValidatorDelegationsDesktop
        labels={
          {
            address: 'Address',
            amount: 'Amount',
          }
        }
        data={[{
          address: <div>address</div>,
          amount: '1,000 ATOM',
        },
        ]}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.validator-delegations-desktop')).toHaveLength(1);
    expect(wrap.find(Table)).toHaveLength(1);
    expect(wrap.find(TableHead)).toHaveLength(1);
    expect(wrap.find('.cell').find('.time').first().text()).toEqual('10 Jan 2020,13:00:22 UTC');
  });
});
