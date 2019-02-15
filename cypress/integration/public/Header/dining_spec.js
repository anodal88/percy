
describe("Why Cruise Norwegian / Dining", () => {

    it("Visist Dining page", () => {
        cy.visit('/why-cruise-norwegian/cruise-dining')
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