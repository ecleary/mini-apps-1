# Connect Four Requirements

## Basic requirements

### Implementation

1. Single-page app
2. Use ReactJS for all views
  1. Build your client app inside the *client* folder
  2. Separate your React components into their own files
3. Bundle with Webpack
  1. Configure `webpack-dev` to load components into your client
  2. Set Webpack to watch for changes
  3. Set Webpack's entry point to `app.js`
4. Use Express to serve your app and handle API requests
  1. Build your Express app inside `server.js`
5. Use Nodemon to run server
6. Implement all the game logic in the client code
7. Write at least four tests to verify your end-of-game detection logic
  1. One test for horizontal wins
  2. One test for vertical wins
  3. One test for diagonal wins
  4. One test for ties
  5. More tests optional
  6. These tests may be performed on client or on server
8. Spend 30 min max on CSS

### Application behavior

1. Detect a win or tie and display an appropriate message
2. Refreshing the page should restart the game
3. Board should resemble Connect Four board
