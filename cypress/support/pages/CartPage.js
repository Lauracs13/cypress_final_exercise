var cartLocators = {
    placeOrderButton: '.btn-success',
    


}

class CartPage {
    placeOrderButton() { return cy.get(cartLocators.placeOrderButton) }
}
    

export default CartPage;
