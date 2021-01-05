import React from 'react';
import { mount } from 'enzyme';
import ValidatorProfile from '.';
import { AvatarDisplay } from '../..';

describe('ValidatorProfile', () => {
  it('Works', () => {
    expect(ValidatorProfile).toBeTruthy();
    const wrap = mount(
      <ValidatorProfile
        imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
        alt="Forbole Icon"
        name="Forbole"
        bio="Lorem **ipsum** dolor sit amet, consectetur adipiscing elit. Vivamus dignissim nibh eu ex ultrices, eget vehicula arcu auctor. Ut sed sem molestie eros tempus congue at eu lorem."
        desktopWidth={765}
        keyBase={{
          display: '12345678910',
          verified: true,
          url: 'https://keybase.io',
        }}
        website="https://www.forbole.com/"
        status={{
          display: 'Active',
          className: 'active',
        }}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.validator-profile')).toHaveLength(1);
    expect(wrap.find(AvatarDisplay)).toHaveLength(1);
  });
});
