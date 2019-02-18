describe("Cruise Deals", () => {
    const pages = [
        '/cruise-deals',
        '/cruise-deals/choice',
        '/cruise-deals/sail-away-rates',
        '/latitudes-rewards-program/insider-offer',
    ]
    
    it("visit home page", () => { cy.visit("/") })

    pages.forEach((page) => {

        it(`Navigating to page : ${page}`, () => {
            cy.get('nav a[href="' + page + '"]').click({ force: true })
            cy.url().should('contains', page)
            cy.percyShot(page.replace('/', '_'))
        })
    })
})