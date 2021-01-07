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

    let title;
    if (displayPage === 'Home') {
      title = <h1>🛒 Multistep Checkout Experience</h1>;
    } else if (displayPage === 'AccountForm') {
      title = <h1>Multistep 💻 Checkout Experience</h1>;
    } else if (displayPage === 'ShippingForm') {
      title = <h1>Multistep Checkout 🏠 Experience</h1>;
    } else if (displayPage === 'PaymentForm') {
      title = <h1>Multistep Checkout Experience 💰</h1>;
    } else if (displayPage === 'Confirmation') {
      title = <h1>🛒 Multistep 💻 Checkout 🏠 Experience 💰</h1>;
    }

    return (
      <div>
        {title}
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
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleCreateAccount = this.handleCreateAccount.bind(this);
  };

  handleInput(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleCreateAccount(event) {
    event.preventDefault();
    const {onCreateAccount} = this.props;
    onCreateAccount();
  };

  render() {
    const {displayPage, onCreateAccount} = this.props;
    const {name, email, password} = this.state;
    let accountForm;
    if (displayPage === 'AccountForm') {
      accountForm = (
        <div>
          <h2>Create Account</h2>
          {/* <button onClick={onCreateAccount}>Next</button> */}
          <form onSubmit={this.handleCreateAccount}>
            <label>
              Name
              <br />
              <input type="text" name="name" value={name} onChange={this.handleInput} placeholder="鈴木太郎" />
            </label>
            <br />
            <label>
              Email
              <br />
              <input type="text" name="email" value={email} onChange={this.handleInput} placeholder="example@email.com" />
            </label>
            <br />
            <label>
              Password
              <br />
              <input type="password" name="password" value={password} onChange={this.handleInput} placeholder="Secret" />
            </label>
            <br />
            <input type="submit" value="Next" />
          </form>
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
    this.state = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmitShippingInfo = this.handleSubmitShippingInfo.bind(this);
  };

  handleInput(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmitShippingInfo(event) {
    event.preventDefault();
    const {onEnterShippingInfo} = this.props;
    onEnterShippingInfo();
  };

  render() {
    const {displayPage, onEnterShippingInfo} = this.props;
    const {line1, line2, city, state, zip} = this.state;
    let shippingForm;
    if (displayPage === 'ShippingForm') {
      shippingForm = (
        <div>
          <h2>Enter Shipping Information</h2>
          <form onSubmit={this.handleSubmitShippingInfo}>
            <label>
              Address line 1
              <br />
              <input type="text" name="line1" value={line1} onChange={this.handleInput} placeholder="123 Named St" />
            </label>
            <br />
            <label>
              Address line 2
              <br />
              <input type="text" name="line2" value={line2} onChange={this.handleInput} placeholder="Apt 123" />
            </label>
            <br />
            <label>
              City
              <br />
              <input type="text" name="city" value={city} onChange={this.handleInput} placeholder="Town" />
            </label>
            <br />
            <label>
              State
              <br />
              <input type="text" name="state" value={state} onChange={this.handleInput} placeholder="ST" />
            </label>
            <br />
            <label>
              ZIP
              <br />
              <input type="text" name="zip" value={zip} onChange={this.handleInput} placeholder="Zone Improvement Plan" />
            </label>
            <br />
            <input type="submit" value="Next" />
          </form>
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
