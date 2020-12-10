import React from 'react';
import { mount } from 'enzyme';
import ProposalList from '.';

describe('ProposalList', () => {
  it('Works', () => {
    expect(ProposalList).toBeTruthy();
    const wrap = mount(
      <ProposalList
        data={[{
          id: '#01',
          proposer: <div>forbole</div>,
          title: {
            display: 'Lunie.io on iOS and Android 📱🔥🚀',
            id: '123',
          },
          content: 'Lunie Mobile now available in app stores near you! 📲 iOS - http://bit.ly/lunie-ios 📲 Android - http://bit.ly/lunie-android ❣️This proposal was sent from the Lunie iOS app 😏',
          time: '10 Jan 2020,13:00:22 UTC',
          status: {
            current: true,
            display: 'Vote',
          },
          duration: '(In 12 days)',
        },
        ]}
        desktop={false}
        imageUrl="./stories/assets/images/wall-clock.png"
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('.proposerText').first().text()).toEqual('Proposer');
    expect(wrap.find('.content').first().text()).toEqual('Lunie Mobile now available in app stores near you! 📲 iOS - http://bit.ly/lunie-ios 📲 Android - http://bit.ly/lunie-android ❣️This proposal was sent from the Lunie iOS app 😏');
  });
});
