import React from 'react';
import { mount } from 'enzyme';
import {
  CheckCircle, Cancel,
} from '@material-ui/icons';
import { Avatar } from '../..';
import LatestActivitiesMobile from '.';

const spies = {
  onClick() {
    console.log('does something');
  },
};

describe('LatestActivitiesMobile', () => {
  it('Works', () => {
    expect(LatestActivitiesMobile).toBeTruthy();
    const onClickSpy = jest.spyOn(spies, 'onClick');
    const wrap = mount(
      <LatestActivitiesMobile
        data={[
          {
            avatar: <Avatar
              imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
              alt="avatar image"
              width="40px"
              height="40px"
            />,
            content: <div>hello</div>,
            type: {
              display: 'Delegate',
              className: 'delegate',
            },
            time: '1 hour',
            success: true,
            hash: '123',
          },
        ]}
        onClick={spies.onClick}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.latest-activities-mobile')).toHaveLength(1);
    expect(wrap.find('.activity')).toHaveLength(1);
    expect(wrap.find(Cancel)).toHaveLength(0);
    expect(wrap.find(CheckCircle)).toHaveLength(1);
    expect(onClickSpy).toHaveBeenCalledTimes(0);
    wrap.find('.activity').first().simulate('click');
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});
