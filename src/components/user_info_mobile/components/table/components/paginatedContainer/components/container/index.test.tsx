import React from 'react';
import { mount } from 'enzyme';
import Container from '.';

describe('Container', () => {
  it('Works', () => {
    expect(Container).toBeTruthy();
    const args = {
      data: {
        validator: {
          className: 'validator',
          rawValue: 'forbole',
          display: <div>forbole</div>,
        },
        amount: {
          className: 'amount',
          rawValue: 4602020,
          display: '4,602,020 ATOM',
        },
      },
    };
    const wrap = mount(
      <Container
        {...args}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(Container)).toHaveLength(1);
    expect(wrap.find('.amount').first().text()).toEqual('4,602,020 ATOM');
  });
});
