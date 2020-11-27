import React from 'react';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';
// import { addDecorator } from '@storybook/react';
// import { withConsole } from '@storybook/addon-console';
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import './styles.css';
import themeBase from './theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { hideNoControlsWarning: true },
  docs: { page: () => (
    <>
      <Title />
      <Subtitle />
      <Description />
      <ArgsTable story={PRIMARY_STORY} />
      <Primary />
      <Stories />
    </>
  ),
},
}

// addDecorator((storyFn, context) => withConsole()(storyFn)(context));

export const decorators = [(Story) => {
  const theme = createMuiTheme(themeBase);
  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
}
];
