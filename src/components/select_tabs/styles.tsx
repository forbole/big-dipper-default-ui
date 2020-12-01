import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      background: 'white',
      height: '100%',
      borderRadius: '6px',
      padding: '1rem',
      '& .MuiInputBase-root': {
        maxWidth: '100%',
      },
      '& .MuiSelect-select.MuiSelect-select': {
        paddingTop: 0,
        paddingBottom: 0,
        fontSize: '1.125rem',
        fontWeight: 500,
      },
      '& .selected-title': {
        fontSize: '1.125rem',
        fontWeight: 500,
        margin: 0,
      },
      '& .selected-component-container': {
        marginTop: '1.5rem',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
