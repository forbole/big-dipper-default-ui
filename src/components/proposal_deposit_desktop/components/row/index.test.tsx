import React from 'react';
import { mount } from 'enzyme';
import Row from '.';

describe('Row', () => {
  it('Works', () => {
    expect(Row).toBeTruthy();
    const spy = jest.fn();
    const wrap = mount(
      <Row
        display="Time"
        value="10 Jan 2020, 12:59:27 UTC"
        handleClickOpen={spy}
      />,
    );
    wrap.find(Row).simulate('click');
    expect(wrap).not.toBeNull();
    expect(wrap.find('.displayTitle').first().text()).toEqual('Time');
    expect(wrap.find('.value').first().text()).toEqual('10 Jan 2020, 12:59:27 UTC');
    expect(wrap).toHaveLength(1);
    expect(spy).toHaveBeenCalled();
  });
});
