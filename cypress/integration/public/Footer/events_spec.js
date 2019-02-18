describe("Footer / Events", () => {
    it("Navigate to home page", () => {
        cy.visit("/")
    })
    it("Meetings & Incentives", () => {
        cy.contains('Meetings & Incentives').click()
        cy.percyShot("footer_events")
    })
})