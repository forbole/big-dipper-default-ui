import React from 'react';

export type Address = {
  title: string | React.ReactNode;
  display: string;
  rawValue: string;
  dialog?: React.ReactNode;
};

export interface AddressProps {
  className?: string,
  copyCallback?: (value: string) => void;
  addressContent: {
    image?: React.ReactNode;
    address: Address;
    rewardAddress: Address;
  }
}
