// import React from '../node_modules/react/index.js';
// const Component = React.Component;
// import ReactDOM from '../node_modules/react-dom/index.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPage: 'Home',
      userId: '',
      checkoutData: []
    };
    this.getData = this.getData.bind(this);
    this.postData = this.postData.bind(this);
    this.patchData = this.patchData.bind(this);
    this.updateDisplayPage = this.updateDisplayPage.bind(this);
    this.updateUserId = this.updateUserId.bind(this);
    this.updateCheckoutData = this.updateCheckoutData.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleCreateAccount = this.handleCreateAccount.bind(this);
    this.handleEnterShippingInfo = this.handleEnterShippingInfo.bind(this);
    this.handleEnterPaymentInfo = this.handleEnterPaymentInfo.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
  };

  componentDidMount() {
    this.setState({
      displayPage: 'Home'
    });
  };

  getData(id, callback) {
    $.ajax({
      url: `http://localhost:3000/data/${id}`,
      method: 'GET',
      success: (data) => {
        callback(null, data);
      },
      error: (err) => {
        callback(err);
      }
    });
  };

  postData(type, data, callback) {
    $.ajax({
      url: `http://localhost:3000/data?type=${type}`,
      method: 'POST',
      data: data,
      success: (data) => {
        callback(null, data);
      },
      error: (err) => {
        callback(err);
      }
    });
  };

  patchData(id, type, data, callback) {
    $.ajax({
      url: `http://localhost:3000/data/${id}?type=${type}`,
      method: 'PATCH',
      data: data,
      success: (data) => {
        callback(null, data);
      },
      error: (err) => {
        callback(err);
      }
    });
  };

  updateDisplayPage(displayPage) {
    this.setState({displayPage});
  };

  updateUserId(userId) {
    this.setState({userId});
  };

  updateCheckoutData(checkoutData) {
    this.setState({checkoutData});
  };

  handleCheckout() {
    this.setState({
      displayPage: 'AccountForm'
    });
  };

  handleCreateAccount(data) {
      this.postData('user', data, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const {_id} = data;
        this.updateDisplayPage('ShippingForm');
        this.updateUserId(_id);
      }
    });
  };

  handleEnterShippingInfo(data) {
    const {userId} = this.state;
    this.patchData(userId, 'address', data, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        this.updateDisplayPage('PaymentForm');
      }
    });
  };

  handleEnterPaymentInfo(data) {
    const {userId} = this.state;
    this.patchData(userId, 'wallet', data, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        this.getData(userId, (err, data) => {
          if (err) {
            console.error(err);
          } else {
            this.updateCheckoutData(data);
            this.updateDisplayPage('Confirmation');
          }
        });
      }
    });
  };

  handlePurchase() {
    this.setState({
      displayPage: 'Home',
      userId: '',
      checkoutData: []
    });
  };

  render() {
    const {displayPage, checkoutData} = this.state;
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
        <Confirmation displayPage={displayPage} checkoutData={checkoutData} onPurchase={this.handlePurchase} />
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
    const data = this.state;
    onCreateAccount(data);
  };

  render() {
    const {displayPage, onCreateAccount} = this.props;
    const {name, email, password} = this.state;
    let accountForm;
    if (displayPage === 'AccountForm') {
      accountForm = (
        <div>
          <h2>Create Account</h2>
          <form onSubmit={this.handleCreateAccount}>
            <label>
              Name
              <br />
              <input type="text" name="name" value={name} onChange={this.handleInput} placeholder="First Last" />
            </label>
            <br />
            <br />
            <label>
              Email
              <br />
              <input type="text" name="email" value={email} onChange={this.handleInput} placeholder="example@email.com" />
            </label>
            <br />
            <br />
            <label>
              Password
              <br />
              <input type="password" name="password" value={password} onChange={this.handleInput} placeholder="Secret" />
            </label>
            <br />
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
    const data = this.state;
    onEnterShippingInfo(data);
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
            <br />
            <label>
              Address line 2
              <br />
              <input type="text" name="line2" value={line2} onChange={this.handleInput} placeholder="Apt 123" />
            </label>
            <br />
            <br />
            <label>
              City
              <br />
              <input type="text" name="city" value={city} onChange={this.handleInput} placeholder="Town" />
            </label>
            <br />
            <br />
            <label>
              State
              <br />
              <input type="text" name="state" value={state} onChange={this.handleInput} placeholder="ST" />
            </label>
            <br />
            <br />
            <label>
              ZIP code
              <br />
              <input type="text" name="zip" value={zip} onChange={this.handleInput} placeholder="Zone Improvement Plan" />
            </label>
            <br />
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
    this.state = {
      cardNumber: '',
      expirationDate: '',
      CVV: '',
      billingZip: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmitPaymentInfo = this.handleSubmitPaymentInfo.bind(this);
  };

  handleInput(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmitPaymentInfo(event) {
    event.preventDefault();
    const {onEnterPaymentInfo} = this.props;
    const data = this.state;
    onEnterPaymentInfo(data);
  };

  render() {
    const {displayPage, onEnterPaymentInfo} = this.props;
    const {cardNumber, expirationDate, CVV, billingZip} = this.state;
    let paymentForm;
    if (displayPage === 'PaymentForm') {
      paymentForm = (
        <div>
          <h2>Enter Shipping Information</h2>
          <form onSubmit={this.handleSubmitPaymentInfo}>
            <label>
              Credit card number
              <br />
              <input type="text" name="cardNumber" value={cardNumber} onChange={this.handleInput} placeholder="1234 5678 9012 3456" />
            </label>
            <br />
            <br />
            <label>
              Expiration date
              <br />
              <input type="text" name="expirationDate" value={expirationDate} onChange={this.handleInput} placeholder="01 23" />
            </label>
            <br />
            <br />
            <label>
              CVV
              <br />
              <input type="text" name="CVV" value={CVV} onChange={this.handleInput} placeholder="123" />
            </label>
            <br />
            <br />
            <label>
              Billing ZIP code
              <br />
              <input type="text" name="billingZip" value={billingZip} onChange={this.handleInput} placeholder="Zone Improvement Plan" />
            </label>
            <br />
            <br />
            <input type="submit" value="Next" />
          </form>
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
  const {displayPage, checkoutData, onPurchase} = props;
  let confirmation;
  if (displayPage === 'Confirmation') {
    const {user, address, wallet} = checkoutData;
    const {name, email} = user;
    const {line1, line2, city, state, zip} = address;
    const {cardNumber, expirationDate, CVV, billingZip} = wallet;
    confirmation = (
      <div>
        <h2>Confirmation</h2>
        <table>
          <tbody>
            <tr>
              <td colSpan="2">Account Information</td>
            </tr>
            <tr>
              <td>Name:</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>••••</td>
            </tr>
            <tr>
              <td colSpan="2">Shipping Information</td>
            </tr>
            <tr>
              <td>Address line 1:</td>
              <td>{line1}</td>
            </tr>
            <tr>
            <td>Address line 2:</td>
              <td>{line2}</td>
            </tr>
            <tr>
              <td>City:</td>
              <td>{city}</td>
            </tr>
            <tr>
              <td>State:</td>
              <td>{state}</td>
            </tr>
            <tr>
              <td>ZIP code:</td>
              <td>{zip}</td>
            </tr>
            <tr>
              <td colSpan="2">Payment Information</td>
            </tr>
            <tr>
              <td>Credit card number:</td>
              <td>{cardNumber}</td>
            </tr>
            <tr>
              <td>Expiration date:</td>
              <td>{expirationDate}</td>
            </tr>
            <tr>
              <td>CVV:</td>
              <td>{CVV}</td>
            </tr>
            <tr>
              <td>Billing ZIP code:</td>
              <td>{billingZip}</td>
            </tr>
          </tbody>
        </table>
        <br />
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
