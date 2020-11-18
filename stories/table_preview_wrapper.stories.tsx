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
        us tincidunt. Morbi tristique eget elit vitae condimentum. Donec eleifend imperdiet nisl eget laoreet. Sed ultrices risus sit amet urna lacinia, quis congue est feugiat. Sed facilisis vel nisi ut blandit. Maecenas cursus, ante a maximus suscipit, elit nulla interdum nunc, vel bibendum lacus velit et tellus. Etiam quis ipsum sed orci lacinia ornare viverra et massa. Sed nec tempus dolor.
      </div>
    </TablePreviewWrapper>
  );
};

Default.args = {
};
