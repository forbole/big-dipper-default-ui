import React from 'react';
import classnames from 'classnames';
import { FileCopyOutlined } from '@material-ui/icons';
import { useGetStyles } from './styles';
import { useValidatorInfoHook } from './hooks';
import { ValidatorInfoProps } from './types';
import { valueConvertor } from './utils';
import { InfoPopover } from './components';

const ValidatorInfo = (props: ValidatorInfoProps) => {
  const {
    className,
    desktop,
    copyCallback,
    title,
    operatorAddress,
    selfDelegateAddress,
    commissionRate,
    maxChangeRate,
    maxRate,
  } = props;
  const { classes } = useGetStyles();
  const responsiveClass = desktop ? classes.desktop : classes.mobile;
  const responsiveClassKey = desktop ? 'validator-info-desktop' : 'validator-info-mobile';
  const { handleCopyClick } = useValidatorInfoHook({
    copyCallback,
  });
  return (
    <div
      className={classnames(classes.root, responsiveClass, className, responsiveClassKey, 'big-dipper', 'validator-info')}
    >
      <h2 className={classnames('validator-info__header')}>{title}</h2>
      <div className={classnames('validator-info__content', 'content')}>
        {/* ================================ */}
        {/* address */}
        {/* ================================ */}
        <p className={classnames('content__operator-address--label', 'label')}>{operatorAddress.label}</p>
        <div className={classnames('content__operator-address--detail', 'detail')}>
          {valueConvertor(operatorAddress.display)}
          <span onClick={() => handleCopyClick(operatorAddress.rawValue)} role="button">
            <FileCopyOutlined
              fontSize="small"
              className="copy-icon"
            />
          </span>
        </div>
        {/* ================================ */}
        {/* self address */}
        {/* ================================ */}
        <p className={classnames('content__validator-self-address--label', 'label')}>{selfDelegateAddress.label}</p>
        <div className={classnames('content__validator-self-address--detail', 'detail')}>
          {valueConvertor(selfDelegateAddress.display)}
          <span onClick={() => handleCopyClick(selfDelegateAddress.rawValue)} role="button">
            <FileCopyOutlined
              fontSize="small"
              className="copy-icon"
            />
          </span>
        </div>
        {/* ================================ */}
        {/* commission rate */}
        {/* ================================ */}
        <div className={classnames('content__commission-rate--label', 'label')}>
          <p>{commissionRate.label}</p>
          <InfoPopover
            detail={commissionRate.description}
            className={commissionRate.descriptionClassname}
          />
        </div>
        <div className={classnames('content__commission-rate--detail', 'detail')}>
          {valueConvertor(commissionRate.display)}
        </div>
        {/* ================================ */}
        {/* max change rate */}
        {/* ================================ */}
        <p className={classnames('content__max-change-rate--label', 'label')}>
          {maxChangeRate.label}
        </p>
        <div className={classnames('content__max-change-rate--detail', 'detail')}>
          {valueConvertor(maxChangeRate.display)}
        </div>
        {/* ================================ */}
        {/* max rate */}
        {/* ================================ */}
        <div className={classnames('content__max-rate--label', 'label')}>
          <p>{maxRate.label}</p>
          <InfoPopover
            detail={maxRate.description}
            className={maxRate.descriptionClassname}
          />
        </div>
        <div className={classnames('content__max-rate--detail', 'detail')}>
          {valueConvertor(maxRate.display)}
        </div>
      </div>
    </div>
  );
};

export default ValidatorInfo;
