describe("OUR COMPANY", () => {
    it("Navigate to home page",() => {
        cy.visit("/")
    })
    const pages = [
        '/about',
        '/about/security-information',
        '/about/environmental-commitment',
        '/about/careers/overview',
        '/media-center',
        '/partners',
        '/international-offices',
        '/agent-locator',
    ]
    pages.forEach(page => {
        it(`Navigating to page: ${page}`, () => {
            cy.get('footer a[href="' + page + '"]').click()
            cy.url().should('contains', page)
            cy.percyShot(page.replace('/','_'))
        })
    })

})