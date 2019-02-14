
describe("Why Cruise Norwegian / Dining", () => {

    it("Visist Dining page", () => {
        cy.visit('/why-cruise-norwegian/cruise-dining')
        cy.url().should('contain', 'cruise-dining')
        cy.percySnapshot()
    })

    it("Verify Newsletters /Spoecial offers modal", () => {
        cy.checkVisibleModal('a[href*="ncl_inside_scoop"]', 'section#bootstrap_modal')
    })


    it("Contact to receive calls", () => {
        cy.checkVisibleModal('a[href*="help/leads"]', 'section#bootstrap_modal')
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