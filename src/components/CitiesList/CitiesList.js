import React, { Component } from 'react';
import { connect } from'react-redux';

// components
import CityCard from '../CityCard';

// styled
import {
  Wrapper
} from './styled';

class CitiesList extends Component {
  render() {
    const { cities } = this.props;

    return (
      <Wrapper>
        {
          cities.length > 0 && (
            <>
              <div>Your cities:</div>
              <div>
                {
                  cities.map(city => {
                    return <CityCard key={city} city={city} forecast={{ temperature: Math.random() }} />
                  })
                }
              </div>
            </>
          )
        }
      </Wrapper>
    );
  }
}

const stateToProps = ({ cities }) => ({
  cities,
});

export default connect(stateToProps)(CitiesList);
