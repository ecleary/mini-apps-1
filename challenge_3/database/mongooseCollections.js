const {connection, Checkout} = require('./index.js');

Checkout.collection.drop();

Checkout.create({
  user: {
    name: 'Chicken Man',
    email: 'chickenman@theinternets.com',
    password: 'plaintext'
  },
  address: {
    line1: 'Planet Chickens',
    line2: 'Chickensbox X-aXis',
    city: 'Wait, you want my city too?',
    state: 'No such thing',
    zip: 'Sector 9, Zone 8, Pipe 29, Target 3'
  },
  wallet: {
    cardNumber: 'I ain\'t givin you my credit card number',
    expirationDate: 'No, I ain\'t tellin',
    CVV: 'Back off!',
    billingZip: 'I already told you, Sector 9, Zone 8, Pipe 29, Target 3'
  }
}).then((res) => {
  console.log(`Document created; res:`);
  console.log(res);
  process.exit();
}).catch(console.error);
