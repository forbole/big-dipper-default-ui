import React from 'react';
import { mount } from 'enzyme';
import Row from '.';

describe('Row', () => {
  it('Works', () => {
    expect(Row).toBeTruthy();
    const wrap = mount(
      <Row
        label="Type"
        display="Text proposal"
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('.label').first().text()).toEqual('Type');
    expect(wrap.find('.display').first().text()).toEqual('Text proposal');
    expect(wrap.find(Row)).toHaveLength(1);
  });
});
