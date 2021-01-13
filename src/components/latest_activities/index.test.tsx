import React from 'react';
import { mount } from 'enzyme';
import { CheckCircle } from '@material-ui/icons';
import LatestActivities from '.';

const spies = {
  onClick() {
    console.log('does something');
  },
};

describe('LatestActivities', () => {
  it('Works', () => {
    expect(LatestActivities).toBeTruthy();
    const onClickSpy = jest.spyOn(spies, 'onClick');
    const wrap = mount(
      <LatestActivities
        transactions={[
          {
            hash: {
              value: 123456,
              display: '#123adfds...456',
            },
            timestamp: '10 Dec 2019 18:12',
            success: true,
            messages: [
              <div>one message</div>,
              <div>two message</div>,
            ],
          },
        ]}
        onClick={spies.onClick}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find(CheckCircle)).toHaveLength(1);
    expect(onClickSpy).toHaveBeenCalledTimes(0);
    wrap.find('.single-transaction__wrapper').first().simulate('click');
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});
