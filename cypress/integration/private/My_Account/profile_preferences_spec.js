describe("Navigate to my Profile", () => {
    before(() => {
        cy.login()
    })
    beforeEach(function () {
        cy.visit('/', { timeout: 50000 })
    })

    it("Navigate to my Profile", () => {
        cy.contains('Profile', { timeout: 60000 }).click({ force: true })
        cy.percyShot("Profile")
    })

    it("Navigate to my Preferences", () => {
        cy.contains('Preferences', { timeout: 60000 }).click({ force: true })
        cy.percyShot("Preferences")
    })
})