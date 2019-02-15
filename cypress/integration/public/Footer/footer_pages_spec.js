var pages = [
    '/about/accessible-cruising',
    '/downloads/overview',

    '/about',
    '/about/security-information',
    '/about/environmental-commitment',
    '/about/careers/overview',
    '/media-center',
    '/partners',
    '/international-offices',
    '/agent-locator',

    '/onboard-gifts',
    '/why-cruise-norwegian/cruise-shopping',
    '/why-cruise-norwegian/casino-cruise',
    '/theme-cruises',

    '/norwegian-edge',
    '/why-cruise-norwegian/cruise-accommodations/the-haven'
]
describe("CRUISING ESSENTIALS", () => {
    pages.forEach((page) => {
        it(`Naviagting to page: ${page}`, () => {
            cy.visit(page)
            cy.url().should('contain', page)
            cy.percyShot(page.replace('/', ''))
        })
    })
})