import { makeStyles } from '@material-ui/styles';
import { getMinMediaQuery } from '../../utils';

export const useGetStyles = (desktopWidth: number) => {
  const useStyles = makeStyles({
    root: {
      '& .validator-profile__header': {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
      },
      '& .header__status': {
        background: '#f3f3f3',
        padding: '0.25rem 1rem',
        borderRadius: '2rem',
        marginBottom: '1rem',
        fontSize: '0.75rem',
        alignSelf: 'flex-end',
      },

      [getMinMediaQuery(desktopWidth)]: {
        '& .avatarDisplay': {
          flexDirection: 'column',
          '& .avatar': {
            width: '3.5rem',
            height: '3.5rem',
          },
          '& .img': {
            margin: '0',
            marginBottom: '0.5rem',
          },
        },
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
