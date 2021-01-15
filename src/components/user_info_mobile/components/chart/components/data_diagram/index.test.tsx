import React from 'react';
import { mount } from 'enzyme';
import DataDiagram from '.';

describe('DataDiagram', () => {
  it('Works with base props', () => {
    expect(DataDiagram).toBeTruthy();
    const args = {
      data: {
        title: 'Yes',
        value: 2000,
        percentage: '20%',
      },
    };
    const wrap = mount(
      <DataDiagram
        {...args}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(DataDiagram)).toHaveLength(1);
    expect(wrap.find('.dataName').first().text()).toBe('Yes');
    expect(wrap.find('.dataPercentage').last().text()).toBe('20%');
  });
});
