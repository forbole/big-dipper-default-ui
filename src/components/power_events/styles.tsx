import { makeStyles } from '@material-ui/styles';
import { getMinMediaQuery } from '../../utils';

export const useGetStyles = (desktop: any) => {
  const useStyles = makeStyles({
    root: {
      '& .event__header, & .change__value, & .body-container__info': {
        fontSize: '0.875rem',
      },
      '& .event__header': {
        background: '#F6F7F9',
        padding: '1rem',
        color: '#777777',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      '& p': {
        margin: 0,
      },
      '& .arrow': {
        margin: '0 0.3rem',
      },
      '& .event__body-container': {
        padding: '1rem',
      },
      '& .body-container__change': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1rem',
      },
      '& .change__difference': {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
      },
      '& .difference__value': {
        fontSize: '1.125rem',
      },
      '& .change__value': {
        marginLeft: '0.5rem',
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
      '& .info__redelegate': {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: '0.875rem',
      },
      [getMinMediaQuery(desktop)]: {
        '& .event__body-container': {
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
        },
        '& .body-container__change': {
          flexDirection: 'column',
          marginBottom: 0,
          justifyContent: 'flex-start',
        },
        '& .event__header, & .body-container__info': {
          fontSize: '1rem',
        },
        '& .difference__value, & .change__value': {
          fontSize: '1.75rem',
        },
        '& .footer__value': {
          fontSize: '1.125rem',
        },
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
