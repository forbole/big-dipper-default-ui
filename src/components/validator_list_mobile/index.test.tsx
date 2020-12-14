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
        data={[
          {
            moniker: {
              imageUrl: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
              display: 'Forbole',
            },
            operatorAddress: '312',
            votingPower: {
              rawValue: 1000,
              display: '110,000,08511111111321654649845',
              percentDisplay: '10654654654654654654654564%',
            },
            status: {
              rawValue: 'active',
              className: 'active',
              display: 'active',
            },
          },
        ]}
        labels={{
          commission: 'commission',
        }}
        onClick={() => {}}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find(Tab)).toHaveLength(0);
    expect(wrap.find(SingleValidator)).toHaveLength(1);
  });
});
