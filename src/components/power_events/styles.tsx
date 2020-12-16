import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      '& .event__header': {
        background: '#F6F7F9',
        padding: '1rem',
        color: '#777777',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.875rem',
      },
      '& p': {
        margin: 0,
      },
      '& .event__body-container': {
        padding: '1rem',
      },
      '& .body-container__change': {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: '1rem',
      },
      '& .change__difference': {
        display: 'flex',
        flexWrap: 'wrap',
      },
      '& .difference__value': {
        fontSize: '1.125rem',
      },
      '& .change__value': {
        marginLeft: '0.5rem',
        fontSize: '0.875rem',
      },
      '& .body-container__info': {
        fontSize: '0.875rem',
      },
      '& .info__footer': {
        display: 'flex',
        alignItems: 'center',
        marginTop: '0.875rem',
      },
      '& .footer__type': {
        background: '#c9c9c9',
        borderRadius: '4px',
        padding: '0.3rem 0.875rem',
      },
      '& .footer__value': {
        fontWeight: 600,
        marginLeft: '0.5rem',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
