
describe("Why Cruise Norwegian / The Freestyle Experience", () => {

    it("The free style experience", () => {
        cy.visit('/why-cruise-norwegian', { timeout: 40000 })
        cy.url().should('contain', '/why-cruise-norwegian')
        cy.percyShot('why-cruise-norwegian_with_modal')
    })

    it("Close the modal and take picture", () => {
        cy.get('section#bootstrap_modal').as('modal')
        cy.get('@modal',{timeout:10000}).should('be.visible').then(($modal) => {
            $modal.find('a[data-dismiss="modal"]').click()
            cy.percyShot('norwegian_without_modal')
        })
    })

})