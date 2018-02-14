import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render (){
     const { release } = this.props
     console.log(release);

     return (
      <StripeCheckout
        name="DISCOGS"
        currency="gbp"
        description={release.title}
        amount={release.lowest_price * 100}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
          <button className="btn black">
            £{release.lowest_price}
          </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
