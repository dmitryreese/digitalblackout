import React, { Component } from 'react';
import { connect } from 'react-redux';

// action creators
import { removeCity } from '../../store/actions';

// styled
import {
  Wrapper,
  WrapperInfo,
  Paragraph,
  CardDetails,
  RemoveCity,
} from './styled';

class CityCard extends Component {
  state = {
    details: null,
  };

  removeCity = e => this.props.removeCity(this.props.city);

  handleDetailsToggle = e => {
    setTimeout(() => this.setState({ details: { weather: 'Snowing' } }), 1000);
  }

  render() {
    const { city, forecast } = this.props;
    const { details } = this.state;

    return (
      <Wrapper>
        <WrapperInfo>
          <Paragraph>{`Weather in ${city}:`}</Paragraph>

          {
            forecast
            ? (
              <>
                <Paragraph>{`Current temperature is: ${forecast.temperature}`}</Paragraph>
                <CardDetails onToggle={this.handleDetailsToggle}>
                  <summary>Details</summary>
                  {
                    details
                    ? (
                      <>
                        Weather details for {city}: {details.weather}
                      </>
                    )
                    : ('Loading...')
                  }
                </CardDetails>
              </>
            )
            : (<Paragraph>Loading...</Paragraph>)
          }
        </WrapperInfo>

        {
          !this.props.isDefaultCity && (
            <RemoveCity onClick={this.removeCity}>Remove City</RemoveCity>
          )
        }
      </Wrapper>
    );
  }
}

const dispatchToProps = dispatch => ({
  removeCity: cityName => dispatch(removeCity(cityName)),
});

export default connect(null, dispatchToProps)(CityCard);
