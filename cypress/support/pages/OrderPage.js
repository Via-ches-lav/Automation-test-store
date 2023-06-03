class OrderPage {
    visit() {
        cy.visit('https://automationteststore.com/index.php?rt=account/account')
    }

    goToTheHairCareTab() {
        return cy.get('.nav-pills > li').eq(5).click()
    }

    goToThePruduct() {
        return cy.get('[title="Men+Care Clean Comfort Deodorant"]').click()
    }

    addProductToTheCart() {
        return cy.get('.cart').click()
    }

    checkCheckoutOrderUrl() {
        return cy.url().should('contain', '?rt=checkout/cart')
    }

    pressCheckoutButton() {
        return cy.get('#cart_checkout1').click()
    }

    checkOrderConfirmationUrl() {
        return cy.url().should('contain', '?rt=checkout/confirm')
    }

    pressConfirmOrder() {
        return cy.get('#checkout_btn').click()
    }

    checkSuccessOrderPageUrl() {
        return cy.url().should('contain', '?rt=checkout/success')
    }

    pressContinueButtonOnSuccessPage() {
        return cy.get('[title="Continue"]').click()
    }

    checkMainPageUrl() {
        return cy.url().should('eq', 'https://automationteststore.com/')
    }
}

export default new OrderPage()
