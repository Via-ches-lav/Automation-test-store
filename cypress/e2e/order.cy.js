import homePage from '../support/pages/HomePage'
import loginPage from '../support/pages/LoginPage'
import OrderPage from '../support/pages/OrderPage'
import user from '../fixtures/user.json'
import { findSpecificProduct } from '../support/helper.js'

it('Product can be found', () => {
    homePage.visit()
    homePage.getLoginOrRegisterButton().click()
    loginPage.submitLoginForm(user.username, user.password)
    findSpecificProduct()
    OrderPage.addProductToTheCart()
    OrderPage.checkCheckoutOrderUrl()
    OrderPage.pressCheckoutButton()
    OrderPage.checkOrderConfirmationUrl()
    OrderPage.pressConfirmOrder()
    OrderPage.checkSuccessOrderPageUrl()
    OrderPage.pressContinueButtonOnSuccessPage()
    OrderPage.checkMainPageUrl()
})
