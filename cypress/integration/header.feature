Feature: Demoblaze header links functionality

  As a user
  I want to easily navigate through the different header links

  Background:
    Given I visit the Demoblaze homepage

  @regression @goToHomepage @navigation
  Scenario: go to the homepage
    When I click on the Home link
    Then a carousel should be displayed
    And a categories list should be displayed

  @regression @smoke @goToContact @navigation
  Scenario: get the Contact form
    When I click on the Contact link
    Then I should see a form requesting my contact information

  @regression @goToAboutUS @navigation
  Scenario: interact with the About us link
    When I click on the About us link
    Then a video should appear with the option to play it

  @regression @smoke @goToCart @navigation
  Scenario: interact with the Cart link
    When I click on the Cart link
    Then I should see different Cart page elements

  @regression @smoke @goToLogIn @navigation
  Scenario: get the Log in form
    When I click on the Log in link
    Then I should see the log in form

  @regression @smoke @goToSignUp @navigation
  Scenario: get the Sign up form
    When I click on the Sign up link
    Then I should see the sign up form