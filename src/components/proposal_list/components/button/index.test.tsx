import React from 'react';
import { mount } from 'enzyme';
import Button from '.';

describe('Button', () => {
  it('Works', () => {
    expect(Button).toBeTruthy();
    const wrap = mount(
      <Button
        display="Vote"
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('button').first().text()).toEqual('Vote');
    expect(wrap.find(Button)).toHaveLength(1);
  });
});
