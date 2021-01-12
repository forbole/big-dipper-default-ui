// import React from 'react';
import { Data } from '../../types';

// export interface ContainerProps {
//   validator: React.ReactNode;
//   votingPower: string;
//   votingPowerPercentage: string;
//   votingPowerOverride: string;
//   answer: string;
// }

export interface PaginatedContainerProps {
  className?: string;
  data: Data[];
  overrideLabel: string;
}
