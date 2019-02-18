describe("Cruise Deals", () => {
    const pages = [
        '/why-cruise-norwegian/cruise-packages-and-hotels',
        '/why-cruise-norwegian/cruise-accommodations',
        '/why-cruise-norwegian/cruise-entertainment',
        '/why-cruise-norwegian/family-cruises',
        '/latitudes-rewards-program',
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