import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      boxSizing: 'border-box',
      '& .single-transaction__wrapper': {
        '&:hover': {
          cursor: 'pointer',
        },
      },
      '& .single-transaction__header': {
        display: 'flex',
        background: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.5rem 1rem',
      },
      '& .header__right-content': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      '& .header__icon': {
        fontSize: '1rem',
        marginLeft: '0.5rem',
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
