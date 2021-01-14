import React from 'react';
import { mount } from 'enzyme';
import DataDiagram from '.';

describe('DataDiagram', () => {
  it('Works with base props', () => {
    expect(DataDiagram).toBeTruthy();
    const wrap = mount(
      <DataDiagram
        data={{
          title: 'Yes',
          percentage: '30.66%',
          value: 2504158159222,
          amount: '25,041,581,559222',
        }}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(DataDiagram)).toHaveLength(1);
    expect(wrap.find('.dataName').first().text()).toBe('Yes(30.66%)');
    expect(wrap.find('.dataDisplay').last().text()).toBe('25,041,581,559222');
  });
});
