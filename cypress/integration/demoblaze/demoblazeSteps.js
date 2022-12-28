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
