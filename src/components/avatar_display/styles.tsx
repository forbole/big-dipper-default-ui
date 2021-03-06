import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      '&.avatarDisplay': {
        display: 'flex',
        alignItems: 'center',
      },
      '& .img': {
        marginRight: '0.3rem',
      },
      '& div': {
        fontSize: '1rem',
        fontWeight: 400,
        margin: '0',
        color: '#1D86FF',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
