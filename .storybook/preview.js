import React from 'react';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';
import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
// wingman maybe come back later
// import CssBaseline from '@material-ui/core/CssBaseline';
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import './styles.css';
import themeBase from './theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: { page: () => (
    <>
      <Title />
      <Subtitle />
      <Description />
      <ArgsTable story={PRIMARY_STORY} />
    </>
  ),
},
}

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

export const decorators = [(Story) => {
  const theme = createMuiTheme(themeBase);
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Story />
    </ThemeProvider>
  )
}
];
