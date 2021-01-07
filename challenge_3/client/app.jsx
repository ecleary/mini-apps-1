// import React from '../node_modules/react/index.js';
// const Component = React.Component;
// import ReactDOM from '../node_modules/react-dom/index.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPage: 'Home'
    };
    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleCreateAccount = this.handleCreateAccount.bind(this);
    this.handleEnterShippingInfo = this.handleEnterShippingInfo.bind(this);
    this.handleEnterPaymentInfo = this.handleEnterPaymentInfo.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
  };

  // componentDidMount() {
  //   this.setState({
  //     displayPage: 'Home'
  //   });
  // };

  handleCheckout() {
    this.setState({
      displayPage: 'AccountForm'
    });
  };

  handleCreateAccount() {
    this.setState({
      displayPage: 'ShippingForm'
    });
  };

  handleEnterShippingInfo() {
    this.setState({
      displayPage: 'PaymentForm'
    });
  };

  handleEnterPaymentInfo() {
    this.setState({
      displayPage: 'Confirmation'
    });
  };

  handlePurchase() {
    this.setState({
      displayPage: 'Home'
    });
  };

  render() {
    const {displayPage} = this.state;
    return (
      <div>
        <h1>Multistep 🛒 Checkout 🏠 Experience 💰</h1>
        <Home displayPage={displayPage} onCheckout={this.handleCheckout} />
        <AccountForm displayPage={displayPage} onCreateAccount={this.handleCreateAccount} />
        <ShippingForm displayPage={displayPage} onEnterShippingInfo={this.handleEnterShippingInfo} />
        <PaymentForm displayPage={displayPage} onEnterPaymentInfo={this.handleEnterPaymentInfo} />
        <Confirmation displayPage={displayPage} onPurchase={this.handlePurchase} />
      </div>
    );
  };
}

const Home = (props) => {
  const {displayPage, onCheckout} = props;
  let home;
  if (displayPage === 'Home') {
    home = (
      <div>
        <h2>Home</h2>
        <button onClick={onCheckout}>Checkout</button>
      </div>
    );
  } else {
    home = null;
  }
  return (
    <div>
      {home}
    </div>
  );
};

class AccountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    const {displayPage, onCreateAccount} = this.props;
    let accountForm;
    if (displayPage === 'AccountForm') {
      accountForm = (
        <div>
          <h2>Create Account</h2>
          <button onClick={onCreateAccount}>Next</button>
        </div>
      );
    } else {
      accountForm = null;
    }

    return (
      <div>
        {accountForm}
      </div>
    );
  };
}

class ShippingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    const {displayPage, onEnterShippingInfo} = this.props;
    let shippingForm;
    if (displayPage === 'ShippingForm') {
      shippingForm = (
        <div>
          <h2>Enter Shipping Information</h2>
          <button onClick={onEnterShippingInfo}>Next</button>
        </div>
      );
    } else {
      shippingForm = null;
    }

    return (
      <div>
        {shippingForm}
      </div>
    );
  };
}

class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    const {displayPage, onEnterPaymentInfo} = this.props;
    let paymentForm;
    if (displayPage === 'PaymentForm') {
      paymentForm = (
        <div>
          <h2>Enter Payment Information</h2>
          <button onClick={onEnterPaymentInfo}>Next</button>
        </div>
      );
    } else {
      paymentForm = null;
    }

    return (
      <div>
        {paymentForm}
      </div>
    );
  };
}

const Confirmation = (props) => {
  const {displayPage, onPurchase} = props;
  let confirmation;
  if (displayPage === 'Confirmation') {
    confirmation = (
      <div>
        <h2>Confirmation</h2>
        <button onClick={onPurchase}>Purchase</button>
      </div>
    );
  } else {
    confirmation = null;
  }
  return (
    <div>
      {confirmation}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
