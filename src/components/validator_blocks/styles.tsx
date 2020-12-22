import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      boxSizing: 'border-box',
      '&.validator-blocks': {
        padding: '1rem',
      },
      '& .validator-blocks__title': {
        fontSize: '1.375rem',
        margin: 0,
      },
      '& .validator-blocks__description': {
        margin: '0.5rem 0',
      },
      '& .validator-blocks__bar-chart': {
        height: '100%',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
