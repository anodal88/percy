describe("Cruise Deals", () => {
    const pages = [
        '/why-cruise-norwegian/whats-onboard',
        '/vacations',
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