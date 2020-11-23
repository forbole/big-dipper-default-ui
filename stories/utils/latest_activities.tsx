import React from 'react';
import { Avatar } from '../../src';

export const ContentMobile = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare libero ut felis ultricies, vel feugiat elit pretium. Pellentesque ac nisl id arcu rhoncus laoreet nec sit amet nisl.
    </div>
  );
};

export const dummyDataMobile = [
  {
    avatar: <Avatar
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      width="40px"
      height="40px"
    />,
    content: <ContentMobile />,
    type: {
      display: 'Delegateaaaaaaaaaaaa',
      className: 'delegate',
    },
    time: '1 hour',
    success: true,
  },
  {
    avatar: <Avatar
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      width="40px"
      height="40px"
    />,
    content: <ContentMobile />,
    type: {
      display: 'Delegate',
      className: 'delegate',
    },
    time: '1 hour',
    success: true,
  },
  {
    avatar: <Avatar
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      width="40px"
      height="40px"
    />,
    content: <ContentMobile />,
    type: {
      display: 'Delegate',
      className: 'delegate',
    },
    time: '1 hour',
    success: false,
  },
];
