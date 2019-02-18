
describe("SPECIALS & THEMED CRUISING", () => {
    var pages = [
        '/onboard-gifts',
        '/why-cruise-norwegian/cruise-shopping',
        '/why-cruise-norwegian/casino-cruise',
        '/theme-cruises',
    ]
    it("Navigate to home page", () => {
        cy.visit("/")
    })
    pages.forEach((page) => {
        it(`Naviagting to page: ${page}`, () => {
            cy.visit(page)
            cy.url().should('contains', page)
            cy.percyShot(page.replace('/', '_'))
        })
    })
})