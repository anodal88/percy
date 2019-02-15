describe("Footer / Events",()=>{
    it("Meetings & Incentives",()=>{
        cy.visit("/events",{timeout:50000})
        cy.get('#bootstrap_modal').as('modal')
        cy.get('@modal').should('be.visible')
       .then(($modal)=>{
           $modal.find('a[data-dismiss="modal"]').click()
        })
        cy.percyShot()
    })
})