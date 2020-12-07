import React from 'react';
import { mount } from 'enzyme';
import { OutlinedInput } from '@material-ui/core';
import { ValidatorTable } from './components';
import ValidatorListDesktop from '.';

describe('ValidatorListDesktop', () => {
  it('Works', () => {
    expect(ValidatorListDesktop).toBeTruthy();
    const wrap = mount(
      <ValidatorListDesktop
        active={[{
          operatorAddress: 'forbole12345',
          moniker: {
            rawValue: 'forbole',
            display: <div>forbole</div>,
          },
          self: {
            rawValue: 100,
            display: '100%',
          },
          status: {
            className: 'jailed',
            rawValue: 'jailed',
            display: 'jailed',
          },
          commission: {
            rawValue: 100,
            display: '100',
          },
          votingPower: {
            rawValue: 100,
            display: '100',
            percentDisplay: '100%',
          },
        }]}
        inactive={[{
          operatorAddress: 'forbole12345',
          moniker: {
            rawValue: 'forbole',
            display: <div>forbole</div>,
          },
          self: {
            rawValue: 100,
            display: '100%',
          },
          status: {
            className: 'jailed',
            rawValue: 'jailed',
            display: 'jailed',
          },
          commission: {
            rawValue: 100,
            display: '100',
          },
          votingPower: {
            rawValue: 100,
            display: '100',
            percentDisplay: '100%',
          },
        }]}
        labels={{
          active: 'active',
          inactive: 'inactive',
          rank: 'rank',
          moniker: 'moniker',
          votingPower: 'voting power',
          self: 'self',
          commission: 'commission',
          status: 'status',
        }}
        tabs={{
          handleChange: () => {},
          value: 1,
        }}
        search={{
          placeholder: 'placeholder',
          value: '',
          onSearchCallback: () => {},
          handleChange: () => {},
        }}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(OutlinedInput)).toHaveLength(1);
    expect(wrap.find('.validator-list-desktop__data-container')).toHaveLength(1);
    expect(wrap.find(ValidatorTable)).toHaveLength(1);
  });
});
