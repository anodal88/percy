
describe("Why Cruise Norwegian / Dining", () => {

    it("Navigate to the home page", () => {
        cy.visit("/")
    })

    it("Visist Dining page", () => {
        cy.get('.header_navigation a[href="/why-cruise-norwegian/cruise-dining"]')
            .click({ force: true })
        cy.url().should('contain', 'cruise-dining')
        cy.percyShot('cruise-dining')
    })


    it("Check all the tabs", () => {
        cy.contains('SPECIALTY DINING').then(() => {
            cy.log(cy.get('#f2m1 .submenu>li').length)
            cy.get('#f2m1 .submenu>li').each(($el, index, $list) => {
                cy.wrap($el).click()
            })
        })
    })

})