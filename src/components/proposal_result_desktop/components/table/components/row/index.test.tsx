import React from 'react';
import { mount } from 'enzyme';
import Row from '.';
import AvatarDisplay from '../../../avatar_display';

describe('Row', () => {
  it('Works', () => {
    expect(Row).toBeTruthy();
    const wrap = mount(
      <Row
        amount="10.8 ATOM"
        time="09 Jan 2020, 10:00:19"
        depositor={(
          <AvatarDisplay
            imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
            alt="avatar image"
            title="Forbole"
          />
        )}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('.amount').first().text()).toEqual('10.8 ATOM');
    expect(wrap.find('.time').first().text()).toEqual('09 Jan 2020, 10:00:19');
    expect(wrap.find(Row)).toHaveLength(1);
  });
});
