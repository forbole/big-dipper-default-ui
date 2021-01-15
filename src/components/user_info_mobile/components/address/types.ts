import React from 'react';

export type Address = {
  title: string | React.ReactNode;
  address: string | React.ReactNode;
};

export interface AddressProps {
  className?: string,
  address: {
    img?: string;
    alt?: string;
    address: Address;
    rewardAddress: Address;
  }
}
