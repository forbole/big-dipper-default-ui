import { makeStyles } from '@material-ui/styles';
import { getMinMediaQuery } from '../../utils';

export const useGetStyles = (desktopWidth?: number) => {
  const useStyles = makeStyles({
    root: {
      '& .validator-profile__header': {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
        alignItems: 'center',
      },
      '& .header__status': {
        background: '#f3f3f3',
        padding: '0.25rem 1rem',
        borderRadius: '2rem',
        fontSize: '0.75rem',
      },
      '& .content__bio': {
        margin: '0.5rem 0 1.5rem 0',
      },
      '& .content__link': {
        display: 'grid',
        gridTemplateColumns: '40px auto',
        alignItems: 'center',
        marginBottom: '0.5rem',
      },
      '& .keybase__display': {
        display: 'flex',
        alignItems: 'center',
        '& svg': {
          fontSize: '1rem',
          marginLeft: '0.5rem',
        },
      },
      '& a': {
        textDecoration: 'none',
        color: 'inherit',
      },
      [getMinMediaQuery(desktopWidth ?? '')]: {
        '& .validator-profile__header': {
          flexDirection: 'column',
        },
        '& .header__status': {
          alignSelf: 'flex-end',
        },
        '& .avatarDisplay': {
          flexDirection: 'column',
          '& div': {
            fontWeight: 600,
            fontSize: '1.875rem',
          },
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
