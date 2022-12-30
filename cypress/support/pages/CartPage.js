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
    yearInput: '#year'
}

class CartPage {
    placeOrderButton() { return cy.get(cartLocators.placeOrderButton) }
    productsList() { return cy.get(cartLocators.productsList) }
    deleteOption() { return cy.get(cartLocators.deleteOption) }
}
    

export default CartPage;
