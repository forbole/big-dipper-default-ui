import React from 'react';
import { TablePreviewWrapper } from '../src';
import {
  ActionButton, FooterAction,
} from './utils/table_preview_wrapper';

export default {
  title: 'TablePreviewWrapper',
  component: TablePreviewWrapper,
  argTypes: {
    title: {
      type: {
        required: true,
      },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'null',
        },
      },
      control: {
        type: null,
      },
    },
    action: {
      type: {
        required: true,
      },
      table: {
        type: {
          summary: 'ReactFC',
        },
        defaultValue: {
          summary: 'null',
        },
      },
      control: {
        type: null,
      },
    },
    footerAction: {
      type: {
        required: true,
      },
      table: {
        type: {
          summary: 'ReactFC',
        },
        defaultValue: {
          summary: 'null',
        },
      },
      control: {
        type: null,
      },
    },
  },
};

export const Default = () => {
  return (
    <TablePreviewWrapper
      title="Blocks"
      action={ActionButton}
      footerAction={FooterAction}
    >
      <div>
        us tincidunt. Morbi tristique ege
      </div>
    </TablePreviewWrapper>
  );
};

Default.args = {
};
