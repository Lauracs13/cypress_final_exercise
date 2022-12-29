import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Header from "../../support/components/Header";
const header = new Header();
import CartPage from "../../support/pages/CartPage";
const cartPage = new CartPage();
import Homepage from "../../support/pages/Homepage";
const homepage = new Homepage();

Given('I visit the Demoblaze homepage', () => {
  cy.visit('/');
});

When('I click on the Home link', () => {
  header.homeLink().click();
});

Then('a carousel should be displayed', () => {
  homepage.carousel().should('be.visible');
});

Then('a categories list should be displayed', () => {
  homepage.categoriesList().should('be.visible');
});

When('I click on the Contact link', () => {
  header.contactLink().click();
});

Then('I should see a form requesting my contact information', () => {
  header.contactModal().should('be.visible');
  header.emailInput().should('be.visible');
  header.nameInput().should('be.visible');
  header.messageInput().should('be.visible');
});

When('I click on the About us link', () => {
  header.aboutUsLink().click();
});

Then('a video should appear with the option to play it', () => {
  header.videoModal().should('be.visible');
  header.playButton().should('be.visible');
});

When('I click on the Cart link', () => {
  header.cartLink().click();
});

Then('I should see an option to place an order', () => {
  cartPage.placeOrderButton().should('be.visible');
});

When('I click on the Log in link', () => {
  header.loginLink().click();
});

Then('I should see the log in form', () => {
  header.loginUsernameInput().should('be.visible');
  header.loginPasswordInput().should('be.visible');
  header.submitButton().should('be.visible');
});

When('I click on the Sign up link', () => {
  header.signUpLink().click();
});

Then('I should see the sign up form', () => {
  header.signUsername().should('be.visible');
  header.signPassword().should('be.visible');
  header.submitButton().should('be.visible');
});