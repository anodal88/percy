import '@percy/cypress';


Cypress.Commands.add('login', (userType, options = {}) => {
    // this is an example of skipping your UI and logging in programmatically

    // setup some basic types
    // and user properties
    const user = {
        username: 'bgesun',
        password: 'ncl2011',
    }
    const authEndpoint = "local.ncl.com/booking-quote/authUser"

    // create the user first in the DB
    cy.request({
        url: authEndpoint, // assuming you've exposed a seeds route
        method: 'POST',
        body: user,
    })
        //.its('body')
        .then((response) => {

            if (response.status == 200) {
                var cookiesToset = response.headers['set-cookie'] || []
                cookiesToset.forEach(cookie => {
                    if (cookie) {
                        const cookieStringArr= cookie.split(';')
                        const cookieString = cookieStringArr.length?cookieStringArr[0]:null
                        const cookieArr = cookieString?cookieString.split('='):[]
                        const name = cookieArr.length>1?cookieArr[0]:null
                        const value = cookieArr.length>1?cookieArr[1]:null
                        if (name && value) {
                            cy.clearCookie(name)
                            cy.setCookie(name, value)
                        }
                    }
                });
            } else {
                cy.log("Error authenticating user")
            }
        })
})
