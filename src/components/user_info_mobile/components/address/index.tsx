import React from 'react';
import classnames from 'classnames';
import { AddressProps } from './types';

const Address = (props: AddressProps) => {
  const {
    className,
    address,
  } = props;

  return (
    <div className={classnames(className, 'mainContainer')}>
      <img src={address.img} alt={address.alt} className={classnames('image')} />
      <div className={classnames('mainContent')}>
        <div className={classnames('container')}>
          <h4>{address.address.title}</h4>
          <p>{address.address.address}</p>
        </div>
        <div className={classnames('container')}>
          <h4>{address.rewardAddress.title}</h4>
          <p>{address.rewardAddress.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Address;
