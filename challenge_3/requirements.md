# Multistep Checkout Experience Requirements

## Basic Requirements

### Implementation

1. Single-page app
2. Use Express and Nodemon
  1. Build server in `server.js`
  2. Serve `index.html`
  3. Run server with Nodemon
3. Use React and Babel
  1. Build client app in **client** folder
  2. Place all React components in `app.jsx`
  3. Link transpiled component file from `index.html`
  4. **Do not use Webpack**
  5. Set Babel to watch for changes to `app.jsx`
4. Use MongoDB or MySQL

### Front-end application behavior

1. Homepage has `Checkout` button
2. Page has several forms:
  1. F1: Collects account creation info
    1. Name
    2. Email
    3. Password
  2. F2: Collects shipping and contact info
    1. Address
      1. Line 1
      2. Line 2
      3. City
      4. State
      5. Zone Improvement Plan code
    2. Phone number
  3. F3: Collects payment info
    1. Credit card #
    2. Expiry date
    3. CVV
    4. Billing Zone Improvement Plan code
3. Clicking `Checkout` button takes user to F1
4. `Next` button appears on F1, F2, and F3
  1. For F1 and F2, clicking `Next` button takes user to next form
  2. For F3, clicking `Next` button takes user to confirmation page
5. Confirmation page has summary of data collected in F1, F2, and F3
6. `Purchase` button appears on confirmation page
  1. Clicking `Purchase` completes process and takes user to homepage

### Back-end application behavior

1. A new record is stored to the DB each time `Checkout` is clicked
2. New data is stored to the DB each time `Next` is clicked
