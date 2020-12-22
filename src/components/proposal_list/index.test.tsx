import React from 'react';
import { mount } from 'enzyme';
import ProposalList from '.';

describe('ProposalList', () => {
  it('Works', () => {
    expect(ProposalList).toBeTruthy();
    const spy = jest.fn();
    const wrap = mount(
      <ProposalList
        data={[{
          id: '01',
          proposer: <div>forbole</div>,
          title: <div>Lunie.io on iOS and Android</div>,
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
        onClick={spy}
        proposerDisplay="Proposer"
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('.id').first().text()).toEqual('#01');
    expect(wrap.find('.proposerText').first().text()).toEqual('Proposer');
    expect(wrap.find('.component').first().text()).toEqual('Vote');
    expect(wrap.find('.time').first().text()).toEqual('10 Jan 2020,13:00:22 UTC(In 12 days)');
    expect(wrap.find('.content').first().text()).toEqual('Lunie Mobile now available in app stores near you! 📲 iOS - http://bit.ly/lunie-ios 📲 Android - http://bit.ly/lunie-android ❣️This proposal was sent from the Lunie iOS app 😏');
    wrap.find('.single-row').first().simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
