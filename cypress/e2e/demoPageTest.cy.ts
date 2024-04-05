import { contains } from "cypress/types/jquery"
import { Cookie } from "./utils/cookie"


before(()=>{
  Cookie.setCookies()
})

describe('Demo  Test', () => {
  it('Demo test', () => {

    cy.visit('')
    // cy.get('[data-testid="cookie-policy-manage-dialog-accept-button"]').should('have.text','Allow all cookiess')
    // cy.get('[data-testid="cookie-policy-manage-dialog-accept-button"]').click()
    cy.get('#loginbutton').should('be.visible')
  })
})

