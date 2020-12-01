import React from 'react';
import { mount } from 'enzyme';
import { Select } from '@material-ui/core';
import SelectTabs from '.';

describe('SelectTabs', () => {
  it('Works', () => {
    expect(SelectTabs).toBeTruthy();
    const wrap = mount(
      <SelectTabs
        tabs={[
          {
            key: 10,
            display: 'Online Voting Power',
            component: <div>online voting power component</div>,
          },
          {
            key: 20,
            display: 'Unbonding',
            component: <div>unbonding component</div>,
          },
        ]}
        selected={10}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.select-tabs')).toHaveLength(1);
    expect(wrap.find(Select)).toHaveLength(1);
    expect(wrap.find('.selected-component-container')).toHaveLength(1);
  });

  it('Works with one item', () => {
    const wrap = mount(
      <SelectTabs
        tabs={[
          {
            key: 10,
            display: 'Online Voting Power',
            component: <div>online voting power component</div>,
          },
        ]}
        selected={10}
      />,
    );
    expect(wrap.find(Select)).toHaveLength(0);
  });
});
