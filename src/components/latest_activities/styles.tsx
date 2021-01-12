import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      boxSizing: 'border-box',
      '& .single-transaction__header': {
        display: 'flex',
        background: 'pink',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
      },
      '& .header__right-content': {
        display: 'flex',
      },
      '& .header__icon': {
        fontSize: '1rem',
        '&.success': {
          fill: '#15CF74',
        },
        '&.fail': {
          fill: '#FF3A44',
        },
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
