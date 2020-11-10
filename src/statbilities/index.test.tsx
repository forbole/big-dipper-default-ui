import React from 'react';
import { mount } from 'enzyme';
import Statbilities from '.';

describe('Statbilities', () => {
  it('Works with base props', () => {
    expect(Statbilities).toBeTruthy();
    const args = {
      data: [{
        name: 'bonded', value: 184136.334,
      },
      {
        name: 'unbonded', value: 7099.13997,
      }],
      info: {
        price: 2.75, inflation: 7.01, marketCap: 515551195.53, communityPool: 370536.4747,
      },
    };
    const wrap = mount(
      <Statbilities
        {...args}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('h1').first().text()).toBe('Statbilities');
    expect(wrap.find('h4').first().text()).toBe('0.19 m');
    expect(wrap.find('h4').last().text()).toBe('Community Pool');
  });
});
