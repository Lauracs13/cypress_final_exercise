import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Homepage from "../../support/pages/DemoblazeHomepage";
const homepage = new Homepage();

Given('I visit the Demoblaze homepage', () => {
  cy.visit('/');
});

When('I select the first image of the carousel', () => {
  homepage.carouselFirstIndicator().click();
});

When('I click on the previous arrow', () => {
  homepage.previousArrow().click();
  homepage.waitUntilFirstImageBecomesInactive();
});

Then('I should see the last image of the carousel', () => {
  homepage.lastImageOfTheCarousel().should('have.class', 'active');
});

When('I select the last image of the carousel', () => {
  homepage.carouselThirdIndicator().click();
  homepage.waitUntilLastImageBecomesActive();
});

When('I click on the next arrow', () => {
  homepage.nextArrow().click();  
  homepage.waitUntilLastImageBecomesInactive();
});

Then('I should see the first image of the carousel', () => {
  homepage.firstImageOfTheCarousel().should('have.class', 'active');
});

When('I select the second indicator of the carousel', () => {
  homepage.carouselSecondIndicator().click();  
  });

Then('I should see the second image of the carousel', () => {
  homepage.secondImageOfTheCarousel().should('have.class', 'active');
});
