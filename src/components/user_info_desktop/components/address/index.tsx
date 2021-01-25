import React from 'react';
import classnames from 'classnames';
import { FileCopyOutlined } from '@material-ui/icons';
import { AddressProps } from './types';
import { useAddressHook } from './hooks';

const Address = (props: AddressProps) => {
  const {
    className,
    addressContent,
    copyCallback,
  } = props;

  const { handleCopyClick } = useAddressHook({
    copyCallback,
  });

  return (
    <div className={classnames(className, 'mainContainer')}>
      <div className={classnames('container', 'imgContainer')}>
        <img src={addressContent.img} alt={addressContent.alt} className={classnames('image')} />
        <div>
          <h4>{addressContent.address.title}</h4>
          <p className={classnames('addressDisplay')}>
            {addressContent.address.display}
            <span
              onClick={() => handleCopyClick(addressContent.address.rawValue)}
              role="button"
              className="icon__wrapper"
            >
              <FileCopyOutlined
                fontSize="small"
                className="copy-icon icon"
              />
            </span>
            {addressContent.address.dialog}
          </p>
        </div>
      </div>
      <div className={classnames('container')}>
        <h4>{addressContent.rewardAddress.title}</h4>
        <p className={classnames('addressDisplay')}>
          {addressContent.rewardAddress.display}
          <span
            onClick={() => handleCopyClick(addressContent.rewardAddress.display)}
            role="button"
            className="icon__wrapper"
          >
            <FileCopyOutlined
              fontSize="small"
              className="copy-icon icon"
            />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Address;
