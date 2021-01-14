import React from 'react';
import { mount } from 'enzyme';
import Container from '.';

describe('Container', () => {
  it('Works', () => {
    expect(Container).toBeTruthy();
    const args = {
      overrideLabel: 'Override',
      data: {
        validator: {
          className: 'validator',
          rawValue: 'forbole',
          display: <div>forbole</div>,
        },
        votingPower: {
          className: 'votingPower',
          rawValue: 4602020.799998,
          display: '4,602,020.799998 ATOM',
        },
        votingPowerPercentage: {
          className: 'votingPowerPercentage',
          rawValue: 77,
          display: '0.77%',
        },
        votingPowerOverride: {
          className: 'votingPowerOverride',
          rawValue: 1.9,
          display: '1.9%',
        },
        answer: {
          className: 'abstain',
          rawValue: 'abstain',
          display: 'Abstain',
        },
      },
    };
    const wrap = mount(
      <Container
        {...args}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(Container)).toHaveLength(1);
    expect(wrap.find('.votingPowerPercentage').first().text()).toEqual('0.77%');
    expect(wrap.find('.overrideLabel').first().text()).toEqual('Override');
  });
});
