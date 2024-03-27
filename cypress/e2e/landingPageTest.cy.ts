import { contains } from "cypress/types/jquery"
import { Cookie } from "./utils/cookie"


before(()=>{
  Cookie.setDesktopCookies()
})

describe('template spec', () => {
  it('passes', () => {

    cy.visit('/')
    cy.get('[data-gui="search-cars-button"]').click()
    cy.get('[data-testid="search-desktop-result-count"]').should('contain',' cars found')

  })
})