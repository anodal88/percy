import '@percy/cypress';
import { environment } from './../../environment';
import * as helper from './../utils/helpers'

Cypress.Commands.add('login', (userType, options = {}) => {
    const user = {
        username: 'bgesun',
        password: 'ncl2011',
    }
    cy.request({
        url: "/booking-quote/authUser",//this route will use the baseUrl on cypress.json config file
        method: 'POST',
        body: environment.auth,
    })
        .then((response) => {
            if (response.status == 200) {
                cy.log("User Authenticated successfully!!")
            } else {
                cy.log("Error authenticating user")
            }
        })
})

//Take a Percy snapshot conditionally by the environment
Cypress.Commands.add('percySnapshot', (picture_name = '', options = {}) => {
    if (environment.percyEnabled) {
        cy.percySnapshot(picture_name || helper.getGuid())
    }else{
        cy.log(`Screenshot not taken, because environment.percyEnabled is disabled!!`)
    }
})

//Open a modal take picture and close it again
Cypress.Commands.add('checkVisibleModal', (trigger = '', modalSelector = '', options = {}) => {
    cy.get(trigger).then((link) => {
        link.click()
        if (modalSelector) {
            cy.get(modalSelector).as('modal')
            cy.get('@modal').should('be.visible').then(($modal) => {
                cy.percySnapshot()
                $modal.find('a[data-dismiss="modal"]').click()
            })
        }
    })
})