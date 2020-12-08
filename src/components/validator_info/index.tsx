import React from 'react';
import classnames from 'classnames';
import {
  FileCopyOutlined, HelpOutline,
} from '@material-ui/icons';
import { useGetStyles } from './styles';
import { useValidatorInfoHook } from './hooks';

const ValidatorInfo = (props: any) => {
  const {
    className,
    desktop,
    copyCallback,
  } = props;
  const { classes } = useGetStyles();
  const responsiveClass = desktop ? classes.desktop : classes.mobile;
  const responsiveClassKey = desktop ? 'validator-info-desktop' : 'validator-info-mobile';

  return (
    <div
      className={classnames(classes.root, responsiveClass, className, responsiveClassKey, 'big-dipper', 'validator-info')}
    >
      <h2 className={classnames('validator-info__header')}>Validator Info</h2>
      <div className={classnames('validator-info__content', 'content')}>
        {/* ================================ */}
        {/* address */}
        {/* ================================ */}
        <p className={classnames('content__operator-address--label', 'label')}>operate Address</p>
        <div className={classnames('content__operator-address--detail', 'detail')}>
          <p>operate Address detail</p>
          <FileCopyOutlined fontSize="small" className="copy-icon" />
        </div>
        {/* ================================ */}
        {/* self address */}
        {/* ================================ */}
        <p className={classnames('content__validator-self-address--label', 'label')}>Validator Self address</p>
        <p className={classnames('content__validator-self-address--detail', 'detail')}>Validator Self address detail</p>
        {/* ================================ */}
        {/* commission rate */}
        {/* ================================ */}
        <div className={classnames('content__commission-rate--label', 'label')}>
          <p>Validator Self commission rate</p>
          <HelpOutline fontSize="small" className="question-icon" />
        </div>
        <p className={classnames('content__commission-rate--detail', 'detail')}>Validator Self commission detail</p>
        {/* ================================ */}
        {/* max change rate */}
        {/* ================================ */}
        <p className={classnames('content__max-change-rate--label', 'label')}>Validator max change rate</p>
        <p className={classnames('content__max-change-rate--detail', 'detail')}>Validator max change rate detail</p>
        {/* ================================ */}
        {/* max rate */}
        {/* ================================ */}
        <div className={classnames('content__max-rate--label', 'label')}>
          <p>Validator max rate</p>
          <HelpOutline fontSize="small" className="question-icon" />
        </div>
        <p className={classnames('content__max-rate--detail', 'detail')}>Validator max rate detail</p>
      </div>
    </div>
  );
};

export default ValidatorInfo;
