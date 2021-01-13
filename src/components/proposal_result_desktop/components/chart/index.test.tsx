import React from 'react';
import { mount } from 'enzyme';
import Chart from '.';

describe('Chart', () => {
  it('Works', () => {
    expect(Chart).toBeTruthy();
    const args = {
      title: '81,674,736.604642 ATOM',
      amount: '(~81M of ~186M ATOM)',
      value: 2504158159222,
      subTitle: 'Voted (43.78%)',
      colors: ['#28C989', '#1C86FC', '#FD248C', '#FD7522'],
      data: [
        {
          title: 'Yes',
          percentage: '30.66%',
          value: 2504158159222,
          amount: '25,041,581,559222',
        },
        {
          title: 'Abstain',
          percentage: '0.05%',
          value: 3504158159222,
          amount: '3,504,158,159,222',
        },
      ],
    };
    const wrap = mount(
      <Chart
        {...args}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(Chart)).toHaveLength(1);
    expect(wrap.find('h1').first().text()).toBe('81,674,736.604642 ATOM');
    expect(wrap.find('.subTitle').last().text()).toBe('Voted (43.78%)');
  });
});
