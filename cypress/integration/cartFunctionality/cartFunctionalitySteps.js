import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Header from "../../support/components/Header";
const header = new Header();
import CartPage from "../../support/pages/CartPage";
const cartPage = new CartPage();
import Homepage from "../../support/pages/Homepage";
const homepage = new Homepage();
import ProductDetails from "../../support/pages/ProductDetails";
const product = new ProductDetails();

Given('I visit the Demoblaze homepage', () => {
    cy.visit('/');
});

When('I click(ed) on a product card', () => {
    homepage.selectRandomProduct();
});

Then('I should see the details of the product', () => {
    product.productTitle().should('be.visible');
    product.productPrice().should('be.visible');
    product.productDescription().should('be.visible');

});

When('I click on Add to cart button', () => {
    product.addToCartButton().click();
});

When('I go to the Cart page', () => {
    header.cartLink().click();
});

Then('I should see the product in the cart list', () => {
    cy.get("@selectedProduct").then(name => {
        cartPage.productsList().should('contain', name);
    });
});

Given('I am in the Cart page with a product selected', () => {
    homepage.selectRandomProduct();
    product.addToCartButton().click();
    header.cartLink().click();
});

When('I click on the delete option in the line product', () => {
    cartPage.deleteOption().click();
});

Then('the product should disappear', () => {
    cy.get("@selectedProduct").then(name => {
        cartPage.productsList().should('not.contain', name);
    });

    When('I click on Place Order', () => {
        cartPage.placeOrderButton().click();
    });

    When('I complete the form', () => {
        cy.fixture('data').then(data => {
            cartPage.nameInput().invoke('val', data.name);
            cartPage.countryInput().invoke('val', data.country);
            cartPage.cityInput().invoke('val', data.city);
            cartPage.creditCardInput().invoke('val', data.creditCard);
            cartPage.monthInput().invoke('val', data.month);
            cartPage.yearInput().invoke('val', data.year);
            cartPage.purchaseButton().click();
        })
    });

    Then('I should see the confirmation of my purchase', () => {
        cy.fixture('data').then(data => {
            cartPage.confirmationPurchaseAlert().should('be.visible');
            cartPage.confirmationPurchaseAlert().should('contain', data.successPurchaseMessage);
        })
    });

});