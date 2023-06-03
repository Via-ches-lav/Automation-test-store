export function findSpecificProduct() {
    cy.get('#filter_keyword').type('E{enter}')
    for (let i = 0; i < 5; i++) {
        cy.get('body').then(ArmaniEaudeToiletteSpray => {
            if (ArmaniEaudeToiletteSpray.find('[title="Armani Eau de Toilette Spray "]').length > 0) {
                cy.get('[title="Armani Eau de Toilette Spray "]').click()
            } else if (ArmaniEaudeToiletteSpray.find('.pagination').length > 0) {
                cy.get('.pagination > li').contains('>').click()
            } else {
                cy.url().should('include', 'product_id=81')
            }
        })
    }
}
