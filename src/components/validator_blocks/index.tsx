import React from 'react';
import classnames from 'classnames';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Legend,
  Cell,
} from 'recharts';
import { useGetStyles } from './styles';
import { ResponsiveRecharts } from '../..';

const dummyData = [
  {
    proposer: <div>forbole</div>,
    height: '123,000',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: true,
    signatures: 50,
  },
  {
    proposer: <div>forbole</div>,
    height: '123,001',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: false,
    signatures: 100,
  },
  {
    proposer: <div>stake fish</div>,
    height: '123,002',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: true,
    signatures: 86,
  },
  {
    proposer: <div>stake fish</div>,
    height: '123,002',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: true,
    signatures: 86,
  },
  {
    proposer: <div>stake fish</div>,
    height: '123,002',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: true,
    signatures: 86,
  },
  {
    proposer: <div>stake fish</div>,
    height: '123,002',
    votingPower: '78%',
    gas: '1,500,794 / 3,000,000',
    voted: true,
    signatures: 86,
  },
];

const ValidatorBlocks = (props:any) => {
  const { classes } = useGetStyles();
  const {
    className,
    title = 'Missed Blocks',
    description = '10/10000 (19h)',
    labels = {
      proposer: 'Proposer',
      height: 'Height',
      votingPower: 'Voting Power',
      gas: 'Gas (used/wanted)',
      vote: true,
      missed: 'Missed',
      voted: 'Voted',
    },
    legend = {
      missed: '#FD3B4C',
      voted: '#1EC4904D',
    },
    recharts = {
      gridAspect: 1.5,
    },
    data = dummyData,
  } = props;

  return (
    <div
      className={classnames(classes.root, className, 'big-dipper', 'validator-blocks')}
    >
      <h3 className={classnames('validator-blocks__title')}>{title}</h3>
      <p className={classnames('validator-blocks__description')}>{description}</p>
      <div className={classnames('validator-blocks__bar-chart')}>
        <ResponsiveRecharts aspect={recharts?.gridAspect ?? 1.5}>
          <BarChart
            layout="vertical"
            barCategoryGap={5}
            data={data}
          >
            <XAxis type="number" orientation="top" tickLine={false} />
            <YAxis dataKey="name" type="category" hide />
            <Tooltip />
            <Legend
              verticalAlign="top"
              align="left"
              iconSize={16}
              payload={[
                {
                  value: labels.missed, type: 'square', id: 'missed', color: legend.missed,
                },
                {
                  value: labels.voted, type: 'square', id: 'voted', color: legend.voted,
                },
              ]}
            />
            <Bar dataKey="signatures">
              {
              data.map((entry:any, index:any) => {
                return (
                  <Cell key={index} fill={entry.voted ? legend.voted : legend.missed} />
                );
              })
            }
            </Bar>
          </BarChart>
        </ResponsiveRecharts>
      </div>
    </div>
  );
};

export default ValidatorBlocks;
