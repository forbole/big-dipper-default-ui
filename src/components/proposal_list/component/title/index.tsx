import React from 'react';
import classnames from 'classnames';
import { Link } from '@material-ui/core';
import { TitleProp } from './types';

const Title = (props: TitleProp) => {
  const {
    display, id,
  } = props;
  return (

    <Link href={`/validators/${id}`} className={classnames('title')}>
      {display}
    </Link>
  );
};

export default Title;
