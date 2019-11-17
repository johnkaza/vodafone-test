import React, { Component } from 'react';
import styled from 'styled-components';

import Form from './Form';

import { colors } from 'helpers/theme';

class Section2 extends Component {
  render() {
    const {
      data: { formLabels, formText }
    } = this.props;

    return (
      <React.Fragment>
        <LeftWrapper>left wrapper</LeftWrapper>
        <RightWrapper>
          {formText && <H2>{formText}</H2>}
          <Description>
            We work with ecosystem leaders, corporations and startups worldwide. How can we help
            you?
          </Description>
          <Form formLabels={formLabels} />
        </RightWrapper>
      </React.Fragment>
    );
  }
}

const LeftWrapper = styled.div`
  display: inline-block;
  width: 50%;
`;

const RightWrapper = styled.div`
  display: inline-block;
  width: 50%;
`;

const H2 = styled.h2`
  text-align: center;
`;

const Description = styled.div`
  text-align: center;
  color: ${colors.slateGray};
  margin-bottom: 48px;
`;

export default Section2;
