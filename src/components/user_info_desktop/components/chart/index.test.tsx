import React from 'react';
import { mount } from 'enzyme';
import Chart from '.';

describe('Chart', () => {
  it('Works with base props', () => {
    expect(Chart).toBeTruthy();
    const args = {
      chart: {
        total: {
          title: 'Total ATOM',
          subTitle: '$3.22/ATOM',
        },
        totalDollar: {
          title: '6,574,315.38',
          subTitle: '$21,169,295.52',
        },
        colors: ['#FD248C', '#1D86FF', '#FFA716', '#1EC490', '#9D2DFF'],
        data: [
          {
            title: 'Available',
            value: 111189.15,
            display: '111,189.15 ATOM',
          },
          {
            title: 'Delegate',
            value: 458003.25,
            display: '6,458,003.25 ATOM',
          },
          {
            title: 'Unbonding',
            value: 156.00,
            display: '156.00 ATOM',
          },
          {
            title: 'Reward',
            value: 5122.96,
            display: '5,122.96 ATOM',
          },
          {
            title: 'Commission',
            value: 1324.91,
            display: '1,324.91 ATOM',
          },
        ],
        customComponent: <div>diagram</div>,
      },
    };
    const wrap = mount(
      <Chart
        {...args}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(Chart)).toHaveLength(1);
    expect(wrap.find('h1').first().text()).toBe('6,574,315.38');
    expect(wrap.find('h2').last().text()).toBe('$21,169,295.52');
    expect(wrap.find('h3').first().text()).toBe('Total ATOM');
    expect(wrap.find('h4').last().text()).toBe('$3.22/ATOM');
  });
});
