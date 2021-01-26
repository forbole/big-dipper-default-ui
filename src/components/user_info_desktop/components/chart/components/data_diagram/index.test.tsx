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
        display: '2000 ATOM',
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
    expect(wrap.find('.dataAmount').last().text()).toBe('2000 ATOM');
  });
});
