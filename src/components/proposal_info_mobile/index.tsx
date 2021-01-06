import React from 'react';
import classnames from 'classnames';
import {
  Table,
  TableBody,
} from '@material-ui/core';
import { ProposalInfoProps } from './types';
import { useGetStyles } from './styles';
import {
  Row,
  Button,
  Status,
} from './components';

const ProposalInfoDesktop = (props: ProposalInfoProps) => {
  const {
    data, className, label,
  } = props;

  const { classes } = useGetStyles(data.status.current);
  return (
    <div className={classnames(classes.root, className, 'big-dipper', 'proposalInfoMobile')}>

      <Table className={classnames('table')}>
        <TableBody>
          <Row
            label={label.id}
            display={(
              <div>
                #
                {data.id}
              </div>
            )}
            isAlignRight
          />
          <Row
            label={label.proposer}
            display={(
              <div className={classnames('proposer')}>
                {data.proposer}
              </div>
            )}
            isAlignRight
          />
          <Row
            label={label.type}
            display={data.type}
            isAlignRight
          />
        </TableBody>
      </Table>
      <Table className={classnames('table')}>
        <TableBody>
          <Row
            classNameLabel={classnames('descriptionLabel')}
            classNameDisplay={classnames('descriptionDisplay')}
            label={label.description}
            display={data.description}
          />
        </TableBody>
      </Table>

      <Table className={classnames('table')}>
        <TableBody>
          <Row
            className="statusRow"
            label={label.status}
            display={(
              <Status display={data.status.display} />
            )}
            isAlignRight
          />
          <Row
            label={label.deposit}
            display={data.deposit}
            isAlignRight
          />
          <Row
            label={label.submittedTime}
            display={data.submittedTime}
            isAlignRight
          />
          <Row
            label={label.depositEndTime}
            display={data.depositEndTime}
            isAlignRight
          />
          <Row
            label={label.votingStartTime}
            display={data.votingStartTime}
            isAlignRight
          />
          <Row
            label={label.votingEndTime}
            display={(
              <div>
                {data.votingEndTime}
                <div className={classnames('days')}>
                  {data.duration}
                </div>
              </div>
            )}
            isAlignRight
          />
        </TableBody>
      </Table>
      <Button display={data.status.display} />

    </div>
  );
};

export default ProposalInfoDesktop;
