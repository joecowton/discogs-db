import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render (){
     const { lowest_price } = this.props.amount
     console.log(lowest_price);
     return (
      <StripeCheckout
        name="DISCOGS"
        description={lowest_price}
        amount={lowest_price}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
          <button className="btn black">
            £{lowest_price}
          </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
