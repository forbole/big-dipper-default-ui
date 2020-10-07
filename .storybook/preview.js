import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './styles.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
export const decorators = [(Story) =>
  // wingman maybe..
  <>
    {/* <CssBaseline /> */}
    <Story />
  </>
];
