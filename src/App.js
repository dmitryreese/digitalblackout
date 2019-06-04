import React, { Component } from 'react';
import styled from 'styled-components';

// components
import CityCard from './components/CityCard';
import CitiesList from './components/CitiesList';
import OmniBox from './components/OmniBox';

export const AppHeader = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin: 0px 0px 25px 0px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 550px;
  padding: 45px;
`;

class App extends Component {
  state = {
    city: 'London',
    forecast: null,
  };

  async componentDidMount() {
    const forecast = await fetch('google.com')
      .then(response => response.json())
      .catch(err => this.setState({ err }));

    this.setState({ forecast: { temperature: Math.random() } });
  }

  render() {
    const { city, forecast } = this.state;

    return (
      <Wrapper>
        <AppHeader>INCREDIBLY AWESOME WEATHER APP v7.0.0 (beta)</AppHeader>
        <OmniBox />
        <div>
          <div>Current location:</div>
          <CityCard city={city} forecast={forecast} isDefaultCity />
        </div>
        <CitiesList />
      </Wrapper>
    );
  }
}

export default App;
