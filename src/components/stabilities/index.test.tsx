import React from 'react';
import { mount } from 'enzyme';
import Stabilities from '.';

describe('Stabilities', () => {
  it('Works with base props', () => {
    expect(Stabilities).toBeTruthy();
    const args = {
      title: 'Stabilities',
      coin: 'ATOM',
      price: {
        title: 'Price',
        display: '$2.756',
      },
      inflation: {
        title: 'Inflation',
        display: '7.01%',
      },
      marketCap: {
        title: 'Market Cap',
        display: '$515,551,345.99',
      },
      communityPool: {
        title: 'Community Pool',
        display: '370,000.74',
      },
      data: {
        total: {
          value: 191235.473,
          display: '0.19 m',
        },
        detail:
        [{
          title: 'Bonded', value: 100000, display: '100,000',
        },
        {
          title: 'UnBonded', value: 91235.473, display: '91,235.473',
        },
        ],
      },
      colors: ['#FF7846', '#FFD800'],
    };
    const wrap = mount(
      <Stabilities
        {...args}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(Stabilities)).toHaveLength(1);
    expect(wrap.find('.marginBottom')).toHaveLength(2);
    expect(wrap.find('h1').first().text()).toBe('Stabilities');
    expect(wrap.find('div').last().text()).toBe('370,000.74ATOM');
  });
});
