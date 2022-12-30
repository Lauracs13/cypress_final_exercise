var productLocators = {
    productTitle: 'h2.name',
    productPrice: 'h3.price-container',
    productDescription: 'div.description-tabs',
    addToCartButton: '.btn-lg'
}

class ProductDetails {

    productTitle() { return cy.get(productLocators.productTitle) }
    productPrice() { return cy.get(productLocators.productPrice) }
    productDescription() { return cy.get(productLocators.productDescription) }
    addToCartButton() { return cy.get(productLocators.addToCartButton) }


}

export default ProductDetails;
