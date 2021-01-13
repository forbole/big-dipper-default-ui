import React from 'react';
import { mount } from 'enzyme';
import Chart from '.';

describe('Chart', () => {
  it('Works with base props', () => {
    expect(Chart).toBeTruthy();
    const args = {
      title: '81,674,736.604642 ATOM',
      data: [
        {
          title: 'Yes',
          value: 2000,
          percentage: '43.78%',
        },
        {
          title: 'No',
          value: 2000,
          percentage: '43.78%',
        },
        {
          title: 'Yes',
          value: 2000,
          percentage: '43.78%',
        },
        {
          title: 'No',
          value: 2000,
          percentage: '43.78%',
        },
      ],
      amount: '(~81M of ~186M ATOM)',
      subTitle: 'Voted (43.78%)',
      colors: ['#28C989', '#1C86FC', '#FD248C', '#FD7522'],
    };
    const wrap = mount(
      <Chart
        {...args}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(Chart)).toHaveLength(1);
    expect(wrap.find('h1').first().text()).toBe('Voted (43.78%)');
    expect(wrap.find('h2').last().text()).toBe('81,674,736.604642 ATOM');
    expect(wrap.find('.amount').last().text()).toBe('(~81M of ~186M ATOM)');
  });
});
