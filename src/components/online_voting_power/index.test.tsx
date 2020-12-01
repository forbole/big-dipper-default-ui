import React from 'react';
import { mount } from 'enzyme';
import {
  ResponsiveContainer, LineChart,
} from 'recharts';
import OnlineVotingPower from '.';

describe('OnlineVotingPower', () => {
  it('Works', () => {
    expect(OnlineVotingPower).toBeTruthy();
    const wrap = mount(
      <OnlineVotingPower
        data={[
          {

            date: 'JAN 1', value: 1500,
          },
          {
            date: 'JAN 2', value: 1500,
          },
        ]}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find(ResponsiveContainer)).toHaveLength(1);
    expect(wrap.find(LineChart)).toHaveLength(1);
    expect(wrap.find('.online-voting-power')).toHaveLength(1);
  });
});
