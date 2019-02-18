describe("Footer  /CRUISING ESSENTIALS", () => {
    it("Go to home page", () => { cy.visit('/') })

    it("Accessible cruising", () => {
        cy.get('footer a[href="/about/accessible-cruising"]').click()
        cy.url().should('contains', '/accessible-cruising')
        cy.percyShot("accessible_cruising")
    })

    it("Downloads overview", () => {
        cy.get('footer a[href="/downloads/overview"]').click()
        cy.url().should('contains', 'downloads')
        cy.percyShot("downloads_overview")
    })
})