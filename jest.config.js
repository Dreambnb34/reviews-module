const path = require('path');

module.exports = {
  verbose: true,
  "testURL": "http://localhost:1337/rooms/1124"
  setupTestFrameworkScriptFile: require.resolve(
    path.join(__dirname, 'jest.setup.js'),
  ),
  // ... other options ...
};
