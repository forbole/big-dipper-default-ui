import React from 'react';
import { mount } from 'enzyme';
import Avatar from '.';

describe('Avatar', () => {
  it('Works', () => {
    expect(Avatar).toBeTruthy();
    const wrap = mount(
      <Avatar
        imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/c0f254a3c6c17885a61cd7ef1f2d3205_360_360.jpg"
        alt="avatar image"
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.avatar')).toHaveLength(1);
  });
});
