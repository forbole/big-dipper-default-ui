import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      '& .validator-profile__header': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // flexWrap: 'wrap',
      },
      '& .header__status': {
        background: '#f3f3f3',
        padding: '0.25rem 1rem',
        borderRadius: '2rem',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
