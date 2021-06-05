const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://tamzeedhossain.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://tamzeedhossain.herokuapp.com',
  'process.env.CLIENT_ID': 'EbJZVidk4HWBDYlECMm3HkSMDhGbVKtY'
}
