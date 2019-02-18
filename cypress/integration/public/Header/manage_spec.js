describe("Cruise Deals", () => {
    const pages = [
        '/freestyle-cruise/prepare-for-your-cruise',
        '/freestyle-cruise/getting-to-the-pier',
        '/freestyle-cruise/cruise-travel-documents',
        '/freestyle-cruise/booksafe',
        '/freestyle-cruise/solo-cruising',
        '/onboard-packages',
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