import React from 'react';
import classnames from 'classnames';
import ReactMarkdown from 'react-markdown';
import { useGetStyles } from './styles';
import { AvatarDisplay } from '../..';

const ValidatorProfile = () => {
  const props = {
    className: '',
    imageUrl: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
    alt: 'avatar image',
    name: '2nd only to Certus One in GoS: in3s.com sdfdsfgdfg',
    status: {
      display: 'Active',
      className: 'active',
    },
    bio: 'Lorem **ipsum** dolor sit amet, consectetur adipiscing elit. Vivamus dignissim nibh eu ex ultrices, eget vehicula arcu auctor. Ut sed sem molestie eros tempus congue at eu lorem.',
    desktopWidth: 765,
  };

  const {
    className,
    imageUrl,
    alt,
    name,
    status,
    bio,
    desktopWidth,
  } = props;

  const { classes } = useGetStyles(desktopWidth);

  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'validator-profile')}>
      <div className={classnames('validator-profile__header')}>
        <div
          className={classnames(status.className, 'header__status')}
        >
          {status.display}
        </div>
        <AvatarDisplay
          width="2.5rem"
          height="2.5rem"
          imageUrl={imageUrl}
          alt={alt}
          title={name}
        />
      </div>
      <div>
        <ReactMarkdown source={bio} />
      </div>
    </div>
  );
};

export default ValidatorProfile;
