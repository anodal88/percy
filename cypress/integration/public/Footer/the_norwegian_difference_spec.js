describe("THE NORWEGIAN DIFFERENCE", () => {
    const pages = [
        '/norwegian-edge',
        '/why-cruise-norwegian/cruise-accommodations/the-haven'
    ]
    it("Navigate to home page",() => {
        cy.visit("/")
    })

    pages.forEach(page => {
        it(`navigating to page: ${page}`, () => {
            cy.get('a[href="' + page + '"]').click()
            cy.url().should('contains', page)
            cy.percyShot(page.replace('/', '_'))
        })
    })
})