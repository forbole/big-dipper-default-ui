import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      padding: '1rem',
      boxSizing: 'border-box',
      '& .validator-info__header': {
        fontWeight: 500,
        marginTop: 0,
        margin: 0,
      },
      '& p': {
        margin: 0,
      },
      '& .detail, & .label': {
        display: 'flex',
        alignItems: 'center',
        '& span': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
      '& .copy-icon, & .question-icon': {
        marginLeft: '0.5rem',
      },
      '& .icon': {
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
    mobile: {
      '& .validator-info__header': {
        fontSize: '1.375rem',
      },
      '& .detail, & .validator-info__header': {
        paddingBottom: '0.5rem',
        borderBottom: '1px solid #E8E8E8',
      },
      '& .label': {
        paddingTop: '0.5rem',
        marginBottom: '0.2rem',
      },
    },
    desktop: {
      '& .validator-info__header': {
        fontSize: '1.5rem',
        marginBottom: '1rem',
      },
      '& .validator-info__content': {
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        gridGap: '0.5rem 0',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
