var state = {
    endpoint: 'local.ncl.com',
    authEndpoint: "https://qa-sso.ncl.com/secureauth29",
    username: 'bgesun',
    password: 'ncl2011',
    myNcl:'My NCL',
    viewAccount:'View Account',
    ssoUrl: 'qa-sso',
    loginText: 'Log in',
    loginBtnValue: 'Log In',
    MyAccountText: "My Account",
    bge_path:'my-account',
}

describe('@percy/cypress', function () {
    describe('BGE Page', function () {

        before(function () {
            // log in only once before any of the tests run.
            // your app will likely set some sort of session cookie.
            // you'll need to know the name of the cookie(s), which you can find
            // in your Resources -> Cookies panel in the Chrome Dev Tools.
            cy.login()
          })

          beforeEach(function () {
            // before each test, we can automatically preserve the
            // 'session_id' and 'remember_token' cookies. this means they
            // will not be cleared before the NEXT test starts.
            //
            // the name of your cookies will likely be different
            // this is just a simple example
            Cypress.Cookies.preserveOnce('JSESSIONID', 'NCLUser', 'Ncl_region','NCLUserData', 'NCLUserDataSignature', 'ncl_redesign','ak_location')
          })

        it("Visits the Home Page", function () {
            
            //- visits the home page
            cy.visit(state.endpoint,{timeout:120000})
            //ScreenShot from the home page
            cy.percySnapshot('home_page')
        })

        it("My Ncl have to be visible",function(){
             //Find the login btn
             //TODO emulate the hove at My Ncl
             cy.contains('View Account', { timeout: 60000 }).click({ force: true })
             //ScreenShot from the bge page
             cy.percySnapshot('bge_page')
        })
    })
 })