import React from 'react';
import { mount } from 'enzyme';
import SingleValidator from '.';

describe('SingleValidator', () => {
  it('Works active', () => {
    expect(SingleValidator).toBeTruthy();
    const wrap = mount(
      <SingleValidator
        data={{
          moniker: {
            avatar: <div>hello</div>,
            display: 'Forbole',
          },
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
            rawValue: 'active',
            className: 'active',
            display: 'active',
          },
        }}
        labels={{
          commission: 'commission',
        }}
        onClick={() => {}}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.bottom-container__commission')).toHaveLength(1);
    expect(wrap.find('.bottom-container__status')).toHaveLength(0);
  });

  it('Works inactive', () => {
    expect(SingleValidator).toBeTruthy();
    const wrap = mount(
      <SingleValidator
        data={{
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
        }}
        labels={{
          commission: 'commission',
        }}
        onClick={() => {}}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.bottom-container__commission')).toHaveLength(0);
    expect(wrap.find('.bottom-container__status')).toHaveLength(1);
  });
});
