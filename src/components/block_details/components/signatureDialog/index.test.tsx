import React from 'react';
import { mount } from 'enzyme';
import Dialog from '.';
import AvatarDisplay from '../../../avatar_display';

describe('Dialog', () => {
  it('Works', () => {
    expect(Dialog).toBeTruthy();
    const spy = jest.fn();
    const wrap = mount(
      <Dialog
        open
        handleClose={spy}
        tableHead={{
          validator: 'Validator',
          votingPower: 'Voting Power',
          votingPowerPercentage: 'Voting Power (Percentage)',
          signStatus: 'Sign Status',
        }}
        data={[
          {
            validator: <AvatarDisplay
              imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
              alt="avatar image"
              title="Forbole"
            />,
            votingPower: '3,880,293.53653856 ATOM',
            votingPowerPercentage: '7.02%',
            signStatus: 0,
          },
          {
            validator: <AvatarDisplay
              imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
              alt="avatar image"
              title="Forbole"
            />,
            votingPower: '3,880,293.53653856 ATOM',
            votingPowerPercentage: '7.02%',
            signStatus: 0,
          },
        ]}
        desktop
        title="Signatures"
      />,
    );
    wrap.find('.closeIcon').first().simulate('click');
    expect(wrap).not.toBeNull();
    expect(wrap.find('h6').first().text()).toEqual('Signatures');
    expect(wrap.find('.headTitle').first().text()).toEqual('Validator');
    expect(spy).toHaveBeenCalled();
    expect(wrap.find(Dialog)).toHaveLength(1);
  });
});
