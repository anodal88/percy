
describe("Why Cruise Norwegian / The Freestyle Experience", () => {
    it("Visit Home Page",() => {
        cy.visit("/")
    })

    it("The free style experience", () => {
        cy.get('.header_navigation a[href="/why-cruise-norwegian"]').click({force:true})
        cy.url().should('contain', '/why-cruise-norwegian')
        cy.percyShot('why_cruise_norwegian_with_modal')
    })

    it("Close the modal if exist and take picture", () => {
       
        cy.get('section#bootstrap_modal').as('modal')
        cy.get('@modal', { timeout: 10000 }).should('be.visible').then(($modal) => {
            $modal.find('a[data-dismiss="modal"]').click()
            cy.wait(1000)
            cy.percyShot('norwegian_without_modal')
        })
    })

})