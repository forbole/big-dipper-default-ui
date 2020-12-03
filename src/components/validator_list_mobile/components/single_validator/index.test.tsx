import React from 'react';
import { mount } from 'enzyme';
import SingleValidator from '.';
import { Avatar } from '../../../..';

describe('SingleValidator', () => {
  it('Works active', () => {
    expect(SingleValidator).toBeTruthy();
    const wrap = mount(
      <SingleValidator
        data={{
          imageUrl: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
          displayName: 'Forbsdsfgkbhfskhfsdhole',
          operatorAddress: '312',
          commission: '100%',
          votingPower: {
            rawValue: 1000,
            display: '110,000,08511111111321654649845',
            percentDisplay: '10654654654654654654654564%',
          },
          status: {
            className: 'active',
            display: 'active',
          },
        }}
        labels={{
          commission: 'commission',
          active: 'active',
          inactive: 'inactive',
        }}
        onClick={() => {}}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.bottom-container__commission')).toHaveLength(1);
    expect(wrap.find('.bottom-container__status')).toHaveLength(0);
    expect(wrap.find(Avatar)).toHaveLength(1);
  });

  it('Works inactive', () => {
    expect(SingleValidator).toBeTruthy();
    const wrap = mount(
      <SingleValidator
        data={{
          imageUrl: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
          displayName: 'Forbsdsfgkbhfskhfsdhole',
          operatorAddress: '312',
          votingPower: {
            rawValue: 1000,
            display: '110,000,08511111111321654649845',
            percentDisplay: '10654654654654654654654564%',
          },
          status: {
            className: 'active',
            display: 'active',
          },
        }}
        labels={{
          commission: 'commission',
          active: 'active',
          inactive: 'inactive',
        }}
        onClick={() => {}}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.bottom-container__commission')).toHaveLength(0);
    expect(wrap.find('.bottom-container__status')).toHaveLength(1);
  });
});
