import React, { Component } from 'react';
import { connect } from'react-redux';

// action creators
import { addCity } from '../../store/actions';

// styled
import {
  ComponentWrapper,
  InputWrapper,
  Dropdown,
  CityField,
  CityFromSearchQuery,
} from './styled';

class OmniBox extends Component {
  state = {
    newCity: '',
    citiesFromQuery: [],
    err: null,
  };

  _timeout = null;

  handleNewCityInput = async (e) => {
    this.setState({ citiesFromQuery: [] });
    this.setState({ newCity: e.target.value });

    if (this._timeout) clearTimeout(this._timeout);

    const cities = await fetch('google.com')
      .then(res => res.json())
      .catch(err => this.setState({ err }));

    const _cities = [
      'Moscow',
      'Paris',
      'London',
      'New York',
      'Vladivostok',
    ];

    setTimeout(() => this.setCitiesFromQuery(_cities), 500);
  }

  addCity = e => {
    this.props.addCity(e.target.dataset.city);
    this.setState({ newCity: '' });
  }

  setCitiesFromQuery = cities => this.setState({ citiesFromQuery: cities });

  render() {
    const { newCity, citiesFromQuery } = this.state;

    return (
      <ComponentWrapper>
        <InputWrapper>
          <CityField placeholder="Search Cities" value={newCity} onChange={this.handleNewCityInput} />
          {
            newCity.length > 2 && (
              <Dropdown>
                {
                  citiesFromQuery.length > 0
                  ? (
                    citiesFromQuery.map(city => (
                      <CityFromSearchQuery
                        onClick={this.addCity}
                        data-city={city}
                      >
                        {city}
                      </CityFromSearchQuery>
                    ))
                  )
                  : ('Loading...')
                }
              </Dropdown>
            )
          }
        </InputWrapper>
      </ComponentWrapper>
    );
  }
}

const dispatchToProps = dispatch => ({
  addCity: cityName => dispatch(addCity(cityName)),
});

export default connect(null, dispatchToProps)(OmniBox);
