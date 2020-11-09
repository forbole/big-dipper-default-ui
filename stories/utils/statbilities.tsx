import React from 'react';
import classnames from 'classnames';
import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { StatbilitiesProps } from '../../src/statbilities/types';

export const LinkComponent = (props:any) => {
  const {
    url,
    title,
  } = props;

  return (
    <Link
      href={url}
      color="inherit"
      underline="none"
    >
      {title}
    </Link>
  );
};

export const SocialMediaComponent = (props:any) => {
  const {
    url,
    component: Component,
    className,
  } = props;

  return (
    <a
      className={className}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <Component />
    </a>
  );
};

export const StoreBadgeComponent = (props:any) => {
  const {
    url,
    className,
    imageSrc,
    imageAlt,
  } = props;
  const useStyles = makeStyles({
    root: {
      '&.apple': {
        '& img': {
          width: '100px',
        },
      },
      '&.google': {
        '& img': {
          width: '110px',
        },
      },
    },
  });
  const classes = useStyles();
  return (
    <a
      className={classnames(classes.root, className)}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        title={imageAlt}
      />
    </a>
  );
};

// Examples of props needed for `Footer` to work correctly
export const defaultProps:StatbilitiesProps = {
  bigDipperLogo: {
    src: './src/resources/images/big-dipper-logo.png',
    alt: 'big dipper logo',
  },
  donate: {
    text: 'Donate',
    url: '#',
  },
  breakpoint: 769,
  blockExplorerText: 'Cosmos Block Explorer',
  copyrightText: 'Copyright © Forbole 2020',
  links: {
    components: [
      <LinkComponent url="#" title="About Big Dipper" />,
      <LinkComponent url="#" title="FAQ" />,
      <LinkComponent url="#" title="Terms and Conditions" />,
      <LinkComponent url="#" title="Download Big Dipper Wallet" />,
    ],
    decorator: '|',
  },

  storeBadgesComponents: [
    <StoreBadgeComponent url="#" className="apple" alt="apple" imageSrc="./stories/resources/apple-badge.svg" />,
    <StoreBadgeComponent url="#" className="google" alt="google" imageSrc="./stories/resources/google-play-badge.svg" />,
  ],
};

export const baseProps:StatbilitiesProps = {
  blockExplorerText: 'Cosmos Block Explorer',
  copyrightText: 'Copyright © Forbole 2020',
};
