import React from 'react';
import { mount } from 'enzyme';
import { OutlinedInput } from '@material-ui/core';
import { Row } from './components';
import ValidatorListDesktop from '.';

describe('ValidatorListDesktop', () => {
  it('Works', () => {
    expect(ValidatorListDesktop).toBeTruthy();
    const wrap = mount(
      <ValidatorListDesktop
        data={[{
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
          condition: {
            rawValue: 'healthy',
            className: 'healthy',
          },
        }]}
        labels={{
          moniker: 'moniker',
          votingPower: 'voting power',
          self: 'self',
          commission: 'commission',
          status: 'status',
          condition: {
            display: 'Condition',
            description: 'hello world',
          },
        }}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(OutlinedInput)).toHaveLength(0);
    expect(wrap.find('.validator-list-desktop__data-container')).toHaveLength(0);
    expect(wrap.find(Row)).toHaveLength(1);
  });
});
