var cartLocators = {
    placeOrderButton: '.btn-success',
    productsList: '#tbodyid',
    deleteOption: 'a:contains("Delete")',
    confirmationPurchaseAlert: '.sweet-alert',
    nameInput: '#name',
    countryInput: '#country',
    cityInput: '#city',
    creditCardInput: '#card',
    monthInput: '#month',
    yearInput: '#year',
    purchaseButton: 'button:contains("Purchase")'
}

class CartPage {
    placeOrderButton() { return cy.get(cartLocators.placeOrderButton) }
    productsList() { return cy.get(cartLocators.productsList) }
    deleteOption() { return cy.get(cartLocators.deleteOption) }
    nameInput() { return cy.get(cartLocators.nameInput) }
    countryInput() { return cy.get(cartLocators.countryInput) }
    cityInput() { return cy.get(cartLocators.cityInput) }
    creditCardInput() { return cy.get(cartLocators.creditCardInput) }
    monthInput() { return cy.get(cartLocators.monthInput) }
    yearInput() { return cy.get(cartLocators.yearInput) }
    purchaseButton() { return cy.get(cartLocators.purchaseButton) }    
    confirmationPurchaseAlert() { return cy.get(cartLocators.confirmationPurchaseAlert) }    

}
    

export default CartPage;
