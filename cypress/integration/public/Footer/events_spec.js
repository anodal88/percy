describe("Footer / Events", () => {
    it("Navigate to home page", () => {
        cy.visit("/")
    })
    it("Meetings & Incentives", () => {
        cy.contains('Meetings & Incentives').click()
        cy.closeModalIfExist('#bootstrap_modal')
        cy.percyShot("footer_events")
    })
})