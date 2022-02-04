/// <reference types="cypress" />

describe('results feature', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays results in ranked order', () => {
    cy.get('[data-testid=results]').find('tbody').find('tr').then($tr => {
      cy.wrap($tr.find('[data-testclass=rank]'))
        .should(
          'have.text',
          Array.from(new Array($tr.length).keys()).map(x => x + 1).join('')
        )
    })
  })

  it('adds a result', () => {

    function padLeft(x: number) {
      return x < 10 ? `0${x}` : `${x}`;
    }

    const bib = `T${Math.floor(Math.random() * 10000)}`
    const name = `Thing #${Math.floor(Math.random() * 10000)}`
    const time = `${padLeft(Math.floor(Math.random() * 100))}:${padLeft(Math.floor(Math.random() * 59))}:${padLeft(Math.floor(Math.random() * 59))}`
    cy.get('[data-testid=bib]').clear().type(bib)
    cy.get('[data-testid=name]').clear().type(name)
    cy.get('[data-testid=time]').clear().type(time)
    cy.get('[data-testid=addResult]').click()
    cy.get('.results')
      .should('contain.text', bib)
      .and('contain.text', name)
      .and('contain.text', time)
  })
})
