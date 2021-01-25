import React from 'react';
import { mount } from 'enzyme';
import PaginatedContainer from '.';

describe('PaginatedContainer', () => {
  it('Works', () => {
    expect(PaginatedContainer).toBeTruthy();
    const args = {
      data: [
        {
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
      ],
    };
    const wrap = mount(
      <PaginatedContainer
        {...args}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(PaginatedContainer)).toHaveLength(1);
  });
});
