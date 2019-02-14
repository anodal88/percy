const state={
    pages:[
        '/freestyle-cruise/prepare-for-your-cruise',
        '/freestyle-cruise/getting-to-the-pier',
        '/freestyle-cruise/cruise-travel-documents',
        '/freestyle-cruise/booksafe',
        '/freestyle-cruise/solo-cruising',
        
        '/latitudes-rewards-program',
        '/latitudes-rewards-program/insider-offer',

        '/why-cruise-norwegian/cruise-packages-and-hotels',
        '/why-cruise-norwegian/whats-onboard',
        '/why-cruise-norwegian/cruise-accommodations',
        '/why-cruise-norwegian/cruise-entertainment',
        '/why-cruise-norwegian/family-cruises',

       
        '/onboard-packages',
        '/vacations',
        
        '/cruise-deals',
        '/cruise-deals/choice',
        '/cruise-deals/sail-away-rates',

        //Help Section
        '/new-to-cruising',
        '/faq',
        '/about/contact-us'

        
    ]
}
describe("freestyle-cruise / prepare-for-your-cruise", () => {
    state.pages.forEach((page)=>{
        it(page, () => {
            cy.visit(page)
            cy.url().should('contain', page)
            cy.percySnapshot()
        })   
    })
})