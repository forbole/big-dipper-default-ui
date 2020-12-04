import React from 'react';
import { mount } from 'enzyme';
import AvatarDisplay from '.';

describe('AvatarDisplay', () => {
  it('Works', () => {
    expect(AvatarDisplay).toBeTruthy();
    const wrap = mount(
      <AvatarDisplay
        imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/c0f254a3c6c17885a61cd7ef1f2d3205_360_360.jpg"
        alt="avatar image"
        title="Forbole"
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.avatarDisplay')).toHaveLength(1);
    expect(wrap.find('div').first().text()).toBe('Forbole');
  });
});
