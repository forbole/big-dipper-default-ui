import React from 'react';
import { mount } from 'enzyme';
import { Tab } from '@material-ui/core';
import ValidatorListMobile from '.';
import { SingleValidator } from './components';

describe('ValidatorListMobile', () => {
  it('Works active', () => {
    expect(ValidatorListMobile).toBeTruthy();
    const wrap = mount(
      <ValidatorListMobile
        inactive={[
          {
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
          },
        ]}
        active={[
          {
            imageUrl: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
            displayName: 'Forbsdsfgkbhfskhfsdhole',
            operatorAddress: '312',
            commission: {
              rawValue: 100,
              display: '100%',
            },
            votingPower: {
              rawValue: 1000,
              display: '110,000,08511111111321654649845',
              percentDisplay: '10654654654654654654654564%',
            },
            status: {
              className: 'active',
              display: 'active',
            },
          },
        ]}
        labels={{
          commission: 'commission',
          active: 'active',
          inactive: 'inactive',
        }}
        onClick={() => {}}
        tabs={{
          handleChange: (() => {}),
          value: 0,
        }}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find(Tab)).toHaveLength(2);
    expect(wrap.find(SingleValidator)).toHaveLength(1);
  });
});
