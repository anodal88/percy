import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

Cypress.Cookies.defaults({
  whitelist: ['JSESSIONID', 'NCLUser', 'NCLUserData', 'NCLUserDataSignature', 'ncl_redesign','Ncl_region','ak_location']
})

//Cypress.Cookies.debug(true)