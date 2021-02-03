import React from 'react';
import { mount } from 'enzyme';
import Address from '.';

describe('Address', () => {
  it('Works', () => {
    expect(Address).toBeTruthy();
    const wrap = mount(
      <Address
        addressContent={{
          address: {
            title: 'Address',
            display: 'cosmos14kn0k…swhp',
            rawValue: 'cosmos14kn0k…swhp',
          },
          rewardAddress: {
            title: '',
            display: 'cosmos14kn0k…swhp',
            rawValue: 'cosmos14kn0k…swhp',
          },
        }}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(Address)).toHaveLength(1);
    expect(wrap.find('h4').first().text()).toEqual('Address');
    expect(wrap.find('.addressDisplay').first().text()).toEqual('cosmos14kn0k…swhp');
  });
});
