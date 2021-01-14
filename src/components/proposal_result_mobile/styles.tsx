import { makeStyles } from '@material-ui/styles';

export const useGetStyles = (props: any) => {
  const useStyles = makeStyles({
    root: {
      overflow: 'auto',
      overflowX: 'auto',
    },
    table: {
      '& .tab': {
        boxShadow: 'none',
        color: ' #777777',
        backgroundColor: 'rgba(0,0,0,0)',
        '& .MuiTab-root': {
          padding: '0',
          minWidth: '8rem',
          color: '#777777',
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
      '& .container': {
        display: 'flex',
        marginBottom: '0.5rem',
      },
      '& .mainContainer': {
        marginTop: '0.625rem',
      },
      '& .line': {
        height: '1px',
        margin: '1rem 0 1rem 0',
        width: '100%',
        background: '#E8E8E8',
      },
      '& .answer,& .votingPowerOverride': {
        flex: 1,
        justifyContent: 'flex-end',
        display: 'flex',
      },
      '& .votingPowerPercentage': {
        marginLeft: '0.5rem',
        color: '#777777',
      },
      '& .votingPowerOverride': {
        color: '#777777',
      },
      '& .yes': {
        color: '#1EC490',
      },
      '& .no': {
        color: '#FD248C',
      },
      '& .veto': {
        color: '#FD7522',
      },
      '& .abstain': {
        color: '#1D86FF',
      },
      '& .absence': {
        color: '#1D86FF',
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
      '& h1': {
        fontSize: '1.375rem',
        margin: '0 0 0.5rem 0',
        fontWeight: '400',
      },
      '& h2': {
        fontSize: '1.125rem',
        margin: '0 0 0.5rem 0',
        fontWeight: '400',
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
        marginLeft: '1rem',
        flex: 1,
      },
      '& .dataRow': {
        display: 'flex',
      },
      '& .dataType': {
        marginTop: '0.625rem',
        position: 'relative',
        paddingLeft: '2rem',
        fontSize: '0.875rem',
        minWidth: '0',
        flex: 1,
        '&.yes': {
          '&:before': {
            background: props.chart.colors[0],
          },
        },
        '&.abstain': {
          '&:before': {
            background: props.chart.colors[3],
          },
        },
        '&.veto': {
          '&:before': {
            background: props.chart.colors[2],
          },
        },
        '&.no': {
          '&:before': {
            background: props.chart.colors[1],
          },
        },
        '&:before': {
          content: '""',
          marginTop: '0.5rem',
          width: '1rem',
          height: '10%',
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
