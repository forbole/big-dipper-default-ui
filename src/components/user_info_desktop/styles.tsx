import { makeStyles } from '@material-ui/styles';

export const useGetStyles = (props: any) => {
  const useStyles = makeStyles({
    root: {
      overflow: 'auto',
      '& h1': {
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
    },
    address: {
      display: 'flex',
      '& .rewardAddress': {
        display: 'flex',
        alignItems: 'center',
        '& .question-icon': {
          marginLeft: '0.3rem',
          color: '#777777',
        },
      },
      '& .addressDisplay': {
        display: 'flex',
        '& .copy-icon': {
          marginLeft: '0.3rem',
          color: '#777777',
          width: '1rem',
          height: '1rem',
        },
      },
      '& .mainContent': {
        display: 'flex',
        flex: 1,
      },
      '& .container': {
        margin: '0.5rem 0 0.5rem 0',
        width: '50%',
      },
      '& .imgContainer': {
        display: 'flex',
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
        borderRadius: '50%',
        marginRight: '0.5rem',
      },
    },
    table: {
      '& .tab': {
        boxShadow: 'none',
        color: ' #777777',
        backgroundColor: 'rgba(0,0,0,0)',
        '& .MuiTab-root': {
          padding: '0',
        },
        '& .indicator': {
          backgroundColor: '#FD3B4C',
        },
        '& .MuiAppBar-colorDefault': {
          backgroundColor: 'rgba(0,0,0,0)',
        },
        '& .MuiTab-textColorPrimary.Mui-selected': {
          color: '#FD3B4C',
        },
      },
      '& .MuiBox-root': {
        padding: '0',
      },
      '& .MuiTableCell-root': {
        borderBottom: 'none',
        fontSize: '1rem',
      },
      '& .validator': {
        paddingLeft: '2.5rem',
      },
      '& .table__row, & .last7Days, & .expectedDelivery': {
        paddingRight: '2.5rem',
      },
      '& .label__validator': {
        paddingLeft: '1.5rem',
      },
      '& .label__last7Days, & .label__expectedDelivery': {
        paddingRight: '1.5rem',
      },
    },
    chart: {
      display: 'flex',
      marginBottom: '2rem',
      '& .chartBox': {
        marginTop: '0.5rem',
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
      },
      '& .totalAmount': {
        height: '50%',
      },
      '& .totalDollar': {
        textAlign: 'bottom',
        height: '50%',
        position: 'relative',
      },
      '& h1': {
        fontSize: '1.375rem',
        margin: '0',
        paddingTop: '0.5rem',
        fontWeight: '400',
      },
      '& h2': {
        fontSize: '1rem',
        margin: '0',
        fontWeight: '400',
        color: '#777777',
        position: 'absolute',
        bottom: 0,
        right: 0,
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
      '& .contentLeft': {
        display: 'flex',
        marginTop: '1.5rem',
        marginBottom: '2rem',
        width: '50%',
      },
      '& .contentRight': {
        display: 'flex',
        marginTop: '1.5rem',
        marginBottom: '2rem',
        width: '50%',
      },
      '& .custom-component': {
        position: 'absolute',
        bottom: '0',
      },
      '& .custom-component-container': {
        position: 'relative',
      },
      '& .dataAmount': {
        flex: 1,
        textAlign: 'end',
      },
      '& .dataDisplay': {
        fontSize: '1.25rem',
        color: '#000000',
      },
      '& .dataContent': {
        flex: 1,
        margin: '0 1rem 0 1rem',
      },
      '& .dataRow': {
        display: 'flex',
      },
      '& .dataType': {
        marginTop: '0.5rem',
        position: 'relative',
        paddingLeft: '1.5rem',
        fontSize: '0.875rem',
        minWidth: '0',
        flex: 1,
        '&.available': {
          marginTop: '0',
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
    },
  });

  return {
    classes: useStyles(),
  };
};
