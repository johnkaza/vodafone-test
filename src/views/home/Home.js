import React, { Component } from 'react';
import App from 'App';
import styled from 'styled-components';
import { getData } from './_actions';

import Header from 'views/partials/header/Header';
import Tab from 'atoms/Tab';
import Container from 'styledComponents/Container';
import StyledH1 from 'styledComponents/StyledH1';
import StyledDotButton from 'styledComponents/StyledDotButton';
import Section1 from './partials/Section1';
import Section2 from './partials/Section2';

import { colors } from 'helpers/theme';

class Home extends Component {
  state = {
    visibleSection: 'section2',
    data: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const response = await getData({});

    if (response) {
      this.setState({
        ...this.state,
        data: response.data[0],
        visibleSection: response.data[0].sections[1].id
      });
    }
  };

  changeTab(section) {
    this.setState({
      visibleSection: section
    });
  }

  render() {
    const {
      visibleSection,
      data: { description, sections }
    } = this.state;

    return (
      <App>
        <Header />
        <Container>
          <HeadingWrapper>
            <StyledH1>{description}</StyledH1>
          </HeadingWrapper>
          <TabsButtonsWrapper>
            {sections &&
              sections.map((section, key) => {
                return (
                  <StyledDotButton
                    key={key}
                    onClick={() => this.changeTab(section.id)}
                    bgColor={colors.dodgerBlue}
                    type="button"
                  >
                    Section {section.id}
                  </StyledDotButton>
                );
              })}
          </TabsButtonsWrapper>
          <TabsWrapper>
            {sections && sections[0] && (
              <Tab id={sections[0].id} currentId={visibleSection}>
                <Section1 data={sections[0]} />
              </Tab>
            )}
            {sections && sections[1] && (
              <Tab id={sections[1].id} currentId={visibleSection}>
                <Section2 data={sections[1]} />
              </Tab>
            )}
          </TabsWrapper>
        </Container>
      </App>
    );
  }
}

const HeadingWrapper = styled.div`
  text-align: center;
  margin-top: 56px;
`;

const TabsButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 48px;
`;

const TabsWrapper = styled.div`
  margin-top: 48px;
`;

export default Home;
