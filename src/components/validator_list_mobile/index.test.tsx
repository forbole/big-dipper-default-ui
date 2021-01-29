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
              avatar: <div>hello</div>,
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
