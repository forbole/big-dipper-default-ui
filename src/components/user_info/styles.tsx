import { makeStyles } from '@material-ui/styles';
import { getMinMediaQuery } from '../../utils';
import { UserInfoProps } from './types';

export const useGetStyles = (props: UserInfoProps) => {
  const useStyles = makeStyles({
    root: {
      '& .userInfo__title': {
        margin: '0 0 1rem 0',
        fontSize: '1.375rem',
        fontWeight: 400,
      },
      '& hr': {
        height: '1px',
        margin: '1rem 0 0 0',
        width: '100%',
        background: '#E8E8E8',
        borderStyle: 'unset',
      },
      [getMinMediaQuery(props?.desktop || '')]: {
        '& .userInfo__title': {
          display: 'none',
        },
      },
    },
    address: {
      display: 'flex',
      '& .addressDisplay': {
        display: 'flex',
        '& .copy-icon': {
          marginLeft: '0.3rem',
          color: '#777777',
          width: '1rem',
          height: '1rem',
        },
      },
      '& .rewardAddress': {
        '& .question-icon': {
          marginLeft: '0.3rem',
          color: '#777777',
        },
      },
      '& .mainContent': {
        flex: 1,
      },
      '& .container': {
        margin: '0.5rem 0',
      },
      '& h4': {
        margin: '0',
        fontSize: '1.125rem',
        fontWeight: 400,
      },
      '& p': {
        margin: '0.2rem 0 0 0',
        fontSize: '0.875rem',
        color: '#777777',
      },
      '& .image': {
        height: '3.75rem',
        width: '3.75rem',
        marginRight: '0.5rem',
      },
      [getMinMediaQuery(props?.desktop || '')]: {
        '& .mainContent': {
          display: 'flex',
        },
        '& .container': {
          width: '50%',
        },
      },
    },
    chart: {
      '& .chartBox': {
        width: '7.5rem',
        height: '7.5rem',
      },
      '& p': {
        margin: '0',
        color: '#414141',
        fontSize: '0.875rem',
      },
      '& .total': {
        flex: 1,
        textAlign: 'right',
        marginTop: '0.5rem',
      },
      '& h1': {
        fontSize: '1.375rem',
        margin: '0.7rem 0 0 0',
        fontWeight: '400',
      },
      '& h2': {
        fontSize: '1rem',
        margin: '0',
        fontWeight: '400',
        color: '#777777',
      },
      '& h3': {
        fontSize: '1rem',
        margin: '0',
        fontWeight: '400',
      },
      '& h4': {
        fontSize: '0.875rem',
        margin: '0',
        fontWeight: '400',
        color: '#777777',
      },
      '& .amount': {
        fontSize: '1rem',
        color: '#414141',
      },
      '& .mainContent': {
        display: 'flex',
        marginTop: '1.5rem',
        marginBottom: '2rem',
      },
      '& .dataPercentage': {
        flex: 1,
        textAlign: 'end',
      },
      '& .dataDisplay': {
        fontSize: '1.25rem',
        color: '#000000',
      },
      '& .dataContent': {
        flex: 1,
      },
      '& .dataRow': {
        display: 'flex',
      },
      '& .dataType': {
        marginTop: '0.625rem',
        position: 'relative',
        paddingLeft: '1.5rem',
        fontSize: '0.875rem',
        minWidth: '0',
        flex: 1,
        '&.available': {
          '&:before': {
            background: props.chart.colors[0],
          },
        },
        '&.delegate': {
          '&:before': {
            background: props.chart.colors[1],
          },
        },
        '&.unbonding': {
          '&:before': {
            background: props.chart.colors[2],
          },
        },
        '&.reward': {
          '&:before': {
            background: props.chart.colors[3],
          },
        },
        '&.commision': {
          '&:before': {
            background: props.chart.colors[4],
          },
        },
        '&:before': {
          content: '""',
          marginTop: '0.5rem',
          width: '1rem',
          height: '20%',
          left: '0',
          top: '0',
          bottom: '0',
          background: '#b3b3b3',
          display: 'block',
          position: 'absolute',
          borderRadius: '15px',
        },
      },
      '& .total__desktop': {
        display: 'none',
      },
      [getMinMediaQuery(props?.desktop || '')]: {
        '&.userInfoChart': {
          display: 'flex',
          margin: '2rem 0',
        },
        '& .total': {
          display: 'none',
        },
        '& .total__desktop': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          flex: 1,
          textAlign: 'right',
        },
        '& .mainContent': {
          marginBottom: 0,
        },
        '& .dataContent': {
          flex: 'none',
          width: '33%',
          marginLeft: '2rem',
        },
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
