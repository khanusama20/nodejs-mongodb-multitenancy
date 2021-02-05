const { createNewDBConnection } = require('./CreateConnection');

const MERCHANT_ONE_URL = 'mongodb://127.0.0.1:27017/';
// const MERCHANT_TWO_URL = 'mongodb://127.0.0.1:27017/merchant_2';

let merchantOneConnection = createNewDBConnection(MERCHANT_ONE_URL);
// let merchantTwoConnection = createNewDBConnection(MERCHANT_TWO_URL);

module.exports = {
  merchantOneConnection: merchantOneConnection,
  // merchantTwoConnection: merchantTwoConnection
}