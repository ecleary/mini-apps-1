// import React from '../node_modules/react/index.js';
// const Component = React.Component;
// import ReactDOM from '../node_modules/react-dom/index.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPage: 'Home'
    };
  };

  render() {
    return (
      <div>
        <Home />
        <AccountForm />
        <ShippingForm />
        <PaymentForm />
        <Confirmation />
      </div>
    );
  };
}

const Home = (props) => {
  return (
    <div>Hello, Cheeseplanet</div>
  );
};

class AccountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <div></div>
    );
  };
}

class ShippingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <div></div>
    );
  };
}

class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <div></div>
    );
  };
}

const Confirmation = (props) => {
  return (
    <div></div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
