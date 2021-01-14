import { makeStyles } from '@material-ui/styles';

export const useGetStyles = (props: any) => {
  const useStyles = makeStyles({
    root: {
      overflow: 'auto',
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
      '& .table__row': {
        paddingRight: '2.5rem',
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
        color: '#FD3B4C',
      },
      '& .answer': {
        paddingRight: '2.5rem',
      },
      '& .label__validator': {
        paddingLeft: '1.5rem',
      },
      '& .label__answer': {
        paddingRight: '1.5rem',
      },
      '& .votingPowerOverride': {
        display: 'flex',
        alignItems: 'center',
        '& .question-icon': {
          marginLeft: '0.3rem',
          color: '#777777',
        },
      },
    },
    chart: {
      display: 'flex',
      '& .chartBox': {
        width: '7.5rem',
        height: '7.5rem',
        margin: '3.75rem',
      },
      '& p': {
        margin: '0',
        color: '#414141',
      },
      '& h1': {
        fontSize: '1.5rem',
        margin: '0',
        fontWeight: '400',
      },
      '& .amount': {
        fontSize: '1rem',
        color: '#414141',
        marginLeft: '0.5rem',
      },
      '& .dataName': {
        color: '##777777',
      },
      '& .dataDisplay': {
        fontSize: '1.25rem',
        color: '#000000',
      },
      '& .dataContent': {
        display: 'flex',
        marginTop: '0.5rem',
      },
      '& .dataColumn': {
        marginRight: '2rem',
      },
      '& .dataType': {
        marginTop: '1.5rem',
        position: 'relative',
        paddingLeft: '0.7rem',
        fontSize: '0.875rem',
        minWidth: '0',
        flex: 1,
        '&.yes': {
          '&:before': {
            background: props[0],
          },
        },
        '&.abstain': {
          '&:before': {
            background: props[3],
          },
        },
        '&.veto': {
          '&:before': {
            background: props[2],
          },
        },
        '&.no': {
          '&:before': {
            background: props[1],
          },
        },
        '&:before': {
          content: '""',
          width: '5px',
          height: '100%',
          left: '0',
          top: '0',
          background: '#b3b3b3',
          display: 'block',
          position: 'absolute',
          borderRadius: '15px',
        },
      },
      '& .percentage': {
        marginLeft: '0.3rem',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
