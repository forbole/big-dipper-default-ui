import React from 'react';
import { mount } from 'enzyme';
import Status from '.';

describe('Status', () => {
  it('Works', () => {
    expect(Status).toBeTruthy();
    const wrap = mount(
      <Status
        display="Passed"
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('.statusContent').first().text()).toEqual('Passed');
  });
});
