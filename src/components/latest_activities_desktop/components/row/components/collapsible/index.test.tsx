import React from 'react';
import { mount } from 'enzyme';
import Collapsible from '.';

describe('Collapsible', () => {
  it('Works', () => {
    expect(Collapsible).toBeTruthy();
    const wrap = mount(
      <Collapsible
        data={
          [
            {
              label: 'hash',
              value: 'hash',
            },
            {
              label: 'height',
              value: 'height',
            },
            {
              label: 'fee',
              value: 'fee',
            },
            {
              label: 'gas',
              value: 'gas',
            },
            {
              label: 'status',
              value: 'status',
            },
            {
              label: 'memo',
              value: 'memo',
            },
          ]
        }
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.padding')).toHaveLength(1);
  });
});
